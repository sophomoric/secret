class Expiration
  DEFAULT = "30 days".freeze

  class << self
    def translate(text)
      expires_at[(text || DEFAULT)]
    end

    def expires_at
      {
        "1 minute" => 1.minute.from_now,
        "5 minutes" => 5.minutes.from_now,
        "1 hour" => 1.hour.from_now,
        "1 day" => 1.day.from_now,
        "1 week" => 1.week.from_now,
        "30 days" => 30.days.from_now
      }
    end
  end
end
