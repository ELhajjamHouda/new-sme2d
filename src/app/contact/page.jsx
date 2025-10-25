import Breadcrumb from "../../components/Breadcrumb";
import ContactArea from "../../components/ContactArea";

export const metadata = {
  title: "Contact || SME2D - Réparation Auto & Services Automobile",
  description:
    "Contactez SME2D pour toute demande d'information, devis ou assistance. Notre équipe dédiée est prête à répondre à vos questions et à vous offrir un service auto rapide et fiable.",
};


const page = () => {
  return (
    <>


       {/* Breadcrumb */}
        <Breadcrumb
        title="Contact"
        imageHeader="/assets/img/hero/contact.png"
         />

        {/* Contact Area */}
        <ContactArea />
        </>
  );
};

export default page;
