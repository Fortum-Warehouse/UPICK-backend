const express = require('express')
const workorder = require('../models/workorder')
const router = express.Router()


// Get all workorders
router.get('/', (req, res) => {
  workorder.find((err, wo) => {
    res.send(wo);
  })
})

// Get one workorder by id
router.get('/:id', (req, res) => {
  workorder.find({ id: req.params.id }).populate('items.item').exec((err, result) => {
    res.send(result)
  })
})


module.exports = router
