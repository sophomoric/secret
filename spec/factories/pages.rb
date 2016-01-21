FactoryGirl.define do
  factory :page do
    url_key "obscure"
    message "Defeat Rebulba"
    password "Password"
    require_password true
    duration 3
  end
end
