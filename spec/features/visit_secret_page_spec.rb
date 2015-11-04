require "rails_helper"

feature "Visit Secret Page", js: true do
  scenario "authenticate with password" do
    secret_page = create(:page, seen: false)
    visit "/#{secret_page.url_key}"
    fill_in "Password", with: secret_page.password
    click_button "Submit"

    expect(page).to have_content(secret_page.message)
  end

  scenario "wrong password" do
    secret_page = create(:page, seen: false)
    visit "/#{secret_page.url_key}"
    fill_in "Password", with: "Not the password"
    click_button "Submit"

    expect(page).not_to have_content(secret_page.message)
    expect(page).to have_content("Password")
  end

  scenario "visiting page again should not show message" do
    secret_page = create(:page, seen: false)
    visit_and_authenticate_for(secret_page)

    expect(page).to have_content(secret_page.message)

    expect do
      visit_and_authenticate_for(secret_page)
    end.to raise_error(ActionController::RoutingError)
  end

  scenario "creator used markdown" do
    secret_page = create(
      :page,
      message: "<a href='https://www.google.com'>google</a>"
    )
    visit_and_authenticate_for(secret_page)

    expect(page).to have_link("google")
    expect(current_path).to eq("/")
  end

  def current_path
    URI.parse(current_url).path
  end

  def visit_and_authenticate_for(secret_page)
    visit "/#{secret_page.url_key}"
    fill_in "Password", with: secret_page.password
    click_button "Submit"
  end
end
