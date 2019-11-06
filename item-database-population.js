/* 
This command will be used to fill the database.
*/

db.items.insertMany([
  { id: "10001",
    name: "O-ring kit, METSO",
    pn: "P/N 9695003",
    length: "various",
    unit: "pcs",
    material: "Viton,NBR",
    category: "Parts"
    location: "1-1-1",
    available: 4 },
    { id: "10002",
    name: "Shaft, METSO",
    pn: "P/N SH01ABC02E",
    length: "420 X 45",
    unit: "mm",
    material: "AISI 316L EN 1.4404",
    category: "Parts"
    location: "1-2-1",
    available: 2 },
]);

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
