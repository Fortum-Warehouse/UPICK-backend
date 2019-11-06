const mongoose = require('mongoose')

const Item = mongoose.model('Item')

const workorderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  items: [
    {
      item: {
        type: Item,
        required: true,
        default: undefined
      },
      qty: {
        type: Number,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('Workorder', workorderSchema)
