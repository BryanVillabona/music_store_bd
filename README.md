# Tienda de Música - MongoDB

## 📄 Descripción
Este proyecto corresponde a un examen de MongoDB en el que se modela y gestiona la información de una **tienda de música**.  
Incluye la colección **albums**, scripts para insertar los datos, así como consultas y actualizaciones sobre los mismos.  
El propósito es demostrar habilidades en la creación, manipulación y consulta de documentos en MongoDB.

---

## 📂 Colección: albums
La colección **albums** almacena información sobre álbumes musicales. Sus campos y tipos de datos son:

| Campo          | Tipo de Dato | Descripción |
|----------------|-------------|-------------|
| sku            | String      | Código único del álbum |
| tittle         | String      | Título del álbum |
| artist         | String      | Nombre del artista o grupo |
| genre          | String      | Género musical |
| release_year   | Number      | Año de lanzamiento |
| format         | String      | Formato del álbum (Vinilo, CD, etc.) |
| price          | Number      | Precio en pesos colombianos |
| stock          | Number      | Cantidad disponible en inventario |
| rating         | Number      | Calificación promedio del álbum |
| tags           | Array       | Lista de etiquetas o características |
| label.country  | String      | País de la discográfica |
| label.name     | String      | Nombre de la discográfica |

---

## 🚀 Instalación y carga en MongoDB

### 1️⃣ Abrir en **MongoDB Compass**
1. Abrir **MongoDB Compass**.
2. Conectarse a la base de datos (por ejemplo: `mongodb://localhost:27017`).
3. Crear la base de datos llamada `tienda_musica`.
4. Crear la colección llamada `albums`.
5. Usar la opción **"Import Data"** y seleccionar el archivo `albums.json`.

### 2️⃣ Abrir en **Mongo Shell**
1. Guardar el archivo `albums.json` en una carpeta local.
2. Abrir la terminal y navegar a la carpeta donde está el archivo.
3. Ejecutar:
   ```bash
   mongoimport --db tienda_musica --collection albums --file albums.json --jsonArray
   ```

---

## 📝 Inserción de datos
El archivo [`insercion.js`](insercion.js) contiene el script para insertar múltiples álbumes en la colección:
```javascript
db.albums.insertMany([...])
```

Para ejecutarlo en Mongo Shell:
```bash
mongo tienda_musica insercion.js
```

---

## 🔍 Consultas y actualizaciones
El archivo [`consultas.js`](consultas.js) contiene ejemplos de operaciones en MongoDB:
- **updateMany** y **updateOne** para modificar datos.
- **find** con filtros y proyecciones.
- **deleteOne** y **deleteMany** para eliminar registros.

Para ejecutarlo:
```bash
mongo tienda_musica consultas.js
```

---

## 📌 Consideraciones
- Algunos campos como `tags` y `label` están estructurados como **arrays** y **documentos embebidos**, respectivamente.
- Las consultas incluyen operadores como `$set`, `$push`, `$rename`, `$gt`, `$lt`, `$nin`, `$each`, `$pull`.

---

## ✍ Autor
**Nombre:** Bryan Villabona
