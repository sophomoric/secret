# frozen_string_literal: true
class PagePresenter < SimpleDelegator
  OPTIONAL_FIELDS = [:url_key, :password, :duration].freeze

  def expires_at_options
    Expiration.expires_at.keys
  end

  def optional_fields_state
    if optional_fields_errors?
      ""
    else
      "hidden"
    end
  end

  def duration_state
    if duration_error?
      ""
    else
      "hidden"
    end
  end

  def to_param
    url_key
  end

  private

  def duration_error?
    errors.include?(:duration)
  end

  def optional_fields_errors?
    errors.any? { |field| OPTIONAL_FIELDS.include?(field) }
  end
end
