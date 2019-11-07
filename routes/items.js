const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one item
router.get('/:id', getItem, (req, res) => {
  res.json(res.item)
})

// Delete one item
router.delete('/:id', getItem, async (req, res) => {
  try {
    await res.item.remove()
    res.json({ message: 'Item deleted' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Create one item
router.post('/', async (req, res) => {

    const item = new Item({
      id: req.body.id,
      name: req.body.name,
      pn: req.body.pn,
      length: req.body.itemLength,
      unit: req.body.unit,
      material: req.body.material,
      category: req.body.category,
      location: req.body.location,
      available: req.body.available
    })

    try {
      const newItem = await item.save()
      res.status(201).json(newItem)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }

})


// Helper function
async function getItem(req, res, next) {
  try {
    item = await Item.find({id: req.params.id})
    if (item == null) {
      return res.status(404).json({ message: 'Cant find item'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }

  res.item = item
  next()
}

module.exports = router
