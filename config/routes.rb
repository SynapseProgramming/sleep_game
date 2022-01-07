Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'sleeps/index'
      get 'sleeps/create'
      get 'sleeps/find'
      get 'sleeps/delete'
    end
  end
  root 'home#index'
  get '*path', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
