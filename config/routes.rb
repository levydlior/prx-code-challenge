Rails.application.routes.draw do
  resources :blogs, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'

  # Defines the root path route ("/")
  # root "articles#index"
end
