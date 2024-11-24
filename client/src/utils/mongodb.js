// utils/mongodb.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 1) {
        return; // Ya está conectado
    }
    try {
        await mongoose.connect('mongodb://root:example_password@172.18.0.2:27017', { // Asegúrate de tener tu URI en las variables de entorno
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000, // tiempo en ms
    socketTimeoutMS: 45000, // tiempo en ms
        });
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

export default connectToDatabase;