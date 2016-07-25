class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.attachment :avatar
      t.belongs_to :page

      t.timestamps null: false
    end
  end
end
