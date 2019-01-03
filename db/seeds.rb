# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Category
Category.create(name:"Pantalon")
Category.create(name:"Manteau")
Category.create(name:"Chemise")
Category.create(name:"Veste")

# Brand
Brand.create(name:"Zara")
Brand.create(name:"Sézane")
Brand.create(name:"H&M")
Brand.create(name:"Faguo")
Brand.create(name:"Sandro")
Brand.create(name:"Louis Vuitton")

# Material
Material.create(name:"Coton")
Material.create(name:"Soie")
Material.create(name:"Acrylique")
Material.create(name:"Elasthanne")

# LabelProduct
LabelProduct.create(name:"Coton Biologique")
LabelProduct.create(name:"Commerce Equitable")

# Items
Item.create(code_ref:"1111", name_ref:"Jean Bleu", category_id:1, brand_id:1, price:50, 
zone_filature:"Vietnam")
Item.create(code_ref:"1112", name_ref:"Jean Rouge", category_id:1, brand_id:1, price:50, 
zone_filature:"Vietnam")
Item.create(code_ref:"1113", name_ref:"Jean Jaune", category_id:1, brand_id:1, price:50, 
zone_filature:"Vietnam")
Item.create(code_ref:"1114", name_ref:"Jean Vert", category_id:1, brand_id:1, price:50, 
zone_filature:"Vietnam")

# Assembly
Assembly.create(material_id:1, item_id:1, percent:100)

# Specification
Specification.create(label_product_id:1, item_id:1)
