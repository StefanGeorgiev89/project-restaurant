class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :massage
      t.string :nickname

      t.timestamps
    end
  end
end
