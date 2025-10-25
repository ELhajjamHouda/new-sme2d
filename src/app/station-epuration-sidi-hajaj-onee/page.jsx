import Breadcrumb from "../../components/Breadcrumb";
import BlogAreaList from "../../components/BlogAreaList";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Station d’Épuration des Eaux Usées de Sidi Hajaj – ONEE",
  description:
    "Un projet réalisé pour l’ONEE visant à traiter efficacement les eaux usées de la région de Sidi Hajaj grâce à un procédé MBR moderne, garantissant la protection de l’environnement et une réutilisation durable de la ressource.",
};

    const page = () => {
      return (
        <>
          {/* Preloader */}
          <Preloader />

          {/* Breadcrumb */}
          <Breadcrumb
          title="station-epuration-sidi-hajaj-onee"
          imageHeader="/assets/img/hero/project-1.jpeg"
          />

          {/*BlogAreaList */}
            <BlogAreaList
            imageUrl="/assets/img/projet/projet-4.png"

      tables={[
        {
          title: "Caractéristiques d’eau brute",
          headers: ["Paramètre", "Valeur"],
          rows: [
            ["Débit journalier entrant : Q", "400 m³/j"],
            ["Charge entrante en DBO₅", "450  mg/L"], 
            ["Charge entrante en DCO", "1000 mg/l"],
            ["Charge entrante en MES", "500  mg/l"],
          ],
        },
        {
          title: "Caractéristiques d’eau à la sortie",
          headers: ["Paramètres physico-chimiques", "Concentration maximale*"],
          rows: [
            ["DBO₅", "30 mg/l"], 
            ["DCO", "60 mg/l"],
            ["MES", "10 mg/l"],
          ],
        },
      ]}
      sidebar={{
        caseStudies: [
          { label: "Client", value: "XXXX" },
          { label: "Type de Procédé", value: "MBR " },
          { label: "Localisation du Projet", value: "xxxx" },
           { label: "Déshydratation de boues", value: "vis presse" }, 
        ],
      }}
      categories={[
        { label: "Traitement-Eaux", href: "/#" },
        { label: "Pompage-Relevage", href: "/#" },
        { label: "Epuration", href: "/#" },
        { label: "Electricite-Automatisme",  href: "/#" },
        { label: "Energie-Renouvelable",  href: "/#" },
      ]}
    sectionTitle="QUELQUES PHOTOS DE LA STEP DE PRISON D’EL ARJAT"
    sliderData={[                                           
      { img: "/assets/img/projet/projet-4-1.svg", title: "Travaux GC: Radier de bassin d’aération"},
      { img: "/assets/img/projet/projet-4-2.svg", title: "Travaux GC: Ouvrage d’arrivée d’eau " },
      { img: "/assets/img/projet/projet-4-3.svg", title: "Travaux GC: Pose citerne préfabriqué en PRV 400M3"},
      { img: "/assets/img/projet/projet-4-4.svg", title: "Pose de la station de prétraitement compacte" },
      { img: "/assets/img/projet/projet-4-5.svg", title: "Pose de système d’ultrafiltration MBR" },
      { img: "/assets/img/projet/projet-4-1.svg", title: "PRÉPARATION ET DOSAGE CHIMIQUE " },
     ]}
    />
      
    </>
  );
};

export default page;
