"use server";

import { db } from "../prisma/db";

export type ItemType = "PLANT" | "AREA";

export type Item = {
  id: string;
  name: string;
  description: string | null;
  type: ItemType;
};

export async function searchItems(
  query: string = "",
  typeFilter?: ItemType | ""
): Promise<Item[]> {
  const q = query.trim().toLowerCase();
  const items: Item[] = [];

  // Plants
  if (!typeFilter || typeFilter === "PLANT") {
    const plants = await db.orm.public.Plant.all();
    for (const plant of plants) {
      const match =
        !q ||
        plant.commonName?.toLowerCase().includes(q) ||
        plant.scientificName?.toLowerCase().includes(q) ||
        plant.family?.toLowerCase().includes(q);

      if (match) {
        items.push({
          id: plant.id,
          name: plant.commonName || plant.scientificName || "Unnamed Plant",
          description: plant.scientificName ?? plant.family ?? null,
          type: "PLANT",
        });
      }
    }
  }

  // Areas (SNAs)
  if (!typeFilter || typeFilter === "AREA") {
    const snas = await db.orm.public.SNA.all();
    for (const sna of snas) {
      const match =
        !q ||
        sna.name?.toLowerCase().includes(q) ||
        sna.county?.toLowerCase().includes(q) ||
        sna.location?.toLowerCase().includes(q);

      if (match) {
        items.push({
          id: sna.id,
          name: sna.name,
          description: sna.county ? `${sna.county} County` : sna.location ?? null,
          type: "AREA",
        });
      }
    }
  }

  return items;
}