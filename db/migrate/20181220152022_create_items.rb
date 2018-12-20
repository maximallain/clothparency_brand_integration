class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :code_ref
      t.string :name_ref
      t.string :zone_filature
      t.string :zone_tissage
      t.string :zone_eutrophisation
      t.string :zone_production
      t.text :photo
      t.float :price

      t.timestamps
    end
  end
end
