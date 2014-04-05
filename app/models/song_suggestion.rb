class SongSuggestion < ActiveRecord::Base
  validates :title, :artist, :suggester, :presence => true
end
