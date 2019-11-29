//Script that pushes item db data to navvis poi description box
//ctrl+f const template to change the representation

require('dotenv').config()
const item = require('./models/item')
const mongoose = require('mongoose')
const request = require('request')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', synch)
let token

function synch() {
  const options = {
    method: 'POST',
    url: (process.env.NAVIS_URL + 'api/auth/token'),
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: `{"username": "${process.env.NAVIS_USERNAME}", "password": "${process.env.NAVIS_PASSWORD}"}`
  }

  console.log(options)
  request(options, (error, response, body) => {
    if (error) return console.log(error);
    token = JSON.parse(body).token;
    getPOI()
  })
}

function getPOI() {

  const options = {
    method: 'GET',
    url: (process.env.NAVIS_URL + 'api/pois'),
    headers:
      { 'X-Authorization': `Bearer ${token}` }
  }

  request(options, function (error, response, body) {
    if (error) return console.log(error);
    const pois = JSON.parse(body)
    console.log(pois);
    filterPOIS(pois)
  });

}

function filterPOIS(pois) {
  item.find(((err, items)=>{
    const itemLocs = items.map((i) => i.location)
    console.log(itemLocs)
    console.log(items)
    const poisToUpdate = pois.filter((poi) => itemLocs.includes(poi.titles.en))
    updatePOIS(poisToUpdate, items)
  }))
}

function updatePOIS(pois, data) {
  const updateData = pois.map((poiData) => {
    const i = data.find((element)=> element.location == poiData.titles.en);
    const template = `<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
        <h4>${i.category}</h4>
        <h3> ${i.name}</h3>
        <h5>stock</h5>
        <h6>${i.available}</h6>
        <h5>Material</h5>
        <h6>${i.material}</h6>
        <h5>id</h5>
        <h6>${i.id}</h6>
    </body>
    </html>`
    const poiDataUpdated =poiData
    poiDataUpdated.descriptions.en = template
    return poiDataUpdated
  })

  console.log(JSON.stringify(updateData) )

  var options = { method: 'PUT',
  url: (process.env.NAVIS_URL + 'api/pois'),
  headers: 
   {'X-Authorization': `Bearer ${token}`,
   'Content-Type': 'application/json;charset=UTF-8' },
  body: JSON.stringify(updateData) };

request(options, function (error, response, body) {
  if (error) return console.log(error);
  console.log(body);
});

}