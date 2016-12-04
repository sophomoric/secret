Rails.application.routes.draw do
  root to: "pages#new"
  resources :secrets, as: :pages, controller: :pages, only: [:new, :create]
  get "/:url_key" => "permissions#new", as: :page
  resources :permissions, only: [:create]
  resources :previews, only: [:create]

  resources :gif_searches, only: [:create]
end
