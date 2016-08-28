class RemoveMessageAndRequirePasswordFromPages < ActiveRecord::Migration
  def change
    remove_column :pages, :require_password, :boolean
    remove_column :pages, :message, :text
  end
end
