class AddRedirectToPages < ActiveRecord::Migration[5.0]
  def change
    add_column :pages, :redirect, :boolean, default: false
  end
end
