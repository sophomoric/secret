class AddExpiresAtToPages < ActiveRecord::Migration[5.0]
  def change
    add_column :pages, :expires_at, :datetime, index: true
  end
end
