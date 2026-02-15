import Section1 from "@/app/components/Section1/page";
import Section2 from "@/app/components/Section2/page";
import Section3 from "@/app/components/Section3/page";
import Introduction from "@/app/components/Introduction/page";
import FAQSection from "@/app/components/FAQSection/page";
import Proffesional from "@/app/components/Proffesional/page";
import Homepage from "@/app/pages/Homepage/page"
import GetStartedSection from "@/app/components/GetStartedSection/page"

export default function Home() {
  return (
    <div>
        <Homepage/>
        <Introduction/>
        <Section1/>
        <Section2/>
        <Section3/>
        <FAQSection/>
        <Proffesional/>
        <GetStartedSection/>
    </div>
  );
}
