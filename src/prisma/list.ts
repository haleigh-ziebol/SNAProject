import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

export async function listPlantsSNAs() {
  await seed();
  const plants = await db.orm.public.Plant.select("id", "email", "username", "name", "createdAt").all();
  const snas = await db.orm.public.SNA.select("id", "name", "description", "createdAt").all();

  return users.map((user) => ({
    id: String(user.id),
    email: user.email,
    username: user.username ?? null,
    name: user.name ?? null,
    createdAt: user.createdAt,
  }));
}

export type StarterUser = Awaited<ReturnType<typeof listPlantsSNAs>>[number];
