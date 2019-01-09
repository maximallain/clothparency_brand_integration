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
Material.create(name:"Polyester")
Material.create(name:"Laine")


# LabelProduct
LabelProduct.create(name:"Coton Biologique")
LabelProduct.create(name:"Commerce Equitable")

# Items
Item.create(code_ref:"5899/179", name_ref:"JEAN Z1975 SKINNY À CEINTURE", category_id:1, brand_id:1, price:25.99, 
zone_filature:"Vietnam")
Item.create(code_ref:"1A4H7U", name_ref:"CASHGORA DOUBLE FACE", category_id:2, brand_id:6, price:3300, 
zone_filature:"Vietnam")
Item.create(code_ref:"11133259985", name_ref:"BLOUSE MURPHY", category_id:3, brand_id:2, price:90, 
zone_filature:"Vietnam")
Item.create(code_ref:"713177", name_ref:"Manteau essentiel lainage", category_id:4, brand_id:3, price:99.99, 
zone_filature:"Vietnam")
# Item.create(code_ref:"1115", name_ref:"Jean Mauve", category_id:1, brand_id:1, price:50, 
# zone_filature:"Vietnam")
# Item.create(code_ref:"1116", name_ref:"Jean Orange", category_id:1, brand_id:1, price:50, 
# zone_filature:"Vietnam")
# Item.create(code_ref:"1117", name_ref:"Jean Rose", category_id:1, brand_id:1, price:50, 
# zone_filature:"Vietnam")

# Assembly
Assembly.create(material_id:1, item_id:1, percent:93)
Assembly.create(material_id:4, item_id:1, percent:5)
Assembly.create(material_id:5, item_id:1, percent:2)
Assembly.create(material_id:6, item_id:2, percent:99)
Assembly.create(material_id:2, item_id:2, percent:1)
Assembly.create(material_id:5, item_id:3, percent:100)
Assembly.create(material_id:5, item_id:4, percent:31)
Assembly.create(material_id:3, item_id:4, percent:7)
Assembly.create(material_id:6, item_id:4, percent:62)
# Assembly.create(material_id:1, item_id:5, percent:100)
# Assembly.create(material_id:2, item_id:6, percent:100)
# Assembly.create(material_id:3, item_id:7, percent:100)

# Specification
Specification.create(label_product_id:1, item_id:1)
Specification.create(label_product_id:2, item_id:1)
Specification.create(label_product_id:1, item_id:2)
Specification.create(label_product_id:2, item_id:3)

