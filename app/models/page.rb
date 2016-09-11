class Page < ActiveRecord::Base
  attr_encrypted(:message, key: :encryption_key)

  has_secure_password validations: false

  validates :message, presence: true
  validates_uniqueness_of :url_key
  validates(
    :duration,
    inclusion: { in: (1..10), message: "Must be between 1 and 10 seconds" }
  )

  before_save :set_random_url_key

  def encryption_key
    if password
      password + ENV.fetch("SECRET_KEY_BASE")
    else
      ENV.fetch("SECRET_KEY_BASE")
    end
  end

  private

  def set_random_url_key
    self.url_key = SecureRandom.hex(5) unless self.url_key.present?
  end
end
