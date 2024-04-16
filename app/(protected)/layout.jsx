import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function ProtectedLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
