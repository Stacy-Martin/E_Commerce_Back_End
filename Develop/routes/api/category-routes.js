// TODO:  Update category, router.put, line 55

// EXPRESS IS THE MIDDLEWARE FUNCTION - HAVE ACCESS TO THE REQUEST AND RESPONSE OBJECT, 
const router = require('express').Router();
const { Category, Product } = require('../../models');

// These get/post/put/delete requests are the `/api/categories` endpoint


  // CATEGORY.FINDALL IS A PROMISE ARRAY MODEL,
  // WHERE CATEGORY IS A MODEL AND FINDALL QUERIES FOR (OBJECTS/STRINGS/ARRAYS/ETC)
  // router.get handles GET requests to the /user/:id path.
  // TODO: find all categories - be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [Product]
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// TODO: find one category by its `id` value - be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// TODO - create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// TODO - update a category by its `id` value ???
router.put('/:id', (req, res) => {
});


// TODO - delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
}
});



module.exports = router;
