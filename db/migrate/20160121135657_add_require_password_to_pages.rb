class AddRequirePasswordToPages < ActiveRecord::Migration
  def change
    add_column :pages, :require_password, :boolean, default: true, null: false
  end
end
