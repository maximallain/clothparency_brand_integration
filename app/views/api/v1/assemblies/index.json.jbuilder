# app/views/api/v1/assemblies/index.json.jbuilder
json.array! @assemblies do |assembly|
    json.extract! assembly, :id, :material_id, :item_id, :percent
end