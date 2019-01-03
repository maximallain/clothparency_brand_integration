# app/views/api/v1/brands/index.json.jbuilder
json.array! @brands do |brand|
    json.extract! brand, :id, :name, :created_at, :updated_at
end