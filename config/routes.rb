Rails.application.routes.draw do
  resources :secrets, as: :pages, controller: :pages, only: [:new, :create]
end
