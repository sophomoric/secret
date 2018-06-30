source "https://rubygems.org"

ruby "2.5.1"

gem "airbrake"
gem "autoprefixer-rails"

gem "attr_encrypted"

gem "bourbon", "~> 4.2.0"
gem "bcrypt"
gem "clipboard-rails"
gem "browser"
gem "coffee-rails", "~> 4.1.0"
gem "delayed_job_active_record"

gem "giphy"

gem "i18n-tasks"
gem "jquery-rails"
gem "autosize-rails"
gem "neat", "~> 1.7.0"
gem "newrelic_rpm", ">= 3.9.8"
gem "normalize-rails", "~> 3.0.0"
gem "pg"
gem "rack-canonical-host"
gem "rails", "~> 5.0.0.1"
gem "recipient_interceptor"
gem "redcarpet"
gem "refills"
gem "sass-rails", "~> 5.0"
gem "simple_form"
gem "title"
gem "uglifier", ">= 2.7.2"
gem "whenever", require: false

group :development do
  gem "thin"
  gem "spring"
  gem "spring-commands-rspec"
  gem "web-console"
end

group :development, :test do
  gem "awesome_print"
  gem "bundler-audit", require: false
  gem "byebug"
  gem "factory_girl_rails"
  gem "pry-rails"
  gem "rspec-rails"
  gem "teaspoon-jasmine"
end

group :test do
  gem "capybara"
  gem "chromedriver-helper"
  gem "selenium-webdriver"
  gem "capybara-screenshot"
  gem "database_cleaner"
  gem "formulaic"
  gem "launchy"
  gem "shoulda-matchers", require: false
  gem "simplecov", require: false
  gem "timecop"
  gem "webmock"
end

group :staging, :production do
  gem "rack-timeout"
end

#deploy
gem "capistrano"
gem "capistrano-bundler"
gem "capistrano-rails"
gem "capistrano-rbenv"

gem "dotenv-rails"
