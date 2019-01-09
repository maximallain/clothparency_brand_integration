Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#index'
  get '/items' => 'pages#index'
  get '/items/:id', to: 'pages#index'

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :categories, only: [ :index, :show, :create, :update, :destroy]
      resources :brands, only: [ :index, :show, :create, :update, :destroy]
      resources :materials, only: [ :index, :show, :create, :update, :destroy]
      resources :label_products, only: [ :index, :show, :create, :update, :destroy]
      resources :items, only: [ :index, :show, :create, :update, :destroy]
      resources :assemblies, only: [ :index, :show, :create, :update, :destroy]
      resources :specifications, only: [ :index, :show, :create, :update, :destroy]
    end
  end
  
  

end
