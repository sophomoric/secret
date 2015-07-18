require "rails_helper"

feature "Visitor Creates a Secret" do
  scenario "custom url key" do
    visit new_page_path
    fill_in "Url", with: "example"
    fill_in "Message", with: "Stop Rebulba!"
    fill_in "Password", with: "Password"
    click_button "Create"

    expect(page).to have_content("example")
    expect(Page.count).to eq(1)
  end

  scenario "page with errors" do
    visit new_page_path
    click_button "Create"

    expect(page).to have_content("can't be blank")
  end
end
