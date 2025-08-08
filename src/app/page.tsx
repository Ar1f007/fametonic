import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <div className="min-h-svh bg-[#010101] text-white font-body">
      <Banner />
      <Navbar />
      <Hero />
    </div>
  );
}
