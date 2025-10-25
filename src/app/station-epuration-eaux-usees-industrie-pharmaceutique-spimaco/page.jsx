

import Breadcrumb from "../../components/Breadcrumb";
import BlogAreaList from "../../components/BlogAreaList";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title:
    "Station d’Épuration des Eaux Usées – Industrie Pharmaceutique SPIMACO | Seoul Construction | sme2d",
  description:
    "Découvrez le projet de station d’épuration des eaux usées de l’industrie pharmaceutique SPIMACO, une réalisation durable pour le traitement des effluents industriels.",
};

const Page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Breadcrumb */}
      <Breadcrumb
        title="Projet de Station d’Épuration des Eaux Usées de l’Industrie Pharmaceutique SPIMACO"
        imageHeader="/assets/img/hero/project.jpeg"
      />

      {/* BlogAreaList */}
      <BlogAreaList
        imageUrl="/assets/img/projet/projet-.svg"
        overlayTexts={[
          "ENTRÉE D’EAU",
          "ASPECT D’EAU À LA SORTIE DE LA STEP",
        ]}
        tables={[
          {
            title: "Caractéristiques d’eau brute",
            headers: ["Paramètre", "Valeur"],
            rows: [
              ["Débit journalier entrant : Q", "140 m³/j"],
              ["Charge entrante en DBO₅", "450 mg/L"],
              ["Charge entrante en DCO", "750 mg/l"],
              ["Charge entrante en MES", "650 mg/l"],
            ],
          },
          {
            title: "Caractéristiques d’eau à la sortie",
            headers: [
              "Paramètres physico-chimiques",
              "Concentration maximale*",
            ],
            rows: [
              ["DBO₅", "30 mg/l"],
              ["DCO", "150 mg/l"],
              ["MES", "100 mg/l"],
            ],
          },
        ]}
        sidebar={{
          caseStudies: [
            { label: "Client", value: "XXXX" },
            { label: "Type de Procédé", value: "MBR" },
            { label: "Localisation du Projet", value: "xxxx" },
          ],
        }}
        categories={[
          { label: "Traitement-Eaux", href: "/#" },
          { label: "Pompage-Relevage", href: "/#" },
          { label: "Epuration", href: "/#" },
          { label: "Electricite-Automatisme", href: "/#" },
          { label: "Energie-Renouvelable", href: "/#" },
        ]}
      />
    </>
  );
};

export default Page;
