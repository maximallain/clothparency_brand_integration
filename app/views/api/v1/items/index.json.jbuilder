# app/views/api/v1/items/index.json.jbuilder
json.array! @items do |item|
    json.extract! item, :id, :name_ref
end