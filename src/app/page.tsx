import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SelfCheck from "@/components/SelfCheck";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import WhyTranscend from "@/components/WhyTranscend";
import BookingCalendar from "@/components/BookingCalendar";
import InquiryForm from "@/components/InquiryForm";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelfCheck />
      <Services />
      <Journey />
      <WhyTranscend />
      <BookingCalendar />
      <Faq />
      <InquiryForm />
      <FinalCta />
    </>
  );
}
