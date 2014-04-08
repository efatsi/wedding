class SongSuggestionsController < ApplicationController
  before_filter :load_song_suggestions

  def new
    @song_suggestion = SongSuggestion.new
  end

  def create
    @song_suggestion = SongSuggestion.new(song_params)

    if @song_suggestion.save
      flash[:success] = "Thanks for the suggestion! Feel free to add as many as you like!"
      redirect_to "/music"
    else
      flash[:failure] = "Gotta fill out these things out please :)"
      render "new"
    end
  end

  def index
  end

  private

  def song_params
    params[:song_suggestion].permit!
  end

  def load_song_suggestions
    @song_suggestions = SongSuggestion.all.reverse
  end
end
