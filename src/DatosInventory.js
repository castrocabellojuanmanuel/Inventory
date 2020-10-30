db.inventory.insertMany([
    { 
        item: "journal", 
        qty: 25, 
        size: { h: 14, w: 21, uom: "cm" }, 
        status: "A" },
    { 
        item: "notebook", 
        qty: 50, 
        size: { h: 8.5, w: 11, uom: "in" }, 
        status: "A" },
    { 
        item: "paper", 
        qty: 100, 
        size: { h: 8.5, w: 11, uom: "in" }, 
        status: "D" },
    { 
        item: "planner",
        qty: 75, 
        size: { h: 22.85, w: 30, uom: "cm" }, 
        status: "D" },
    { 
        item: "postcard",
        qty: 45, 
        size: { h: 10, w: 15.25, uom: "cm" }, 
        status: "A" },

    /*Datos añadidos */  

    { 
        item: "pencil",
        qty: 30, 
        size: { h: 12, w: 13, uom: "cm" }, 
        status: "B" },
   { 
        item: "pen",
        qty: 30, 
        size: { h: 14, w: 16, uom: "cm" }, 
        status: "C" },
    { 
        item: "dictionary",
        qty: 60, 
        size: { h: 22.85, w: 32, uom: "cm" }, 
        status: "B" }

 


])