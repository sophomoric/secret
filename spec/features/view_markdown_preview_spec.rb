require "rails_helper"

feature "Visitor views markdown preview", js: true do
  scenario "inserts link" do
    visit new_page_path
    fill_in "Message", with: "<a href='www.example.com'>example</a>"

    expect(page).to have_link("example")
  end
end
