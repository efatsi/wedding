class SongSuggestionsController < ApplicationController

  def new
    @song_suggestion = SongSuggestion.new
  end

  def create
    @song_suggestion = SongSuggestion.new(song_params)

    if @song_suggestion.save
      params[:success] = "Thanks for the suggestion! Feel free to add as many as you like!"
      redirect_to "/music"
    else
      render "new"
    end
  end

  private

  def song_params
    params[:song_suggestion].permit!
  end
end
