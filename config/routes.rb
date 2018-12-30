Rails.application.routes.draw do
  get 'db/index'
  get 'db' => 'db#index'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :items, only: [ :index, :show, :create]
    end
  end


  get 'test' => 'pages#test'

end
