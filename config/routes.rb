Rails.application.routes.draw do
  resources :blogs, only: [:index]
  mount ActionCable.server => '/cable'

  # Defines the root path route ("/")
  # root "articles#index"
end
