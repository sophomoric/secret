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

  def sendable_message
    link = Rails.application.routes.url_helpers.page_url(self)
    message = "Here is a link to a onetime note"
    message += " that expires in #{time_until_expiration}"
    message += " ("
    message += "#{expires_at.in_time_zone.strftime("%m/%d/%Y")}"
    message += " at #{expires_at.in_time_zone.strftime("%I:%M%p %Z")}."
    message += ")"
    message += " It can only be viewed once." unless multiview?
    message += " "
    message += link
  end

  def to_param
    url_key
  end

  private

  def time_until_expiration
    seconds_until_expiration = expires_at - Time.current
    unit = if seconds_until_expiration > 1.day
             "day"
           elsif seconds_until_expiration > 1.hour
             "hour"
           elsif seconds_until_expiration > 1.minute
             "minute"
           else
             "second"
           end
    "#{(seconds_until_expiration / 1.send(unit)).round} #{unit.pluralize}"
  end

  def duration_error?
    errors.include?(:duration)
  end

  def optional_fields_errors?
    errors.any? { |field| OPTIONAL_FIELDS.include?(field) }
  end
end
