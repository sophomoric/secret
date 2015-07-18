class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :url_key
      t.text :message, null: false, default: ""
      t.string :password_digest, null: false
      t.boolean :seen, default: false
      t.timestamps null: false
    end

    add_index :pages, [:seen, :url_key]
  end
end
