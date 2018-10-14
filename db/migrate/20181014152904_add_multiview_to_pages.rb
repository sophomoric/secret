class AddMultiviewToPages < ActiveRecord::Migration[5.2]
  def change
    add_column :pages, :multiview, :boolean, default: false
  end
end
