require 'rails_helper'

RSpec.describe Permission, :type => :model do
  describe "#grant_for?" do
    it "returns false if password is incorrect for page" do
      page = create(:page)
      permission = Permission.new(page)

      expect(permission.grant_for?("false password")).to eq(false)
    end

    it "returns true with the correct password" do
      page = create(:page, password: "true password")
      permission = Permission.new(page)

      expect(permission.grant_for?("true password")).to eq(true)
    end
  end
end
