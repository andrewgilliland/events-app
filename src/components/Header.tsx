import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-primary text-white py-6 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">Event App</Link>
        </h1>
        <nav className="flex gap-4">
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
