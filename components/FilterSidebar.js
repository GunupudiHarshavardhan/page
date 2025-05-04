export default function FilterSidebar() {
  return (
    <div className="space-y-4">
      <h3 className="font-bold">Filters</h3>
      <div>
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>
      <div>
        <label>Ideal For</label>
        <select className="w-full border p-1 mt-1">
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
        </select>
      </div>
    </div>
  );
}