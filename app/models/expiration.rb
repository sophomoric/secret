class Expiration
  DEFAULT = "30 days".freeze
  EXPIRES_AT = {
    "5 minutes" => 5.minutes.from_now,
    "1 hour" => 1.hour.from_now,
    "1 day" => 1.day.from_now,
    "1 week" => 1.week.from_now,
    "30 days" => 30.days.from_now
  }.freeze

  def self.translate(text)
    EXPIRES_AT[(text || DEFAULT)]
  end
end
