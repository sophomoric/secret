class Page < ActiveRecord::Base
  has_secure_password validations: false

  validates :password_digest, presence: true, if: :require_password?
  validates :url_key, presence: true
  validates_uniqueness_of :url_key, conditions: -> { where(seen: false) }
  validates(
    :duration,
    inclusion: { in: (1..10), message: "Must be between 1 and 10 seconds" }
  )
end
