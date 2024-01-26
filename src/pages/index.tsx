import Image from "next/image";
import Navbar from "../../components/Navbar.main";
import PageLayout from "../../components/Layout/pageLayout";
import Hero from "../../components/Hero.main";

export default function Home() {
  return (
    <PageLayout>
      <Hero/>
    </PageLayout>
  );
}
