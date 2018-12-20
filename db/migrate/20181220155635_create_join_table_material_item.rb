class CreateJoinTableMaterialItem < ActiveRecord::Migration[5.2]
  def change
    create_join_table :materials, :items, table_name: :assemblies do |t|
      # t.index [:material_id, :item_id]
      # t.index [:item_id, :material_id]
    end
  end
end
