import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Home() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center flex-1">
      <section className="max-w-xl">
        <h2 className="text-4xl text-white font-bold mb-4">
          Manage Your Events
        </h2>
        <p className="mb-8 text-lg text-white">
          Welcome to the Events Admin dashboard. Create, edit, and manage events
          for your website with ease.
        </p>
        <div className="flex flex-col items-start gap-4">
          <Button
            variant="default"
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
          <Badge className="ml-4" variant="default">
            Badge
          </Badge>
        </div>
      </section>
    </main>
  );
}

export default Home;
