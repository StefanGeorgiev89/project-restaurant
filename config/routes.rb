Rails.application.routes.draw do
  root 'static_pages#home'

  get 'static_pages/help'

  get 'static_pages/about'
  # post '/contacts', to:'static_pages/home'
  resources :contacts, only: [:new, :create]
 # match '/contacts',     to: 'contacts#new',             via: 'get'
# resources "contacts", only: [:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
