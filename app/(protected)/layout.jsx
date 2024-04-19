import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function ProtectedLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex mt-6">
        <div className="container max-w-7xl mx-[auto]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
