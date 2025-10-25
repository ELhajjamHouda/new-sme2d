import Breadcrumb from "../../components/Breadcrumb";
import BlogAreaList from "../../components/BlogAreaList";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Station de Prétraitement des Rejets Industriels – Usine SILDA | Seoul Construction | sme2d",
  description:
    "Découvrez le projet de station de prétraitement des rejets industriels de l’usine SILDA, intégrant des solutions durables pour la gestion et le traitement des effluents.",
};

    const page = () => {
      return (
        <>
          {/* Preloader */}
          <Preloader />

          {/* Breadcrumb */}
          <Breadcrumb
          title="Station Pretraitement Rejets Industriels Usine Silda"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
          {/*BlogAreaList */}
    <BlogAreaList
      imageUrl="/assets/img/projet/projet-3.png"

      tables={[
        {
          title: "Caractéristiques d’eau brute",
          headers: ["Paramètre", "Valeur"],
          rows: [
            ["Débit journalier entrant : Q", "400 m3/j"],
            ["Charge entrante en DBO₅", "3988 mg/L"],
            ["Charge entrante en DCO", "7940 mg/l"],
            ["Charge entrante en MES", "3000 mg/l"],
            ["Huiles et graisses", "674 mg/l"],
          ],
        },
        {
          title: "Caractéristiques d’eau à la sortie",
          headers: ["Paramètres physico-chimiques", "Concentration maximale*"],
          rows: [
            ["DBO₅", "578 mg/l"],
            ["DCO", "840 mg/l"],
            ["MES", "320   mg/l"],
            ["Huiles et graisses","41 mg/l"]
          ], 
        },
      ]}
      sidebar={{
        caseStudies: [
          { label: "Client", value: "" },
          { label: "Type de Procédé", value: "Physico-chimique " },
          { label: "Localisation du Projet", value: "" },
        ],
      }}
      categories={[
        { label: "Traitement-Eaux", href: "/#" },
        { label: "Pompage-Relevage", href: "/#" },
        { label: "Epuration", href: "/#" },
        { label: "Electricite-Automatisme",  href: "/#" },
        { label: "Energie-Renouvelable",  href: "/#" },
      ]}
              sectionTitle="Quelques photos de la station de prétraitement des rejets industriels de l’usine Silda"
              sliderData={[
                { img: "/assets/img/team/step-2-1.svg", title: "STATION COMPLÈTEMENT AUTOMATISÉE"},
                { img: "/assets/img/team/step-2-2.svg", title: "PRÉTRAITEMENT: TAMIS ROTATIF" },
                { img: "/assets/img/team/step-2-3.svg", title: "TRAITEMENT DE BOUES PAR FILTRE PRESSE"},
                { img: "/assets/img/team/step-2-4.svg", title: "TRAITEMENT PHYSICO-CHIMIQUE  PAR DAF " },
                { img: "/assets/img/team/step-2-5.svg", title: "PRÉPARATION ET DOSAGE CHIMIQUE " },
                { img: "/assets/img/team/step-2-1.svg", title: "STATION COMPLÈTEMENT AUTOMATISÉE" },
                { img: "/assets/img/team/step-2-2.svg", title: "PRÉTRAITEMENT: TAMIS ROTATIF" },
                { img: "/assets/img/team/step-2-3.svg", title: "TRAITEMENT DE BOUES PAR FILTRE PRESSE" },
              ]}
    />
    </>
  );
};

export default page;
