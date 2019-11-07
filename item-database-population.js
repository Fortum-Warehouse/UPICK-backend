db.items.insertMany([
  { id: "10001", name: "O-ring kit, METSO", pn: "P/N 9695003", length: "various", unit: "pcs", material: "Viton,NBR", category: "Parts", location: "1-1-1", available: 4 },
  { id: "10002", name: "Shaft, METSO", pn: "P/N SH01ABC02E", length: "420 X 45", unit: "mm", material: "AISI 316L EN 1.4404", category: "Parts", location: "1-1-2", available: 2 },
  { id: "10003", name: "SKF Ball Bearing 6006-2Z/C3", pn: "6006-2Z/C3", length: "30 X 55 X 13", unit: "mm", material: "Steel", category: "Parts", location: "1-1-3", available: 12 },
  { id: "10004", name: "Flanged bore ball valve", pn: "PN100 - DN250", unit: "PN - DN", material: "AISI 316L", category: "Parts", location: "1-1-4", available: 2 },
  { id: "862", name: "Hexagon head Nut M8x100", length: "M8 X 100", unit: "mm", material: "A4", category: "Fasteners", location: "1-2-1", available: 0 },
  { id: "897", name: "Hexagon head Nut M8", length: "M8", material: "DIN 934 A4-80", category: "Fasteners", location: "1-2-2", available: 0 },
  { id: "941", name: "Spring lock washers M8", length: "M8 Form B", material: "DIN 127 A2", category: "Fasteners", location: "1-2-3", available: 0 },
  { id: "922", name: "Retaining rings", pn: "702402500607", length: "5,7 X 6 X 0,7", unit: "mm", material: "DIN 471 A2", category: "Fasteners", location: "1-2-4", available: 122 },
  { id: "36544", name: "Hylomar Blue Sealant", pn: "Hylomar Blue", length: "100", unit: "g", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }, { name: "GHS08: Health hazard", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/GHS-pictogram-silhouette.svg/1920px-GHS-pictogram-silhouette.svg.png" }], category: "Chemicals", location: "2-1-1", available: 20 },
  { id: "36712", name: "Loctite 577 Fast Cure Medium Strength Pipe Seal", pn: "Loctite 577", length: "50", unit: "ml", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }], category: "Chemicals", location: "2-1-2", available: 16 },
  { id: "36712", name: "Liqui Moly Rapid Cleaner Spray 500ml", pn: "Rapid Cleaner", length: "500", unit: "ml", material: "Chemical substance", hazards: [{ name: "GHS07: Harmful", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png" }, { name: "GHS02: Flammable", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/GHS-pictogram-flamme.svg/1920px-GHS-pictogram-flamme.svg.png" }, { name: "GHS09: Environmental hazard", pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GHS-pictogram-pollu.svg/1200px-GHS-pictogram-pollu.svg.png" }], category: "Chemicals", location: "2-1-3", available: 80 },
  { id: "MST00153", name: "Stahlwille 905/25 Stud remover set", pn: "10650012068", unit: "pcs", category: "Special equipment", location: "2-2-1", available: 8 },
  { id: "MST00089", name: "Testo 316-2 Gas leak detector", pn: "10650061279", unit: "pcs", category: "Special equipment", location: "2-2-2", available: 4 },
  { id: "MST01482", name: "Bahco BE200 Inspection camera", pn: "10650053733", unit: "pcs", category: "Special equipment", location: "2-2-3", available: 5 }
]);

/* 
This command will be used to fill the database.
*/

db.items.insertMany([
  {
    id: "10001",
    name: "O-ring kit, METSO",
    pn: "P/N 9695003",
    length: "various",
    unit: "pcs",
    material: "Viton,NBR",
    category: "Parts",
    location: "1-1-1",
    available: 4
  },
  {
    id: "10002",
    name: "Shaft, METSO",
    pn: "P/N SH01ABC02E",
    length: "420 X 45",
    unit: "mm",
    material: "AISI 316L EN 1.4404",
    category: "Parts",
    location: "1-1-2",
    available: 2
  },
  {
    id: "10003",
    name: "SKF Ball Bearing 6006-2Z/C3",
    pn: "6006-2Z/C3",
    length: "30 X 55 X 13",
    unit: "mm",
    material: "Steel",
    category: "Parts",
    location: "1-1-3",
    available: 12
  },
  {
    id: "10004",
    name: "Flanged bore ball valve",
    pn: "PN100 - DN250",
    unit: "PN - DN",
    material: "AISI 316L",
    category: "Parts",
    location: "1-1-4",
    available: 2
  },
  {
    id: "862",
    name: "Hexagon head Nut M8x100",
    length: "M8 X 100"
    unit: "mm",
    material: "A4",
    category: "Fasteners",
    location: "1-2-1",
    available: 0
  },
  {
    id: "897",
    name: "Hexagon head Nut M8",
    length: "M8"
    material: "DIN 934 A4-80",
    category: "Fasteners",
    location: "1-2-2",
    available: 0
  },
  {
    id: "941",
    name: "Spring lock washers M8",
    length: "M8 Form B",
    material: "DIN 127 A2",
    category: "Fasteners"
    location: "1-2-3",
    available: 0
  },
  {
    id: "922",
    name: "Retaining rings",
    pn: "702402500607",
    length: "5,7 X 6 X 0,7",
    unit: "mm",
    material: "DIN 471 A2",
    category: "Fasteners"
    location: "1-2-4",
    available: 122
  },
  {
    id: "36544",
    name: "Hylomar Blue Sealant",
    pn: "Hylomar Blue",
    length: "100",
    unit: "g",
    material: "Chemical substance",
    hazards: [
      {
        name: "GHS07: Harmful",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png"
      },
      {
        name: "GHS08: Health hazard",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/GHS-pictogram-silhouette.svg/1920px-GHS-pictogram-silhouette.svg.png"
      }
    ],
    category: "Chemicals",
    location: "2-1-1",
    available: 20
  },
  {
    id: "36712",
    name: "Loctite 577 Fast Cure Medium Strength Pipe Seal",
    pn: "Loctite 577",
    length: "50",
    unit: "ml",
    material: "Chemical substance",
    hazards: [
      {
        name: "GHS07: Harmful",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png"
      }
    ],
    category: "Chemicals",
    location: "2-1-2",
    available: 16
  },
  {
    id: "36712",
    name: "Liqui Moly Rapid Cleaner Spray 500ml",
    pn: "Rapid Cleaner",
    length: "500",
    unit: "ml",
    material: "Chemical substance",
    hazards: [
      {
        name: "GHS07: Harmful",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png"
      },
      {
        name: "GHS02: Flammable",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/GHS-pictogram-flamme.svg/1920px-GHS-pictogram-flamme.svg.png"
      },
      {
        name: "GHS09: Environmental hazard",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GHS-pictogram-pollu.svg/1200px-GHS-pictogram-pollu.svg.png"
      },
    ],
    category: "Chemicals",
    location: "2-1-3",
    available: 80
  },
  {
    id: "MST00153",
    name: "Stahlwille 905/25 Stud remover set",
    pn: "10650012068",
    unit: "pcs",
    category: "Special equipment",
    location: "2-2-1",
    available: 8
  },
  {
    id: "MST00089",
    name: "Testo 316-2 Gas leak detector",
    pn: "10650061279",
    unit: "pcs",
    category: "Special equipment",
    location: "2-2-2",
    available: 4
  },
  {
    id: "MST01482",
    name: "Bahco BE200 Inspection camera",
    pn: "10650053733",
    unit: "pcs",
    category: "Special equipment",
    location: "2-2-3",
    available: 5
  }
]);

// Example form mongo website
db.inventory.insertMany([
  { item: "journal", qty: 25, status: "A", size: { h: 14, w: 21, uom: "cm" }, tags: ["blank", "red"] },
  { item: "notebook", qty: 50, status: "A", size: { h: 8.5, w: 11, uom: "in" }, tags: ["red", "blank"] },
  { item: "paper", qty: 10, status: "D", size: { h: 8.5, w: 11, uom: "in" }, tags: ["red", "blank", "plain"] },
  { item: "planner", qty: 0, status: "D", size: { h: 22.85, w: 30, uom: "cm" }, tags: ["blank", "red"] },
  { item: "postcard", qty: 45, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: ["blue"] }
]);

// Test with one chemical
db.items.insert(
  {
    id: "36712",
    name: "Liqui Moly Rapid Cleaner Spray 500ml",
    pn: "Rapid Cleaner",
    length: "500",
    unit: "ml",
    material: "Chemical substance",
    hazards: [
      {
        name: "GHS07: Harmful",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GHS-pictogram-exclam.svg/1200px-GHS-pictogram-exclam.svg.png"
      },
      {
        name: "GHS02: Flammable",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/GHS-pictogram-flamme.svg/1920px-GHS-pictogram-flamme.svg.png"
      },
      {
        name: "GHS09: Environmental hazard",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GHS-pictogram-pollu.svg/1200px-GHS-pictogram-pollu.svg.png"
      },
    ],
    category: "Chemicals",
    location: "2-1-3",
    available: 80
  }
)

// JSON For hazards, pic urls not correct

{
  "name": "GHS01: Explosive",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS02: Flammable",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS03: Oxidizing",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS04: Compressed Gas",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS05: Corrosive",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS06: Toxic",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS07: Harmful",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS08: Health hazard",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
},
{
  "name": "GHS09: Environmental hazard",
    "pic": "https://en.wikipedia.org/wiki/GHS_hazard_pictograms#/media/File:GHS-pictogram-explos.svg"
}


// JSON to test POST API
{
  "id": "10001",
    "name": "O-ring kit, METSO",
      "pn": "P/N 9695003",
        "itemLength": "various",
          "unit": "pcs",
            "material": "Viton,NBR",
              "category": "Parts",
                "location": "1-1-1",
                  "available": 4
}
