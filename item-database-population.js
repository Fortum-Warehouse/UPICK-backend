/* 
Script to populate the database, run with npm run populate
*/

require('dotenv').config()
const item = require('./models/item')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', populate);

function populate() {
  item.insertMany([
    { id: "10001", name: "O-ring kit, METSO", pn: "P/N 9695003", length: "various", unit: "pcs", material: "Viton,NBR", category: "Parts", location: "01-01-01", available: 4 },
    { id: "10002", name: "Shaft, METSO", pn: "P/N SH01ABC02E", length: "420 X 45", unit: "mm", material: "AISI 316L EN 1.4404", category: "Parts", location: "01-01-02", available: 2 },
    { id: "10003", name: "SKF Ball Bearing 6006-2Z/C3", pn: "6006-2Z/C3", length: "30 X 55 X 13", unit: "mm", material: "Steel", category: "Parts", location: "01-01-03", available: 12 },
    { id: "10004", name: "Flanged bore ball valve", pn: "PN100 - DN250", unit: "PN - DN", material: "AISI 316L", category: "Parts", location: "01-01-04", available: 2 },
    { id: "862", name: "Hexagon head Nut M8x100", length: "M8 X 100", unit: "mm", material: "A4", category: "Fasteners", location: "01-02-01", available: 0 },
    { id: "897", name: "Hexagon head Nut M8", length: "M8", material: "DIN 934 A4-80", category: "Fasteners", location: "01-02-02", available: 0 },
    { id: "941", name: "Spring lock washers M8", length: "M8 Form B", material: "DIN 127 A2", category: "Fasteners", location: "01-02-03", available: 0 },
    { id: "922", name: "Retaining rings", pn: "702402500607", length: "5,7 X 6 X 0,7", unit: "mm", material: "DIN 471 A2", category: "Fasteners", location: "01-02-04", available: 122 },
    { id: "36544", name: "Hylomar Blue Sealant", pn: "Hylomar Blue", length: "100", unit: "g", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }, { name: "GHS08: Health hazard", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/GHS-pictogram-silhouette.svg/1920px-GHS-pictogram-silhouette.svg.png" }], category: "Chemicals", location: "02-01-01", available: 20 },
    { id: "36712", name: "Loctite 577 Fast Cure Medium Strength Pipe Seal", pn: "Loctite 577", length: "50", unit: "ml", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }], category: "Chemicals", location: "02-01-02", available: 16 },
    { id: "36712", name: "Liqui Moly Rapid Cleaner Spray 500ml", pn: "Rapid Cleaner", length: "500", unit: "ml", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }, { name: "GHS02: Flammable", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/GHS-pictogram-flamme.svg/1920px-GHS-pictogram-flamme.svg.png" }, { name: "GHS09: Environmental hazard", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GHS-pictogram-pollu.svg/1200px-GHS-pictogram-pollu.svg.png" }], category: "Chemicals", location: "02-01-03", available: 80 },
    { id: "MST00153", name: "Stahlwille 905/25 Stud remover set", pn: "10650012068", unit: "pcs", category: "Special equipment", location: "02-02-01", available: 8 },
    { id: "MST00089", name: "Testo 316-2 Gas leak detector", pn: "10650061279", unit: "pcs", category: "Special equipment", location: "02-02-02", available: 4 },
    { id: "MST01482", name: "Bahco BE200 Inspection camera", pn: "10650053733", unit: "pcs", category: "Special equipment", location: "02-02-03", available: 5 }
  ]).then(console.log('db populated'));
}
