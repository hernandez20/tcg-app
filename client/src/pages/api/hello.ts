import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseData } from '@/utils/interfaces/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}