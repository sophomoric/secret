set :stage, :production

server '45.55.244.40', user: 'deploy', roles: %w{web app db}

namespace :deploy do
  desc "Update crontab with whenever"
  task :update_cron do
    on roles(:app) do
      within current_path do
        execute :bundle, :exec, "whenever --update-crontab #{fetch(:application)}"
      end
    end
  end

  after :finishing, 'deploy:update_cron'
end
