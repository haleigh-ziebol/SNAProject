"use client";

import { useEffect, useState } from "react";
import { searchItems, type Item, type ItemType } from "./actions";


export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<ItemType | "">("");
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    let ignore = false;

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await searchItems(query, type);
        if (!ignore) {
          setResults(data);
        }
      } catch (error) {
        if (!ignore) {
          console.error(error);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }, 250);

    return () => {
      ignore = true;
      clearTimeout(timeout);
    };
  }, [query, type]);

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search plants or areas..."
          className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as ItemType | "")
          }
          className="rounded-lg border px-3"
        >
          <option value="PLANT">Plants</option>
          <option value="AREA">Areas</option>
        </select>
      </div>

      {loading && (
        <p className="text-sm text-gray-500">
          Searching...
        </p>
      )}

      <div className="divide-y rounded-lg border">
        {results.map((item) => (
          <button
            key={item.id}
            type="button"
            className="w-full p-4 text-left hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">
                {item.name}
              </h3>

              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                {item.type === "PLANT" ? "Plant" : "Area"}
              </span>
            </div>

            {item.description && (
              <p className="mt-1 text-sm text-gray-500">
                {item.description}
              </p>
            )}
          </button>
        ))}

        {!loading && results.length === 0 && (
          <p className="p-4 text-sm text-gray-500">
            No plants or areas found.
          </p>
        )}
      </div>
    </div>
  );
}