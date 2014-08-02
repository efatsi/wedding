class PagesController < ApplicationController
  ACTIONS = %w(about_us peeps details registry)

  ACTIONS.each do |action|
    define_method action do
    end
  end

  def parts
  end
end
