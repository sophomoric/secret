require "rails_helper"

feature "User searches gif", js: true do
  include GiphyHelper

  scenario do
    stub_gif_search_results("dog.gif")

    visit new_page_path
    fill_in "gif_search_phrase", with: "dog"
    click_button "Search"

    expect(page).to have_xpath("//img[@src=\"dog.gif\"]")
  end
end
