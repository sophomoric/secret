require 'rails_helper'

RSpec.describe Page, :type => :model do
  it { is_expected.to validate_presence_of(:url_key) }
  it { is_expected.to validate_uniqueness_of(:url_key) }

  describe "url_key initialization" do
    it "has a random 20 character string if no value is specified" do
      page = build(:page)

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
