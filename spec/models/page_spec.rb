require 'rails_helper'

describe Page do
  it { should validate_uniqueness_of(:url_key) }

  describe "url_key initialization" do
    it "sets a random 10 digit url key if none exist" do
      page = build(:page, url_key: nil)
      page.save!

      expect(page.url_key.length).to eq(10)
    end
  end

  describe "duration" do
    it "cannot be outside the range of 1 and 10" do
      page = build(:page, duration: 11)

      expect(page).to_not be_valid
      expect(page.errors[:duration]).to be_present
    end

    it "rounds to an integer" do
      page = build(:page, duration: 1.5)

      expect(page.duration).to eq(1)
    end
  end
end
