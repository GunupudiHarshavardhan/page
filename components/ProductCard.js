export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">${product.price}</p>
    </div>
  );
}