import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '@/utils/mongodb'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcrypt'; // Importa bcrypt para comparar contraseñas
import mongoose from 'mongoose';

// Extiende los tipos de NextAuth
declare module "next-auth" {
    interface Session {
        user: {
            id: string; // Agrega tus propiedades personalizadas aquí
            name?: string;
            email?: string;
        };
    }

    interface User {
        id: string; // Asegúrate de que esto coincida con tu modelo de usuario
        name?: string;
        email?: string;
    }
}

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                await connectToDatabase(); // Conectar a la base de datos
                const db = mongoose.connection.useDb('mongo_users'); // Cambia a mongo_users

                try {
                    const usersCollection = db.collection('users');
                    console.log('Buscando el usuario...');

                    // Encuentra el usuario en la base de datos
                    const user = await usersCollection.findOne({ username: credentials?.username });
                    console.log('Usuario encontrado:', user);

                    // Verifica si el usuario existe y compara las contraseñas usando bcrypt
                    if (user && credentials?.password) {
                        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                        if (isPasswordValid) {
                            return { id: user._id.toString(), name: user.username, email: user.email }; // Devuelve los datos del usuario
                        }
                    }
                    return null; // Devuelve null si las credenciales son incorrectas
                } catch (error) {
                    console.error('Error al autorizar al usuario:', error);
                    return null; // Retorna null en caso de error
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Usa el id devuelto desde la función authorize
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string; 
            }
            return session; 
        },
    }
});