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
  items: {
    type: [Item],
    required: true,
    default: undefined
  }
})

module.exports = mongoose.model('Workorder', workorderSchema)
