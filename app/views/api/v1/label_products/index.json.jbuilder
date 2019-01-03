# app/views/api/v1/label_products/index.json.jbuilder
json.array! @label_products do |label_product|
    json.extract! label_product, :id, :name
end