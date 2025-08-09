import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";

export default function Home() {

  return (
    <div className="min-h-svh font-body">
      <Banner />
        <Navbar />
        <Hero />  
    </div>
  );
}
