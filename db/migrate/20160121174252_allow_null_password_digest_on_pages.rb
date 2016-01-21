class AllowNullPasswordDigestOnPages < ActiveRecord::Migration
  def change
    change_column_null :pages, :password_digest, null: true
  end
end
