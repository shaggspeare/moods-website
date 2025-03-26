import Layouts from "./layouts/Layouts.js";
import dynamic from "next/dynamic";
import Link from "next/link";

import CallToActionSection from "./components/sections/CallToAction.jsx";
import PartnersSection from "./components/sections/Partners.jsx";
import AboutSection from "./components/sections/About.jsx";
import Divider from "./components/sections/Divider.jsx";
import IconBoxesSection from "./components/sections/IconBoxes.jsx"
import AwardsSection from "./components/sections/Awards.jsx"

const HeroSlider = dynamic( () => import("./components/sliders/Hero.jsx"), { ssr: false } );
const EventsSlider = dynamic( () => import("./components/sliders/Events.jsx"), { ssr: false } );
const CoursesSlider = dynamic( () => import("./components/sliders/Courses.jsx"), { ssr: false } );
const ServicesSlider = dynamic( () => import("./components/sliders/Services.jsx"), { ssr: false } );

const Home2 = () => {
  return (
    <Layouts footer={1} headerTop extarClass={"has-additional-panel"}>
      <HeroSlider />
      <ServicesSlider />
      <CallToActionSection />
      <PartnersSection />
      <EventsSlider />
      <AboutSection />
      <Divider />
      <IconBoxesSection />
      <CoursesSlider />
      <AwardsSection />
    </Layouts>
  );
};
export default Home2;
