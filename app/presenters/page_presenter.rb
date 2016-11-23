# frozen_string_literal: true
class PagePresenter < SimpleDelegator
  OPTIONAL_FIELDS = [:url_key, :password, :duration].freeze

  def optional_fields_state
    if optional_fields_errors?
      ""
    else
      "hidden"
    end
  end

  private

  def optional_fields_errors?
    errors.any? { |field| OPTIONAL_FIELDS.include?(field) }
  end
end
