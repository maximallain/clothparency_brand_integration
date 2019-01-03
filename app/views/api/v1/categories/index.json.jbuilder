# app/views/api/v1/categories/index.json.jbuilder
json.array! @categories do |category|
    json.extract! category, :id, :name, :created_at, :updated_at
end