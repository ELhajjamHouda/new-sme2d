import Breadcrumb from "../../components/Breadcrumb";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = {
  title: "Relevage et Pompage des Eaux || Conception, Fabrication & Installation - SME2D",
  description:
    "SME2D conçoit, fabrique et installe des systèmes complets de relevage et de pompage des eaux, avec tuyauteries sur mesure jusqu’à 1400 mm de diamètre, intégration des pompes et montage électromécanique. Garantissez performance et fiabilité avec nos solutions clé en main."
};

const Page = () => {
  return (
    <>

      {/* Breadcrumb */}
      <Breadcrumb
        title="Relevage et pompage des eaux"
        imageHeader="/assets/img/hero/relevage-et-pompage-des-eaux.png"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Relevage et pompage des eaux"
       Para1={
        <>
          <p>
            <strong>SME2D</strong> conçoit, fabrique et installe des <strong>systèmes complets de relevage et de pompage des eaux</strong>, adaptés à tous types d’ouvrages hydrauliques. Notre expertise couvre l’ensemble du processus, de l’étude à la mise en service, pour garantir des solutions sur mesure et durables.
          </p>

          <p>
            Nous réalisons des <strong>réseaux de tuyauteries</strong> en acier galvanisé ou inox, avec des <strong>diamètres allant jusqu’à 1400 mm</strong>. Nos fabrications incluent des éléments spécifiques tels que <strong>collecteurs</strong>, <strong>coudes</strong>, <strong>Té</strong> et <strong>pièces spéciales</strong>, conçus selon les contraintes techniques de chaque projet.
          </p>

          <p>
            Nos équipes assurent également l’<strong>intégration des pompes</strong>, le <strong>montage électromécanique</strong> ainsi que les <strong>raccordements hydrauliques</strong>. Chaque installation est minutieusement <strong>testée</strong> et <strong>mise en service</strong> afin de garantir un fonctionnement optimal et une parfaite conformité aux exigences de nos clients.
          </p>
        </>
      }

        Img1="assets/img/service/relevage-et-pompage-des-eaux_1.png"
        Img2="assets/img/service/relevage-et-pompage-des-eaux-2.png"
        Img3="assets/img/service/relevage-et-pompage-des-eaux-3.png"
      />

    </>
  );
};

export default Page;
