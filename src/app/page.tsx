import GrobNavbar from "@/components/Navbar/GrobNavbar";
import GrobPage from "@/components/Pages/GrobPage";
import GrobModal from "@/components/Pages/components/ui/Grob_Modal";
import GrobPicture from "@/components/Pages/components/ui/Grob_Picture_Modal";

export default function Home() {
  return (
    <main className="flex flex-col">
      <GrobNavbar />

      <section className="text-white">
        <GrobModal />
        <GrobPicture />
        <GrobPage />
      </section>
    </main>
  );
}
