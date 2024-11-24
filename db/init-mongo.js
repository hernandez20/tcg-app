// init-mongo.js

// Conectar a la base de datos mongo_users
const db = db.getSiblingDB("mongo_users");

// Crear la colección 'auth' si no existe
if (!db.getCollectionNames().includes("auth")) {
    db.createCollection("auth");
}

// Datos de usuarios a insertar
const users = [
    {
        "username": "user1",
        "email": "user1@example.com",
        "password": "secure_password_1"  // Asegúrate de usar una contraseña segura
    },
    {
        "username": "user2",
        "email": "user2@example.com",
        "password": "secure_password_2"  // Asegúrate de usar una contraseña segura
    },
    {
        "username": "admin",
        "email": "admin@example.com",
        "password": "admin_password"  // Asegúrate de usar una contraseña segura
    }
];

// Insertar los datos en la colección 'auth'
try {
    db.auth.insertMany(users);
    print(`Datos insertados en la colección: auth`);
} catch (error) {
    print(`Error al insertar en la colección: auth`, error);
}

print(`
------------------- Completado ---------------------
Se creó la base de datos mongo_users y se insertaron los datos.
`);