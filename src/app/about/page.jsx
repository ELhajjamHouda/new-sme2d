

import React from "react";
import AboutOne from "../../components/AboutOne";
import TeamDetails from "../../components/TeamDetails";
import Breadcrumb from "../../components/Breadcrumb";
import MarqueeOne from "../../components/MarqueeOne";
import FaqAreaTwo from "../../components/FaqAreaTwo";
import TestimonialOne from "../../components/TestimonialOne";

export const metadata = {
  title: "About || Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website.",
};

const Page = () => {
  return (
    <>
      <Breadcrumb title="À propos de nous" imageHeader="/assets/img/hero/about.png" />
      <MarqueeOne />
      <FaqAreaTwo />
      <TeamDetails />
      <AboutOne />
      <TestimonialOne />
    </>
  );
};

export default Page;
