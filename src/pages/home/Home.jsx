import React from "react";
import Hero from "../../components/home/Hero";
import MainLayout from "../../layouts/website/MainLayout";
import OurServices from "../../components/home/OurServices";
import OurProjects from "../../components/home/OurProjects";
import ContactUs from "../../components/home/ContactUs";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <OurServices />
      <OurProjects />
      <ContactUs />
    </MainLayout>
  );
}

export default Home;
