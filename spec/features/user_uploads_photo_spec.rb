require "rails_helper"

feature "User uploads photo" do
  scenario do
    visit root_url

    click_button "More Options"

    click_button "Choose File"
  end
end
