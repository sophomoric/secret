require "rails_helper"

feature "Visitor views markdown preview", js: true do
  scenario "inserts link" do
    visit new_page_path

    fill_in "page_message", with: "<a href='www.example.com'>example</a>"

    expect(page).to have_link("example")
  end

  scenario "edits url_key" do
    visit new_page_path
    click_button "More Options"

    fill_in "page_url_key", with: "test-it"

    expect(page).to have_text("test-it")
  end
end
