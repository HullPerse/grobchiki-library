import GrobNavBar from "@/components/NavBar/Grob_Navbar";
import GrobPage from "@/components/GrobPage";
import GrobModal from "@/components/Grob_Modal";
import GrobPicture from "@/components/Grob_Picture_Modal";

function App() {
  return (
    <main>
      <GrobNavBar />

      <section>
        <GrobModal />
        <GrobPicture />
        <GrobPage />
      </section>
    </main>
  );
}

export default App;
