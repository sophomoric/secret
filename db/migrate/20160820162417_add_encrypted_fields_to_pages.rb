class AddEncryptedFieldsToPages < ActiveRecord::Migration
  def change
    add_column :pages, :encrypted_message, :text
    add_column :pages, :encrypted_message_iv, :text
  end
end
