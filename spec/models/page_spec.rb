require 'rails_helper'

RSpec.describe Page, :type => :model do
  it { is_expected.to validate_presence_of(:url_key) }

  describe "url_key initialization" do
    it "has a random 20 character string if no value is specified" do
      page = build(:page)

      expect(page.url_key.length).to eq(20)
    end
  end

  describe "password validation" do
    it "validates password presence" do
      page = build(:page, password: nil, require_password: true)

      expect(page).not_to be_valid
      expect(page.errors[:password_digest]).to be_present
    end

    it "does not validate password if a password is not required" do
      page = build(:page, password: nil, require_password: false)

      expect(page).to be_valid
    end
  end

  describe "url_key inclusion validation" do
    it "does not allow the same url key if both were unseen" do
      create(:page, url_key: "example", seen: false)
      page = build(:page, url_key: "example", seen: false)

      expect(page).not_to be_valid
    end

    it "can have the same url key as a seen page" do
      create(:page, url_key: "dont_copy", seen: true)
      page = build(:page, url_key: "dont_copy")

      expect(page).to be_valid
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
end
