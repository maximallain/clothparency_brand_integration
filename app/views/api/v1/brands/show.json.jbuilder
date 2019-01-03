# app/views/api/v1/brands/show.json.jbuilder
json.extract! @brand, :id, :name, :created_at, :updated_at