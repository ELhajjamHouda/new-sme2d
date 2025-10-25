import Breadcrumb from "../../components/Breadcrumb";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = {
  title: "Traitement de l’air || Solutions de Désodorisation & Filtration - SME2D",
  description:
    "Découvrez les solutions SME2D pour le traitement de l’air : désodorisation, filtration et lavage chimique des gaz. Réduisez les nuisances olfactives et respectez les normes environnementales grâce à nos systèmes performants.",
};


const Page = () => {
  return (
    <>

      {/* Breadcrumb */}
      <Breadcrumb
        title="Traitement de l'air"
        imageHeader="/assets/img/hero/traitement-de-l-air.png"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Traitement de l'air"
        Para1={
          <>
            <p>
              Le <strong>traitement de l’air</strong> est une étape essentielle lors de la
              réalisation d’une <strong>station d’épuration</strong>, d’un <strong>poste de relevage</strong> ou
              d’une <strong>station de pompage</strong> des eaux usées. L’objectif est de capturer et traiter
              l’air vicié afin de limiter les nuisances olfactives et préserver le confort des
              exploitants et des riverains.
            </p>

            <p>
              <strong>SME2D</strong> propose des solutions adaptées pour la <strong>désodorisation</strong>, qu’il
              s’agisse de <strong>tours à charbon actif</strong> ou d’<strong>unités de lavage chimique des gaz</strong>.
              Nos systèmes permettent de garantir un environnement sain et conforme aux normes
              environnementales en vigueur.
            </p>
          </>

        }
        Img1="assets/img/service/traitement-de-l-air-1.png"
        Img2="assets/img/service/traitement-de-l-air-2.png"
        Img3="assets/img/service/traitement-de-l-air-3.png"
      />

    </>
  );
};

export default Page;
