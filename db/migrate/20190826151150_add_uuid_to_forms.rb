class AddUuidToForms < ActiveRecord::Migration[5.2]
  def change
    add_column :forms, :visitor_uuid, :string
  end
end
