import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>Events</h1>
      <section>
        <Button
          variant="default"
          onClick={() => {
            console.log("Create Event clicked");
          }}
        >
          Create Event
        </Button>
      </section>
    </>
  );
}

export default App;
