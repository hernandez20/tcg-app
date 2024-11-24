import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/utils/mongodb';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('LLEGAMOS AQUÍ');
    if (req.method === 'POST') {
        await connectToDatabase();
        const db = mongoose.connection.useDb('mongo_users'); // Cambia a mongo_users

        const usersCollection = db.collection('users'); // Asegúrate de que esta es la colección correcta
        const { username, email, password } = req.body;

        try {
            // Verifica si el usuario ya existe
            const existingUser = await usersCollection.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }

            // Hash del password antes de guardar
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Crea un nuevo usuario en la colección
            const newUser = {
                username,
                email,
                password: hashedPassword,
            };

            // Inserta el nuevo usuario en la colección
            await usersCollection.insertOne(newUser);

            return res.status(201).json({ message: 'Usuario creado exitosamente' });
        } catch (error) {
            console.error('Error al registrar:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}