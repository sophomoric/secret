require "rails_helper"

feature "create and view a multiview page" do
  scenario "visit a page twice" do
    visit new_page_path
    fill_in "page_url_key", with: "example"
    fill_in "page_message", with: "Stop Rebulba!"
    check "page_multiview"

    click_button "Create"

    visit page_path("example")

    expect(page).to have_text("Stop Rebulba!")

    visit page_path("example")

    expect(page).to have_text("Stop Rebulba!")
  end

  scenario "with password" do
    visit new_page_path
    fill_in "page_url_key", with: "example"
    fill_in "page_message", with: "Stop Rebulba!"
    check "page_multiview"
    fill_in "page_password", with: "password"

    click_button "Create"

    visit page_path("example")
    fill_in "Password", with: "password"
    click_button "Submit"

    expect(page).to have_text("Stop Rebulba!")

    visit page_path("example")
    fill_in "Password", with: "password"
    click_button "Submit"

    expect(page).to have_text("Stop Rebulba!")
  end
end
