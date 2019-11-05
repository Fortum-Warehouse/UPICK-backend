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
  items: {
    type: [ItemSchema],
    default: undefined
  }
})
