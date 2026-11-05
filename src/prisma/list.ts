import { db } from "./db.ts";

export { db };

export type StarterUser = {
  id: string;
  email: string | null;
  username: string | null;
  name: string | null;
  createdAt: string | null;
};

export async function listPlantsSNAs(): Promise<StarterUser[]> {
  try {
    const plants = await db.orm.public.Plant.all();
    return plants.map((plant: any) => ({
      id: String(plant.id),
      email: plant.family ?? null,
      username: plant.scientificName ?? null,
      name: plant.commonName ?? plant.scientificName ?? "Unnamed Plant",
      createdAt: plant.createdAt ?? null,
    }));
  } catch {
    return [];
  }
}
