Rails.application.routes.draw do
  root to: "pages#new"
  resources(
    :secrets,
    as: :pages,
    controller: :pages,
    only: [:new, :create]
  )
  get "/:url_key" => "pages#show", as: :page
  resources :permissions, only: [:new, :create]
end
