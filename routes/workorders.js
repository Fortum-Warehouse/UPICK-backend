const express = require('express')
const router = express.Router()


// Get all workorders
router.get('/', (req, res) => {
  // TODO: Create route to Get all workorders
  res.send('All workorders here')
})

// Get one workorder by id
router.get('/:id', (res, req) => {
  // TODO: Create route to Get one workorder
})


module.exports = router
