import "./App.css";
import Header from "./Header/Header";
import SectionHero from "./SectionHero/SectionHero";
import SectionAboutMe from "./SectionAboutMe/SectionAboutMe";
import SectionBenefits from "./SectionBenefits/SectionBenefits";
import SectionFAQ from "./SectionFAQ/SectionFAQ";
import SectionMyProject from "./SectionMyProject/SectionMyProject";
import SectionReviews from "./SectionReviews/SectionReviews";
import SectionWorkTogether from "./SectionWorkTogether/SectionWorkTogether";
import SectionTechSkill from "./TechSkill/SectionTechSkill";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <SectionHero />
        <SectionAboutMe />
        <SectionTechSkill />
        <SectionMyProject />
        <SectionBenefits />
        <SectionFAQ />
        <SectionReviews />
        <SectionWorkTogether />
      </main>
      <Footer />
    </div>
  );
}

export default App;
