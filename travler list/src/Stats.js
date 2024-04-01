export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have everyting to go ✈️"
          : `you have ${numItems} items on your list and you already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
