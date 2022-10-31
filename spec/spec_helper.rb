if ENV.fetch("COVERAGE", false)
  require "simplecov"
  SimpleCov.start "rails"
end

require "webmock/rspec"

# http://rubydoc.info/gems/rspec-core/RSpec/Core/Configuration
RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.syntax = :expect
  end

  config.mock_with :rspec do |mocks|
    mocks.syntax = :expect
    mocks.verify_partial_doubles = true
  end

  config.order = :random
end

require "shoulda/matchers"

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

# for localhost but also webdriver that calls googleapis:
# e.g. https://chromedriver.storage.googleapis.com/LATEST_RELEASE_106.0.5249
# Then downloads the corresponding package when you run your specs with the
# following line commented in:
# WebMock.allow_net_connect!
# and the line below commented out:
WebMock.disable_net_connect!(allow_localhost: true)
