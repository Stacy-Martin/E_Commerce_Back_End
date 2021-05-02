// import models - THIS IS WHERE YOU BUILD YOUR ASSOCIATIONS
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id', onDelete: "CASCADE"
  // Define an alias for when data is retrieved
  //as: 'product_category'  
  },
);


// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'
  // Define an alias for when data is retrieved
  // as: 'category_product'  
  },
);


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, foreignKey:'product_id'
  // Define an alias for when data is retrieved
  // as: 'product_tags'  
  },
);


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, foreignKey:'tag_id'
  // Define an alias for when data is retrieved
  // as: 'product_tags'  
  },
);


module.exports = { Product, Category, Tag, ProductTag, };




