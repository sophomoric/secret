Rails.application.routes.draw do
  resources :secrets, as: :pages, controller: :pages, only: [:new, :create]
  get "/:url_key" => "permissions#new"
  resources :permissions, only: [:create]
end
