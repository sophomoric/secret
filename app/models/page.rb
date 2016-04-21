class Page < ActiveRecord::Base
  has_secure_password validations: false

  validates :password_digest, presence: true, if: :require_password?
  validates :url_key, presence: true
  validates :message, presence: true
  validates_uniqueness_of :url_key
  validates(
    :duration,
    inclusion: { in: (1..10), message: "Must be between 1 and 10 seconds" }
  )

  after_initialize :set_random_url_key

  private

  def set_random_url_key
    self.url_key = SecureRandom.hex(5) unless self.url_key.present?
  end
end
