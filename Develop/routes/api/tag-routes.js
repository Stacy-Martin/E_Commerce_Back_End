// TODO:  update tag function, router.put
// TODO:  better understand wtf is going on with these routes in general
// TODO:  study the different response numbers


const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// ?? on these routes are we using category. (findALl or findByPK etc) or tag. ??
// ??  What is this create(req.body) ??


// find all tags and include associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Category.findAll({
      include: [Product]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find a single tag by its `id` and include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Category.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: complete this route 
// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});


// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
