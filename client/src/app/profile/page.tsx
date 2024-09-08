// pages/profile.tsx
'use client'
import { useState, useEffect } from 'react';
import  HomeLayout from "@/components/layout/HomeLayout"

interface UserData {
  name: string;
  email: string;
  avatar: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/user');
        const data = await response.json();
        console.log(data[0])
        setUserData(data[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
         <HomeLayout>
         <div className="h-screen bg-gray-100 flex  justify-start ">
      <h1>Perfil de Usuario</h1>
      {userData ? (
        <div>
          {/* <img src={userData.avatar} alt="Avatar" /> */}
          <p>Nombre: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <button>Editar Perfil</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

      </div>
      </HomeLayout>
    </div>
  );
}