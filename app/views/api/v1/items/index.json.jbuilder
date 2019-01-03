# app/views/api/v1/items/index.json.jbuilder
json.array! @items do |item|
    json.extract! item, :id, :code_ref, :name_ref, :zone_filature, :zone_tissage, :zone_eutrophisation, :zone_production, :photo, :price, :created_at, :updated_at, :brand_id, :category_id
end