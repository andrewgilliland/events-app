import { Button } from "../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center flex-1">
      <section className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
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
      </section>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}

export default Dashboard;
