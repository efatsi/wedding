class SongMailer < ActionMailer::Base
  default from: "Our Website :) <new.song@eliasandkelsey.com>"

  def alert(song_suggestion)
    @title     = song_suggestion.title
    @artist    = song_suggestion.artist
    @suggester = song_suggestion.suggester
    @notes     = song_suggestion.notes

    mail(:to => emails, :subject => "New Song from #{@suggester}!")
  end

  private

  def emails
    [
      "Eli Fatsi <eli.fatsi@viget.com>",
      "Kelsey Butler <kels321@gmail.com>"
    ]
  end
end
