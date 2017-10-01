require "rails_helper"

describe Expiration do
  describe ".translate" do
    it "translates string text to datetime" do
      Timecop.freeze do
        one_hour_later = Time.zone.now + 1.hour

        translated_time = Expiration.translate("1 hour")

        expect(translated_time.hour).to eq(one_hour_later.hour)
      end
    end

    it "uses 30 days as a default if input is nil" do
      Timecop.freeze do
        translated_time = Expiration.translate(nil)

        expect(translated_time.to_date).to eq(30.days.from_now.to_date)
      end
    end
  end
end
