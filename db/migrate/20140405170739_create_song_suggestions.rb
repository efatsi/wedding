class CreateSongSuggestions < ActiveRecord::Migration
  def change
    create_table :song_suggestions do |t|
      t.string :title
      t.string :artist
      t.string :suggester
      t.string :notes

      t.timestamps
    end
  end
end
