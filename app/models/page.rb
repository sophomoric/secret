class Page < ActiveRecord::Base
  attr_encrypted(:message, key: :encryption_key)

  has_secure_password validations: false

  scope :unexpired, -> { where("pages.expires_at >= ?", Time.zone.now) }

  validates :url_key, presence: true
  validates :message, presence: true
  validates_uniqueness_of :url_key
  validates(
    :duration,
    inclusion: { in: (1..10), message: "Must be between 1 and 10 seconds" },
    if: :redirect?
  )

  after_initialize :set_random_url_key

  def encryption_key
    if password
      padded_or_chopped(password)
    else
      padded_or_chopped(ENV["SECRET_KEY_BASE"])
    end
  end

  private

  def padded_or_chopped(password)
    if password.length < 32
      " " * (32 - password.length) + password
    else
      password[0, 32]
    end
  end

  def set_random_url_key
    self.url_key = SecureRandom.hex(5) unless self.url_key.present?
  end
end
