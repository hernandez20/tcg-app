'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            alert('Registro exitoso!');
            router.push('/auth/signin'); // Redirigir a la página de inicio de sesión
        } else {
            const errorData = await response.json();
            setError(errorData.message);
        }
    };

    return (
      
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl mb-4">Registro</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Registrar</button>
                </form>
            </div>
   
    );
}