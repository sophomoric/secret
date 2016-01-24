Giphy::Configuration.configure do |config|
  config.version = "v1"
  config.api_key = ENV.fetch("GIPHY_API_KEY")
end
