class DefaultRequirePasswordToFalse < ActiveRecord::Migration
  def up
    change_column_default :pages, :require_password, false
  end

  def down
    change_column_default :pages, :require_password, true
  end
end
