env :PATH, ENV['PATH']
# every :day, at: "10pm" do
# for testing in prod
set :output, "log/cron.log"

every 5.minutes do
  rake "pages:prune_seen"
  rake "pages:prune_unseen"
end
