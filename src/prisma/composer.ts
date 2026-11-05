import { pnContract, type PnPostgresContract } from "@prisma/composer-prisma-cloud/prisma-next";

import contractJson from "./generated/contract.json" with { type: "json" };

export const appContract: PnPostgresContract<any> = (pnContract as any)(contractJson);

