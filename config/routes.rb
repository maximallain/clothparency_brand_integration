Rails.application.routes.draw do
  get 'db/index'
  get 'db' => 'db#index'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :categories, only: [ :index, :show, :create, :update, :destroy]
      resources :brands, only: [ :index, :show, :create, :update, :destroy]
      resources :materials, only: [ :index, :show, :create, :update, :destroy]
      resources :labelproducts, only: [ :index, :show, :create, :update, :destroy]
      resources :items, only: [ :index, :show, :create, :update, :destroy]
      resources :assemblies, only: [ :index, :show, :create, :update, :destroy]
      resources :specifications, only: [ :index, :show, :create, :update, :destroy]
    end
  end


  get 'test' => 'pages#test'

end
