export default function Auth() {
  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-3" />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-3" />
      <button className="bg-black text-white px-4 py-2 w-full">Sign In</button>
    </div>
  );
}