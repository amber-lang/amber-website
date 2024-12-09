import Jumbotron from "@/components/views/Jumbotron/Jumbotron";
import Nav from "@/components/views/Nav/Nav";
import styles from "./page.module.css";
import Features from "@/components/views/Features/Features";
import Footer from "@/components/views/Footer/Footer";
import EditorSimulation from "@/components/views/EditorSimulation/EditorSimulation";
import CompetitionAward from "@/components/views/CompetitionAward/CompetitionAward";

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav />
        <Jumbotron />
        <EditorSimulation />
        <Features />
        <CompetitionAward />
        <Footer />
    </main>
  );
}
