require "rails_helper"

feature "Visitor Creates a Secret" do
  scenario "no password" do
    visit new_page_path
    fill_in "page_url_key", with: "example"
    fill_in "page_message", with: "Stop Rebulba!"
    fill_in "page_duration", with: 3
    uncheck "Require password"

    click_button "Create"

    expect(page).to have_content("example")
    expect(Page.last.message).to eq("Stop Rebulba!")
  end

  scenario "custom url key" do
    visit new_page_path
    fill_in "page_url_key", with: "example"
    fill_in "page_message", with: "Stop Rebulba!"
    fill_in "page_duration", with: 3
    fill_in "page_password", with: "Password"

    click_button "Create"

    expect(page).to have_content("example")
    expect(Page.last.message).to eq("Stop Rebulba!")
  end

  scenario "page with errors" do
    visit new_page_path
    click_button "Create"

    expect(page).to have_content("can't be blank")
  end
end
