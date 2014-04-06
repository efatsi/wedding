Rails.application.routes.draw do
  root "pages#index"

  %w(peeps details registry rsvp).each do |action|
    get "/#{action}" => "pages##{action}"
  end

  get "/music" => "song_suggestions#new"
  resources :song_suggestions, :only => [:create]
end
