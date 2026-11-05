import { db } from "../../../../prisma/db";
import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
      return GET(id)
  }
}

export async function GET(request, context) {
  let id;
  if (typeof request === 'string') {
    id = request;
  } else if (context?.params) {
    const params = await context.params;
    id = params?.id;
  }
  const snas = await getSNAs(id);
  return NextResponse.json(snas);
}

async function getSNAs(id) {
  try {
    const snasForPlant = await db.orm.public.Plant.where({ id: id }).include("snas").all();

    return {
      Response: snasForPlant,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return {
      message: 'Database Error: Failed to fetch SNAs for this plant.',
      error: message,
    };
  }
}
