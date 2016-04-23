require "rails_helper"

feature "Bot visits secret page", js: true do
  scenario "no password required" do
    stub_browser_as_bot(true)
    secret_page = create(:page, password: nil, require_password: false)

    visit "/#{secret_page.url_key}"

    expect(page).to have_text("Your onetime note is here")
  end

  def stub_browser_as_bot(boolean)
    allow_any_instance_of(PermissionsController).
      to receive(:bot?).and_return(boolean)
  end
end
