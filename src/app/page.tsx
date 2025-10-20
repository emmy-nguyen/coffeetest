import Image from "next/image";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
