import ClientCarouselFeedback from "@/components/ClientCarouselFeedback";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HiroSection";
import Navbar from "@/components/Navbar";
import ParrotBanner from "@/components/ParrotBanner";
import MostPopularParrots from "@/components/sections/MostPopularParrots";
import SaleSection from "@/components/sections/SaleSection";
import { parrot13 } from "@/public/assets";
import { client_feed_back } from "@/public/data/feedbacks";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MostPopularParrots />
      <ParrotBanner imageUrl={parrot13} altText="parrots" />
      <SaleSection />
      <div className="w-full flex justify-center items-center p-2 bg-white">
        <div className="w-full md:w-3/4">
      <h2 className="text-2xl font-semibold mb-4 uppercase">What our clients say About us</h2>
          <ClientCarouselFeedback items={client_feed_back} />
        </div>
      </div>
      <Footer />
    </>
  );
}
