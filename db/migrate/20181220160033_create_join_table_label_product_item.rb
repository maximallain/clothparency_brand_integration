class CreateJoinTableLabelProductItem < ActiveRecord::Migration[5.2]
  def change
    create_join_table :label_products, :items, table_name: :specifications do |t|
      # t.index [:label_product_id, :item_id]
      # t.index [:item_id, :label_product_id]
    end
  end
end
