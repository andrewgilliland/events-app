import { Link } from "react-router";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center flex-1">
      <section className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Manage Your Events</h2>
        <p className="mb-8 text-lg text-gray-700">
          Welcome to the Events Admin dashboard. Create, edit, and manage events
          for your website with ease.
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
        <Link to="/dashboard" className="ml-4 text-blue-500 underline">
          Go to Dashboard
        </Link>
      </section>
    </main>
  );
}

export default Home;
