import type { NextApiRequest, NextApiResponse } from 'next';
import { UserObject } from '@/utils/interfaces/types';

const users: UserObject[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://example.com/avatar2.png',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    avatar: 'https://example.com/avatar3.png',
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (id) {
      const selectedUser = users.find(user => user.id === id);
      if (selectedUser) {
        res.status(200).json(selectedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } else {
      
      res.status(200).json(users);
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const updatedUserData = req.body;

    if (id) {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        // Actualiza los datos del usuario
        users[userIndex] = { ...users[userIndex], ...updatedUserData };
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } else {
      res.status(400).json({ error: 'User ID is required' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}