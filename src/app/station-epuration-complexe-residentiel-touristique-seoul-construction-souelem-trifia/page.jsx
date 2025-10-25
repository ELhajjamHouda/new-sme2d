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
          title="Station d’Épuration – Complexe Résidentiel & Touristique | Seoul Construction"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />
          
        
          {/*BlogAreaList */}
            <BlogAreaList
              imageUrl="/assets/img/projet/projet-2.png"
                tables={[
                  {
                    title: "Caractéristiques d’eau brute",
                    headers: ["Paramètre", "Valeur"],
                    rows: [
                      ["Débit journalier entrant : Q", "80  m3/j"],
                      ["Charge entrante en DBO₅", "kg/J"],
                      ["Charge entrante en DCO", "kg/J"],
                      ["Charge entrante en MES", "mg/l"],
                    ],
                  },
                  {
                    title: "Caractéristiques d’eau à la sortie",
                    headers: ["Paramètres physico-chimiques", "Concentration maximale*"],
                    rows: [
                      ["DBO₅", "30 mg/l"],
                      ["DCO", "125 mg/l"],
                      ["MES", "60  mg/l"],
                    ],
                  }, 
                ]}
                sidebar={{
                  caseStudies: [
                    { label: "Client", value: "" },
                    { label: "Type de Procédé", value: "SBR" },
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

              />
    </>
  );
};

export default page;
