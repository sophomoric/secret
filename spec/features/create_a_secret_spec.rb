require "rails_helper"

feature "Visitor Creates a Secret" do
  scenario "no password" do
    visit new_page_path
    fill_in "page_url_key", with: "example"
    fill_in "page_message", with: "Stop Rebulba!"
    fill_in "page_duration", with: 3

    click_button "Create"

    expect(page).to have_content("example")

    click_link("here")
    expect(page).to have_text("Stop Rebulba!")
    expect(Page.count).to eq(0)
  end

  scenario "no url_key" do
    visit new_page_path

    expect(page).to have_text(root_path + "example")

    fill_in "page_message", with: "Stop Rebulba!"
    fill_in "page_duration", with: 3
    fill_in "page_password", with: "Password"

    click_button "Create"

    click_link("here")
    fill_in "Password", with: "Password"
    click_button "Submit"
    expect(page).to have_content("Stop Rebulba!")
  end

  scenario "page with errors" do
    visit new_page_path
    click_button "Create"

    expect(page).to have_content("can't be blank")
  end
end
