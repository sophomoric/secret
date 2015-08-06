class Page < ActiveRecord::Base
  has_secure_password validations: true
  validates_uniqueness_of :url_key, conditions: -> { where(seen: false) }

  def to_param
    url_key
  end
end
