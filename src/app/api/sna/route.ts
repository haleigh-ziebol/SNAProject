import { db } from "../../../prisma/db";
import { NextResponse } from 'next/server';


export default function handler(req, res) {
  if (req.method === 'GET') {
      return GET()
  } else {
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export async function GET() {
  const snas = await getSNAs()
  return NextResponse.json(snas);

}

// list of all SNAS
const snas = await db.orm.public.SNA.all();

// list of plants at a given SNA
const plantsatSNA = await db.orm.public.SNA.where({ id: '01941f29-7c00-73e4-a310-744d2167fc5b' }).include("snaPlants").all();

// list of SNAs for a given plant
const snasForPlant = await db.orm.public.Plant.where({ id: '01941f29-7c00-73e4-a310-744d2167fc5b' }).include("snas").all();

async function getSNAs() {
  try {
    const snas = await db.orm.public.SNA.all();
    return {
      Response: snas,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return {
      message: 'Database Error: Failed to fetch SNAs.',
      error: message,
    };
  }
}
