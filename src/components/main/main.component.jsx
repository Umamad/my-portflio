import AboutSection from "../sections/about.component";
//import FactsSection from "../sections/facts.component";
import SkillsSection from "../sections/skills.component";
import ResumeSection from "../sections/resume.component";
//import PortfolioSection from "../sections/portfolio.component";
import ServicesSection from "../sections/services.component";
//import TestimonialsSection from "../sections/testimonials.component";
import ContactSection from "../sections/contact.component";

const Main = ({ lang }) => (
    <main id="main">
        <AboutSection lang={lang} />
        {/* <FactsSection /> */}
        <SkillsSection lang={lang} />
        <ResumeSection lang={lang} />
        {/* <PortfolioSection /> */}
        <ServicesSection lang={lang} />
        {/* <TestimonialsSection />*/}
        <ContactSection lang={lang} /> 
    </main>
);

export default Main;