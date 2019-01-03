# app/views/api/v1/materials/show.json.jbuilder
json.extract! @material, :id, :name, :created_at, :updated_at