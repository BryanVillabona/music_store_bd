//1. Agregar propiedades available y origin

printjson(
    db.albums.updateMany(
        {},
        {
            $set :{
                available: true,
                origin: "Importado"
            }
        }
    ).toArray()
)

//2. SKU: M034 -->  STOCK:15

printjson(
    db.albums.updateOne(
        {sku: "MO34"},
        {$set:{stock: 15}}
    ).toArray()
)

//3. SKU: M018 -->  country:colombia

printjson(
    db.albums.updateOne(
        {sku: "MO18"},
        {$set:{country: "Colombia"}}
    ).toArray()
)

//4. SKU: M059 -->  Agg tag:oferta

printjson(
    db.albums.updateOne(
        {sku: "MO59"},
        {$push:{tags: "oferta"}}
    ).toArray()
)

//5. SKU: M012 -->  Agg 2 tags: nuevo y popular

printjson(
    db.albums.updateOne(
        {sku: "MO12"},
        {$push:{tags: {$each:["nuevo","popular"]}}}
    ).toArray()
)

//6. SKU: M025 -->  Agg 2 tags: descuento y outlet

printjson(
    db.albums.updateOne(
        {sku: "MO25"},
        {$push:{tags: {$each:["descuento","outlet"]}}}
    ).toArray()
)

//7. ALBUM THRILLER -->  PRICE 80000

printjson(
    db.albums.updateOne(
        {tittle: "Thriller"},
        {$set:{price: 80000}}
    ).toArray()
)

//8. Renombrar propiedad origin a import_type

printjson(
    db.albums.updateMany(
        {},
        {$rename:{"origin":"import_type"}}
    ).toArray()
)

//9. Renombrar propiedad origin a import_type

printjson(
    db.albums.updateMany(
        {"label.country":"Colombia"},
        {$rename:{"import_type":"Nacional"}}
    ).toArray()
)

//10. Mostrar albumes genero jazz

printjson(
    db.albums.find(
        {genre:"Jazz"}
    ).toArray()
)

//11. Mostrar albumes precio > 50000

printjson(
    db.albums.find(
        {price:{$gt:50000}}
    ).toArray()
)

//12. Mostrar albumes precio > 50000

printjson(
    db.albums.find(
        {price:{$gt:50000}}
    ).toArray()
)

//13. Mostrar albumes no sean del genero rock

printjson(
    db.albums.find(
        {genre:{$nin:"Rock"}}
    ).toArray()
)

//14. Mostrar sku, tittle, tags albumes calificacion > 4.5

printjson(
    db.albums.find(
        {rating:{$gt:4.5}},
        {_id:0, sku: 1, tittle: 1, tags:1}
    ).toArray()
)

//15. Mostrar sku, tittle, price albumes cstock < 5

printjson(
    db.albums.find(
        {stock:{$lt:5}},
        {_id:0, sku: 1, tittle: 1, price:1}
    ).toArray()
)

//16. Eliminar propiedad available a todo

printjson(
    db.albums.updateMany(
        {},
        {$unset:{available:""}}
    ).toArray()
)

//17. Eliminar tag descuento a  album M025

printjson(
    db.albums.updateOne(
        {sku:"M025"},
        {$pull:{tags:"descuento"}}
    ).toArray()
)

//18. Eliminar tag nuevo y popular a  album M012

printjson(
    db.albums.updateOne(
        {sku:"M012"},
        {$pull:{tags:{$in:["nuevo","popular"]}}}
    ).toArray()
)

//19. Eliminar album sku: M043

printjson(
    db.albums.deleteOne(
        {sku:"M043"}
    ).toArray()
)

//20. Eliminar todos los albumes stock == 0

printjson(
    db.albums.deleteMany(
        {stock:0}
    ).toArray()
)