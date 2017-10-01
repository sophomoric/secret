require 'rails_helper'

describe Page do
  describe ".unexpired" do
    it "does not allow expired pages to be viewed" do
      _expired_page = create(:page, expires_at: 10.minutes.ago)
      unexpired_page = create(:page, expires_at: 5.days.from_now)

      expect(Page.unexpired).to eq([unexpired_page])
    end
  end

  it "validates uniqueness of url_key" do
    page = create(:page, url_key: "AA", password: nil)

    expect(page).to validate_uniqueness_of(:url_key)
  end

  describe "url_key initialization" do
    it "has a random 20 character string if no value is specified" do
      page = build(:page)

      expect(page.url_key.length).to eq(10)
    end
  end

  describe "duration" do
    it "cannot be outside the range of 1 and 10 if set to redirect" do
      page = build(:page, duration: 11, redirect: true)

      expect(page).to_not be_valid
      expect(page.errors[:duration]).to be_present
    end

    it "ignores duration validation if redirect is set to false" do
      page = build(:page, duration: 999, redirect: false)

      expect(page).to be_valid
    end

    it "rounds to an integer" do
      page = build(:page, duration: 1.5)

      expect(page.duration).to eq(1)
    end
  end
end
