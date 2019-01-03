# app/views/api/v1/specifications/index.json.jbuilder
json.array! @specifications do |specification|
    json.extract! specification, :id, :label_product_id, :item_id
end