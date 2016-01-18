class Page < ActiveRecord::Base
  has_secure_password validations: true
  validates_uniqueness_of :url_key, conditions: -> { where(seen: false) }
  validates :duration, inclusion: { in: (1..10) }
end
