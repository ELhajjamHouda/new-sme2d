import AboutTwo from "../components/AboutTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import FaqAreaTwo from "../components/FaqAreaTwo";
import HeroTwo from "../components/HeroTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import ProcessAreaOne from "../components/ProcessAreaOne";

export const metadata = {
  title: "Home || Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two// about-area-2 bg-smoke  */}
      <div className="about-area-2 bg-custom"> 
        <AboutTwo />
      </div>

      {/* Process Area One ****/}
      <ProcessAreaOne />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />
    </> 
  );
};

export default page;
