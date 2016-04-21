class RemoveSeenColumnOnPages < ActiveRecord::Migration
  def change
    remove_column :pages, :seen, :boolean
  end
end
