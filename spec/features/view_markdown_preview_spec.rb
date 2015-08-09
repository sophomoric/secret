require "rails_helper"

feature "Visitor views markdown preview", js: true do
  scenario "inserts link" do
    visit new_page_path
    fill_in "Message", with: "<a href='www.example.com'>example</a>"

    expect(page).to have_link("example")
  end

  scenario "edits url_key" do
    visit new_page_path
    fill_in "page_url_key", with: "test-it"

    expect(page).to have_text("test-it")
  end

  scenario "click emoticons on desktop" do
    visit new_page_path
    fill_in "Message", with: "lol "
    smiley_face = page.all("ul.emo li").first

    expect(page).to have_text("lol #{smiley_face}")
  end
end
