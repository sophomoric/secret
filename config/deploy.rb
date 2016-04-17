require "whenever/capistrano"

set :application, 'secret'
set :repo_url, 'git@github.com:sophomoric/secret.git'

set :deploy_to, '/home/deploy/secret'

set :linked_files, %w{config/database.yml .env}
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :whenever_command, "bundle exec whenever"

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, 'deploy:restart'
  after :finishing, 'deploy:cleanup'
end
