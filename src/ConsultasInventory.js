db.inventory.find( {} )
/*      (MUESTRA TODOS LOS DOCUMENTOS DE LA COLECCION)
{ "_id" : ObjectId("5f9b283c6745fa43a7995b57"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b58"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b59"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b5a"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b5b"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b5c"), "item" : "pencil", "qty" : 30, "size" : { "h" : 12, "w" : 13, "uom" : "cm" }, "status" : "B" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b5d"), "item" : "pen", "qty" : 30, "size" : { "h" : 14, "w" : 16, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9b283c6745fa43a7995b5e"), "item" : "dictionary", "qty" : 60, "size" : { "h" : 22.85, "w" : 32, "uom" : "cm" }, "status" : "B" }*/
db.inventory.find( {} ).pretty()
/*      (MUESTRA TODOS LOS DOCUMENTOS DE LA COLECCION DE MANERA MAS ORDENADA)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b57"),
        "item" : "journal",
        "qty" : 25,
        "size" : {
                "h" : 14,
                "w" : 21,
                "uom" : "cm"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b58"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b59"),
        "item" : "paper",
        "qty" : 100,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "D"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5a"),
        "item" : "planner",
        "qty" : 75,
        "size" : {
                "h" : 22.85,
                "w" : 30,
                "uom" : "cm"
        },
        "status" : "D"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5b"),
        "item" : "postcard",
        "qty" : 45,
        "size" : {
                "h" : 10,
                "w" : 15.25,
                "uom" : "cm"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5c"),
        "item" : "pencil",
        "qty" : 30,
        "size" : {
                "h" : 12,
                "w" : 13,
                "uom" : "cm"
        },
        "status" : "B"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5d"),
        "item" : "pen",
        "qty" : 30,
        "size" : {
                "h" : 14,
                "w" : 16,
                "uom" : "cm"
        },
        "status" : "C"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5e"),
        "item" : "dictionary",
        "qty" : 60,
        "size" : {
                "h" : 22.85,
                "w" : 32,
                "uom" : "cm"
        },
        "status" : "B"
}*/
db.inventory.find( {} ).count()
/*  (CUENTA EL NUMERO DE DOCUMENTOS DE LA COLECCION)
8
*/
db.inventory.find({qty: 25,status: "A"}).pretty()
/*      (MUESTRA LOS DOCUMENTOS CON qty: 25 Y status:A EL and ESTA IMPLICITO)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b57"),
        "item" : "journal",
        "qty" : 25,
        "size" : {
                "h" : 14,
                "w" : 21,
                "uom" : "cm"
        },
        "status" : "A"
} */
db.inventory.find({ $and: [  {qty:30}, {status: "B" } ] } ).pretty()
/* (MUESTRA LOS DOCUMENTOS CON LOS CAMPOS INDICADOS. EL and ESTA EXPLICITO)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5c"),
        "item" : "pencil",
        "qty" : 30,
        "size" : {
                "h" : 12,
                "w" : 13,
                "uom" : "cm"
        },
        "status" : "B"
} */
db.inventory.find({$and: [ {qty: {$lt: 75}}, {qty: {$gt: 45}}]  }).pretty()
/*      (MUESTRA LOS DOCUMENTOS CON qty < 75 y > 45. and EXPLICITO)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b58"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5e"),
        "item" : "dictionary",
        "qty" : 60,
        "size" : {
                "h" : 22.85,
                "w" : 32,
                "uom" : "cm"
        },
        "status" : "B"
}*/
db.inventory.find({ qty: {$lt: 75, $gt: 45}}).pretty()
/*      (MUESTRA LOS DOCUMENTOS CON qty < 75 y > 45. and IMPLICITO)
{
    "_id" : ObjectId("5f9b283c6745fa43a7995b58"),
    "item" : "notebook",
    "qty" : 50,
    "size" : {
            "h" : 8.5,
            "w" : 11,
            "uom" : "in"
    },
    "status" : "A"
}
{
    "_id" : ObjectId("5f9b283c6745fa43a7995b5e"),
    "item" : "dictionary",
    "qty" : 60,
    "size" : {
            "h" : 22.85,
            "w" : 32,
            "uom" : "cm"
    },
    "status" : "B"
}  */
db.inventory.find({ qty: {$lte: 75, $gte: 45}}).pretty()
/* (MUESTRA LOS DOCUMENTOS CON qty < o = 75 y > o = 45. and IMPLICITO)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b58"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5a"),
        "item" : "planner",
        "qty" : 75,
        "size" : {
                "h" : 22.85,
                "w" : 30,
                "uom" : "cm"
        },
        "status" : "D"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5b"),
        "item" : "postcard",
        "qty" : 45,
        "size" : {
                "h" : 10,
                "w" : 15.25,
                "uom" : "cm"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5e"),
        "item" : "dictionary",
        "qty" : 60,
        "size" : {
                "h" : 22.85,
                "w" : 32,
                "uom" : "cm"
        },
        "status" : "B"
} */
db.inventory.find( { qty: { $ne: 30 } } ).pretty()
/*      (MUESTRA LOS DOCUMENTOS EN LOS QUE EL CAMPO qty NO ES IGUAL QUE 30)
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b57"),
        "item" : "journal",
        "qty" : 25,
        "size" : {
                "h" : 14,
                "w" : 21,
                "uom" : "cm"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b58"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b59"),
        "item" : "paper",
        "qty" : 100,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "status" : "D"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5a"),
        "item" : "planner",
        "qty" : 75,
        "size" : {
                "h" : 22.85,
                "w" : 30,
                "uom" : "cm"
        },
        "status" : "D"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5b"),
        "item" : "postcard",
        "qty" : 45,
        "size" : {
                "h" : 10,
                "w" : 15.25,
                "uom" : "cm"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("5f9b283c6745fa43a7995b5e"),
        "item" : "dictionary",
        "qty" : 60,
        "size" : {
                "h" : 22.85,
                "w" : 32,
                "uom" : "cm"
        },
        "status" : "B"
} */