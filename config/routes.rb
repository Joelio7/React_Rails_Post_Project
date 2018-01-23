Rails.application.routes.draw do
  root 'spa#index'
  namespace :api do
      namespace :v1 do
        resources :posts, only: [:index, :create, :destroy, :update]
      end
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
