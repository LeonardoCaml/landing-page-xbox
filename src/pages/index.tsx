import Head from "next/head";
import Navbar from "@/components/Molecules/navbar";
import GameTopics from "@/components/Organism/GamesTopic";
import Footer from "@/components/Molecules/Footer";
import Introduction from "@/components/Organism/Introduction";
import Questions from "@/components/Organism/Questions";

export default function Home() {
  return (
    <div>
      <Head>
        <title>xbox</title>
      </Head>
      <Navbar />
      <Introduction />
      <GameTopics />
      <Questions />
      <Footer />
    </div>
  );
}
