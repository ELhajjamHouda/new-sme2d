import Breadcrumb from "../../components/Breadcrumb";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = {
  title: "Solutions Électricité & Automatisme pour le Traitement des Eaux - SME2D",
  description:
    "SME2D conçoit et installe des armoires électriques, tableaux de commande et systèmes d’automatisation (API) pour le traitement des eaux. Câblage, programmation, supervision à distance (SCADA) et instrumentation pour un contrôle précis des débits, niveaux, pressions et qualité de l’eau. Performance, sécurité et fiabilité garanties."
};

const Page = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title="Electricite et Automatisme"
        imageHeader="/assets/img/hero/electricite-et-automatisme.svg"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Electricite et Automatisme"
       Para1={
        <>
          <p>
            Pour garantir la <strong>performance</strong>, la <strong>sécurité</strong> et la <strong>fiabilité</strong> des
            installations de <strong>traitement des eaux</strong>, <strong>SME2D</strong> intègre des solutions
            complètes en <strong>électricité</strong> et en <strong>automatisme</strong>. Nous réalisons la
            conception, la fabrication et l’installation des <strong>armoires électriques</strong>, des
            <strong>tableaux de commande</strong> et des <strong>systèmes d’automatisation (API)</strong>.
          </p>

          <p>
            Nos équipes assurent le <strong>câblage</strong>, la <strong>programmation des automates</strong>, ainsi
            que la mise en place de la <strong>supervision à distance (SCADA)</strong>. Nous proposons
            également l’<strong>instrumentation</strong> pour le contrôle en temps réel des paramètres
            clés&nbsp;: <strong>débits</strong>, <strong>niveaux</strong>, <strong>pressions</strong>,
            <strong>qualité des eaux</strong>, etc.
          </p>

          <p>
            Chaque projet bénéficie d’un <strong>accompagnement sur mesure</strong> pour une exploitation
            <strong>simple</strong>, <strong>sécurisée</strong> et <strong>optimisée</strong>.
          </p>
        </>

      }

        Img1="assets/img/service/electricite-et-automatisme_1.svg"
        Img2="assets/img/service/electricite-et-automatisme-2.png"
        Img3="assets/img/service/electricite-et-automatisme-3.png"
      />
    </>
  );
};

export default Page;
