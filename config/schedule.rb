env :PATH, ENV['PATH']

set :output, "log/cron.log"

every :day, at: "10pm" do
  rake "pages:prune_unseen"
end
