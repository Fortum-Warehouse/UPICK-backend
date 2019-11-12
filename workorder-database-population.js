/* 
Script to populate the workorder db, run with npm run populate-wo
*/
const _ = require('underscore')
require('dotenv').config()
const item = require('./models/item')
const workorder = require('./models/workorder')
const mongoose = require('mongoose')
//Starting id for the workorders
const workorderStart = 123339

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', populate);

function populate() {
  item.find((err, res) => {
    let currentId = workorderStart;
    const workorders = [];
    const ids = res.map(a => a._id)

    for (let i = 0; i < 50; i++) {
      const wo = {
        id: currentId++,
        items: [],
      }
      const woi = _.sample(ids, (Math.floor(Math.random() * 9 + 1)))
      woi.forEach(val => {
        wo.items.push({ item: val, qty: Math.floor(Math.random() * 9 + 1) })
      })
      workorders.push(wo);
    }
    workorder.insertMany(workorders)
    /* .then( () => workorder.find().populate('items.item').exec((err, res) => {
       res.forEach(a => console.log(a.items))
     })
     );
     */
  })
}
