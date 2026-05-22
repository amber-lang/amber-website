import Jumbotron from "@/components/views/Jumbotron/Jumbotron";
import Nav from "@/components/views/Nav/Nav";
import styles from "./page.module.css";
import Features from "@/components/views/Features/Features";
import Footer from "@/components/views/Footer/Footer";
import CompetitionAward from "@/components/views/CompetitionAward/CompetitionAward";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import BackgroundCanvas from "@/components/atoms/BackgroundCanvas/BackgroundCanvas";
import Marquee from "@/components/views/Marquee/Marquee";
import Compare from "@/components/views/Compare/Compare";
import HowItWorks from "@/components/views/HowItWorks/HowItWorks";
import { getGitHubStars, getLatestRelease } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const [stars, release] = await Promise.all([getGitHubStars(), getLatestRelease()]);
  return (
    <main className={styles.main}>
        <BackgroundCanvas />
        <Nav release={release} />
        <Jumbotron stars={stars} release={release} />
        <Marquee />
        <ScrollReveal>
            <Features />
        </ScrollReveal>
        <ScrollReveal>
            <Compare />
        </ScrollReveal>
        <ScrollReveal>
            <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
            <CompetitionAward />
        </ScrollReveal>
        <ScrollReveal>
            <Footer />
        </ScrollReveal>
    </main>
  );
}
