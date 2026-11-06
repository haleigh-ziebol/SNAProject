import SearchBar from "./searchbar.tsx";
import type { StarterUser } from "../prisma/list.ts";
export const dynamic = "force-dynamic";

export default async function Home() {

  const { listPlantsSNAs } = await import("../prisma/list.ts");
  const snas = await listPlantsSNAs().catch(() => undefined);

  return (
    <main className="shell">
      <div className="hero">
        <p className="eyebrow">SNA Plant Search</p>

        <h1>Search for plants at SNAs (Scientific and Natural Area) in Minnesota</h1>
        <p className="lede">
          Find a plant list for a given SNA or a list of SNAs to visit to see a given plant. The data is sourced from the Minnesota DNR's SNA database and is updated periodically.
        </p>
      </div>

      <section className="panel">
        <div className="panelHeader">
          <h2>Search</h2>
        </div>
        <div>
          <SearchBar />
        </div>

      </section>
      <section >
        <div className="panelHeader">
          <h2>SNA List</h2>
        </div>
        {!snas ? (
          <p className="empty">
            Could not query SNAs yet. Run <code>contract:emit</code> and apply your schema,
            then refresh.
          </p>
        ) : snas.length === 0 ? (
          <p className="empty">No users found.</p>
        ) : (
          <ul className="users">
            {snas.map((user: StarterUser) => ( //update types here to match SNA
              <li key={user.id}>
                <div>
                  <strong>{user.name ?? "Unnamed user"}</strong>
                  <p>{user.username ? `@${user.username}` : user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

      </section>

    </main>
  );
}
