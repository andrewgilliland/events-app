import { Outlet } from "react-router";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default App;
