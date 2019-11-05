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
  length: {
    type: Number
  },
  unit: {
    type: String
  },
  material: {
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