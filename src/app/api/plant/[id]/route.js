import { db } from "../../../prisma/db";
import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
      return GET(id)
  }
}

export async function GET(id) {
  const snas = await getSNAs(id)
  return NextResponse.json(snas);

}

async function getSNAs(id) {
  try {
    const snasForPlant = await db.orm.public.Plant.where({ id: id }).include("snas").all();

    return {
      Response: snasForPlant,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return {
      message: 'Database Error: Failed to fetch SNAs for this plant.',
      error: message,
    };
  }
}
