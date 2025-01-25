import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import OurServices from "../pages/our-services/OurServices";
import OurProjects from "../pages/our-projects/OurProjects";
import ContactUs from "../pages/contact-us/ContactUs";

function WebsiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default WebsiteRoutes;
