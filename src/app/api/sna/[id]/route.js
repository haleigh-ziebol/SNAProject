import { db } from "../../../prisma/db";
import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
      return GET(id)
  }
}

export async function GET(id) {
  const plants = await getPlants(id)
  return NextResponse.json(plants);

}

async function getPlants(id) {
  try {
    const snasForPlant = await db.orm.public.SNA.where({ id: id }).include("plants").all();

    return {
      Response: snasForPlant,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return {
      message: 'Database Error: Failed to fetch plants for this SNA.',
      error: message,
    };
  }
}
