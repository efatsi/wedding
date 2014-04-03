class PagesController < ApplicationController
  ACTIONS = %w(index peeps details registry rsvp music)

  ACTIONS.each do |action|
    define_method action do
    end
  end

  def parts
  end
end
