require "rails_helper"

feature "User searches gif", js: true do
  scenario do
    stub_gif_search_results("dog.gif")

    visit new_page_path
    fill_in "Phrase", with: "dog"
    click_button "Search"

    expect(page).to have_xpath("//img[@src=\"dog.gif\"]")
  end

  def stub_gif_search_results(url)
    stub_request(:any, %r{http:\/\/api.giphy.com}).
      to_return(body: req_body(url))
  end

  def req_body(url)
    {
      "data": [
        {
          images: {
            fixed_height: {
              url: url,
            }
          }
        },
      ]
    }.to_json
  end
end
