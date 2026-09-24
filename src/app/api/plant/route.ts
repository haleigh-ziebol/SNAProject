import { db } from "../../../prisma/db";
import { NextResponse } from 'next/server';


export default function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method === 'GET') {
      return GET()
  } else {
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export async function GET() {
  const plants = await getPlants()
  return NextResponse.json(plants);

}

async function getPlants() {
  try {
    const plants = await db.orm.public.Plant.all();
    return {
      Response: plants,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return {
      message: 'Database Error: Failed to fetch Plants.',
      error: message,
    };
  }
}
