# app/views/api/v1/materials/index.json.jbuilder
json.array! @materials do |material|
    json.extract! material, :id, :name, :created_at, :updated_at
end