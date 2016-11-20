require "rails_helper"

xfeature "Visitor views markdown preview", js: true do
  scenario "inserts link" do
    visit new_page_path

    fill_in "page_message", with: "<a href='http://www.example.com'>example</a>"

    within ".preview-box" do
      expect(page).to have_link("example")
    end
  end

  scenario "edits url_key" do
    visit new_page_path
    click_button "More Options"

    fill_in "page_url_key", with: "test-it"

    expect(page).to have_text("test-it")
  end
end
