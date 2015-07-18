require 'rails_helper'

RSpec.describe Page, :type => :model do
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
  end
end
