import { useState } from "react";
import Items from "./App";

export default function PakingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) {
  const [setBy, setSetBy] = useState("input");

  let sortedItems;

  if (setBy === "input") sortedItems = items;

  if (setBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (setBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - b.packed);

  return (
    <div className="list">
      <div>
        <li>
          {sortedItems.map((items) => (
            <Items
              item={items}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          ))}
        </li>
      </div>

      <div>
        <select value={setBy} onChange={(e) => setSetBy(e.target.value)}>
          <option value="input">select by input order</option>
          <option value="description">select by Description</option>
          <option value="packed">select by packed statis</option>
        </select>
        <button onClick={onClearItems}>clear list</button>
      </div>
    </div>
  );
}
