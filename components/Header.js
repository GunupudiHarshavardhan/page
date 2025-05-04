export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">LOGO</h1>
        <nav className="space-x-4">
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="flex items-center space-x-2">
          <span>👤</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
}