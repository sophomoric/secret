FactoryGirl.define do
  factory :page do
    password "Password"
    require_password true
    duration 3
    message "Defeat Rebulba"
  end
end
