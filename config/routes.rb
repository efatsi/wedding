Rails.application.routes.draw do
  root "home#index"

  get "/parts" => "home#parts"
end
