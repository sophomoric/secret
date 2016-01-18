set :stage, :production

server '45.55.244.40', user: 'deploy', roles: %w{web app db}
