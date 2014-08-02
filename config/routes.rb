Rails.application.routes.draw do
  root "pages#about_us"

  %w(peeps details registry).each do |action|
    get "/#{action}" => "pages##{action}"
  end

  get "/music" => "song_suggestions#new"
  get "/all-music" => "song_suggestions#index"
  resources :song_suggestions, :only => [:create]
end
