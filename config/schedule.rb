# every :day, at: "10pm" do
# for testing in prod
every 5.minutes do
  rake "pages:destroy_seen"
  rake "pages:prune_unseen"
end
