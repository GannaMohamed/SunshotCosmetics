import Hero from "@/app/Hero";
import Collection from "@/app/Collection";
import Contact from "@/app/Contact";
import Story from "@/app/Story";
import Footer from "@/app/Footer";
import Title from "@/app/components/Title";
export default function Home() {
  return (
    <div
      className="
    lined scroll-smooth font-outfit 
    grid 
    md:grid-rows-[80px_1fr] grid-cols-12 
    gap-x-2 gap-y-5 md:gap-y-10 
    lg:max-w-7xl lg:mx-auto
    mx-2 md:mx-10 
"
    >
      <Hero></Hero>

      <Title repeated>Our collection</Title>
      <Collection></Collection>
      <Title repeated>Brand Story</Title>
      <Story></Story>
      <Title repeated>Let&#39;s connect</Title>
      <Contact />
      <Footer></Footer>
    </div>
  );
}
