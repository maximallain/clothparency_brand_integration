# app/views/api/v1/categories/show.json.jbuilder
json.extract! @category, :id, :name, :created_at, :updated_at