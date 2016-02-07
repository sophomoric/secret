FactoryGirl.define do
  factory :page do
    message "Defeat Rebulba"
    password "Password"
    require_password true
    duration 3
  end
end
