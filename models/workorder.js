const mongoose = require('mongoose')

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
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
