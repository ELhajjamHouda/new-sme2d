import Breadcrumb from "../../components/Breadcrumb";
import ServiceAreaOne_multi_img from "../../components/ServiceAreaOne_multi_img";
import FaqAreaThree from "../../components/FaqAreaThree";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Service || sme2d - Car Repair & Auto Services NEXT Js Template",
  description:
    "sme2d is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Breadcrumb */}
      <Breadcrumb
       title="Service"
       imageHeader="/assets/img/hero/1920px900px.png"
      //  imageHeader="/assets/img/hero/about.png"
      />

      {/* Service Area One */}
      <ServiceAreaOne_multi_img />
      
      {/* FaqAreaThree */}
      < FaqAreaThree/>

    </>
  );
};

export default page;
