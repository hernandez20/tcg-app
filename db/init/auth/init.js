


  const fs = require("fs");
db = db.getSiblingDB("mongo_users"); // Cambia esto por el nombre de tu base de datos
const collections = ["users"];

collections.forEach((collection) => {
  const filePath = `/docker-entrypoint-initdb.d/${collection}.json`;
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  // Insertar los datos en la colección
  try {
    db[collection].insertMany(data);
    console.log(`
      ------------------- fin collection ---------------------
      
      `);
  } catch (error) {
    console.error(
      `

      Error al insertar en la collection: ${collection}:
     
     error:
      `,
      error
    );
  }
});

/* crear colecciones vacias */
// CollectionsEmptyList.forEach((collection) => {
//   db.createCollection(collection);
// });

console.log(
  `
  ------------------- Completado ---------------------
  Se creo DB Fragata_Courses
  Se crearon colecciones ${collections.join(", ")}
  Se crearon colecciones vacias 
  `
);
