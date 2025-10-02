import Footer from "@/components/Footer";
import Header from "@/components/Header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
