import postgres from "@prisma/orm-postgres/runtime";

import "temporal-polyfill/global";

import service from "../../service.ts";
import type { Contract } from "./generated/contract.d.ts";
import contractJson from "./generated/contract.json" with { type: "json" };

function loadComposerDatabase(): ReturnType<typeof postgres<Contract>> | undefined {
  try {
    return service.load().database.client as unknown as ReturnType<typeof postgres<Contract>>;
  } catch {
    return undefined;
  }
}

export const db: ReturnType<typeof postgres<Contract>> =
  loadComposerDatabase() ??
  (process.env.DATABASE_URL
    ? postgres<Contract>({ contractJson, url: process.env.DATABASE_URL })
    : postgres<Contract>({ contractJson }));

let connection: Promise<void> | undefined;

export function connectDatabase(): Promise<void> {
  return (connection ??= db.connect().then(() => undefined).catch((error: unknown) => {
    connection = undefined;
    throw error;
  }));
}
