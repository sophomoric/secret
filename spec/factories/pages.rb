FactoryBot.define do
  factory :page do
    password { "Password" }
    duration { 3 }
    message { "Defeat Rebulba" }
    expires_at { 1.week.from_now }
  end
end
