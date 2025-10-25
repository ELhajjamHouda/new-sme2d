import Breadcrumb from "../../components/Breadcrumb";
import BlogAreaList from "../../components/BlogAreaList";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Station d’Épuration – Complexe Résidentiel & Touristique | Seoul Construction | sme2d",
  description:
    "Découvrez le projet de station d’épuration réalisé par Seoul Construction au village El Aarjate. Le projet inclut le traitement de l’eau brute, la filtration et le rejet d’eau traitée conforme aux normes environnementales. Procédé MBBR, électricité et automatisme, énergie renouvelable et système d’aération avancé.",
};


    const page = () => {
      return (
        <>
          {/* Preloader */}
          <Preloader />

          {/* Breadcrumb */}
          <Breadcrumb
          title="station epuration prison el arjat-Onee"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
          {/*BlogAreaList */}
          <BlogAreaList
            imageUrl="/assets/img/projet/projet-1.svg"
            tables={[
              {
                title: "Caractéristiques d’eau brute",
                headers: ["Paramètre", "Valeur"],
                rows: [
                  ["Débit journalier entrant : Q", "400 m³/j"],
                  ["Charge entrante en DBO₅", "140 kg/j"],
                  ["Charge entrante en DCO", "280 kg/j"],
                  ["Charge entrante en MES", "180 mg/l"],
                ],
              },
              {
                title: "Caractéristiques d’eau à la sortie",
                headers: ["Paramètres physico-chimiques", "Concentration maximale*"],
                rows: [
                  ["DBO₅", "30 mg/l"],
                  ["DCO", "125 mg/l"],
                  ["MES", "60 mg/l"],
                ],
              },
            ]}
            sidebar={{
              caseStudies: [
                { label: "Client", value: "" },
                { label: "Type de Procédé", value: "MBBR" },
                { label: "Localisation du Projet", value: "Village El Aarjate" },
              ],
            }}
            categories={[
              { label: "Traitement-Eaux", href: "/#" },
              { label: "Pompage-Relevage", href: "/#" },
              { label: "Epuration", href: "/#" },
              { label: "Electricite-Automatisme",  href: "/#" },
              { label: "Energie-Renouvelable",  href: "/#" },
            ]}
          sectionTitle="Quelques Images des Projets STEP Industriels et Résidentiels"
          sliderData={[
            { img: "/assets/img/team/step-1-1.png", title: "Traitement de boues"},
            { img: "/assets/img/team/step-1-2.png", title: "Rejet d’eau traitée" },
            { img: "/assets/img/team/step-1-3.png", title: "Traitement tertiaire: filtration &UV"},
            { img: "/assets/img/team/step-1-4.png", title: "Système d’aération " },
            { img: "/assets/img/team/step-1-5.png", title: "Réacteurs biologique préfabriqués" },
            { img: "/assets/img/team/step-1-6.png", title: "Ouvrage de répartition de débit" },
            { img: "/assets/img/team/step-1-7.png", title: "Dégrillage automatique" },
            { img: "/assets/img/team/step-1-8.png", title: "Electricité et automatisme" },
          ]}
          />
    </>
  );
};

export default page;
