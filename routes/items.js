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

// Getting one item
router.get('/:id', (req, res) => {
})

// Creating one item
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

module.exports = router
