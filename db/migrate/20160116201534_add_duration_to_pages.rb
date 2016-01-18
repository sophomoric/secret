class AddDurationToPages < ActiveRecord::Migration
  def change
    add_column :pages, :duration, :integer
  end
end
