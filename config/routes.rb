Rails.application.routes.draw do
  root "pages#index"

  %w(peeps details registry rsvp music).each do |action|
    get "/#{action}" => "pages##{action}"
  end

  get "/parts"    => "pages#parts"
end
