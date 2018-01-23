Rails.application.routes.draw do
  root 'spa#index'
  namespace :api do
      namespace :v1 do
        resources :posts, only: [:index, :create, :destroy, :update]
      end
    end
end
