import { Link } from "react-router";
import { Button } from "../components/ui/button";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-white py-6 shadow">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <nav className="flex gap-4">
            <Link to="/">Home</Link>

            <Link to="/">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col items-center flex-1">
        <section className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
          <p className="mb-8 text-lg text-gray-700">
            Welcome to the Events Admin dashboard. Create, edit, and manage
            events for your website with ease.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              console.log("Create Event clicked");
            }}
          >
            Create Event
          </Button>
        </section>
      </main>

      <footer className="bg-primary  py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-white">
          &copy; {new Date().getFullYear()} Events Admin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
