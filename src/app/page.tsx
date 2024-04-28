import Jumbotron from "@/components/views/Jumbotron/Jumbotron";
import Nav from "@/components/views/Nav/Nav";
import Pipeline from "@/components/views/Pipeline/Pipeline";
import styles from "./page.module.css";
import Features from "@/components/views/Features/Features";
import Platforms from "@/components/views/Platforms/Platforms";
import Footer from "@/components/views/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav />
        <Jumbotron />
        <Pipeline />
        <Features />
        <Platforms />
        <Footer />
    </main>
  );
}
