class CreateLabelProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :label_products do |t|
      t.string :name

      t.timestamps
    end
  end
end
