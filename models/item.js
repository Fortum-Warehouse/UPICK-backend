const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pn: {
    type: String
  },
  itemLength: {
    type: Number
  },
  unit: {
    type: String
  },
  material: {
    type: String
  },
  hazards: [
    {
      name: {
        type: String
      },
      pic: {
        type: String
      }
    }
  ],
  category: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  available: {
    type: Number
  }
})

module.exports = mongoose.model('Item', itemSchema)
