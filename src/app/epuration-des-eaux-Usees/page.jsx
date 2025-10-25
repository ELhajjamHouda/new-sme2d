import Breadcrumb from "../../components/Breadcrumb";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = {
  title: "Épuration des eaux usées & Réutilisation - Solutions SME2D",
  description:
    "SME2D propose des solutions globales pour l’épuration et la réutilisation des eaux usées. Conception et installation sur mesure pour les secteurs domestique, industriel, agroalimentaire, pharmaceutique, textile et abattoirs. Traitement efficace des effluents, valorisation des eaux traitées, préservation des ressources et optimisation des coûts d’exploitation."
};
 

const Page = () => {
  return (
    <>
    {/* Breadcrumb */}
      <Breadcrumb
        title="Épuration Des Eaux-Usées"
        imageHeader="/assets/img/hero/epuration-des-eaux-Usees.svg"
      />

      {/* Service Details */}
      <ServiceDetails
        Title1="Épuration Des Eaux-Usées"
        Para1={
          <>
            <p>
              <strong>SME2D</strong> propose des solutions globales pour l’<strong>épuration</strong> et la <strong>réutilisation</strong> des <strong>eaux usées</strong>. Nos systèmes s’adaptent aux besoins des secteurs <strong>domestique</strong>, <strong>industriel</strong>, <strong>agroalimentaire</strong>, <strong>pharmaceutique</strong>, <strong>textile</strong> ou encore des <strong>abattoirs</strong>.
            </p>

            <p>
              Nous concevons des <strong>installations sur mesure</strong>, permettant de traiter efficacement les <strong>effluents</strong> tout en favorisant la <strong>valorisation des eaux traitées</strong>. Ces solutions contribuent à la <strong>préservation des ressources</strong> et à l’<strong>optimisation des coûts d’exploitation</strong>.
            </p>

            <p>
              Chaque projet est étudié selon les spécificités des <strong>effluents</strong> et les objectifs de <strong>réutilisation</strong>.
            </p>
          </>


      }

        Img1="assets/img/service/epuration-des-eaux-Usees-1.svg"
        Img2="assets/img/service/epuration-des-eaux-Usees-2.svg"
        Img3="assets/img/service/epuration-des-eaux-Usees-3.svg"
      />
    </>
  );
};

export default Page;
