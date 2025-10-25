import Breadcrumb from "../../components/Breadcrumb";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = {
  title: "Bureau d'Études Intégré || Maintenance, Support & Suivi Client - SME2D",
  description:
    "SME2D propose un service après-vente complet avec maintenance préventive et corrective, un stock permanent de pièces détachées, et des prestations d’exploitation pour stations de traitement, relevage et pompage. Garantissez la fiabilité et la performance de vos installations avec notre équipe dédiée."
};

const Page = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title="Bureau d'Études Intégré"
        imageHeader="/assets/img/hero/bureau-d-etudes-integre.png"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Bureau d'Études Intégré"
        Para1={
          <>
            <p>
              <strong>SME2D</strong> dispose d’un <strong>bureau d’études pluridisciplinaire</strong>, garantissant une approche complète et cohérente pour chaque projet.  
              Nos ingénieurs et techniciens assurent la conception des procédés (<em>process</em>), l’étude hydraulique des réseaux et des ouvrages, ainsi que l’ingénierie électrique et l’automatisme.  
            </p>

            <p>
              Nous accompagnons nos clients depuis l’analyse des besoins jusqu’à la réalisation des plans d’exécution, en intégrant les contraintes techniques, économiques et réglementaires.  
              Cette maîtrise globale nous permet de proposer des <strong>solutions sur mesure</strong>, fiables et optimisées.
            </p>
          </>
        }
        Img1="assets/img/service/bureau-d-etudes-integre-1.svg"
        Img2="assets/img/service/bureau-d-etudes-integre-2.png"
        Img3="assets/img/service/bureau-d-etudes-integre-3.png"
      />

    </>
  );
};

export default Page;
