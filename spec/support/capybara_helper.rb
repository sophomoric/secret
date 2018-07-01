require "capybara"

Capybara.register_driver :chrome do |app|
  options = Selenium::WebDriver::Chrome::Options.new(
    args: %w[no-sandbox headless disable-gpu]
  )
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
end

Capybara.javascript_driver = :chrome
