
const FaqAreaThree = () => {
  return (
    <div className="faq-area-1 space">
      <div className="container">
        <div
          className="faq-wrap space"
            style={{
              backgroundImage: "url('/assets/img/blog/blog-1.jpg')",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backgroundSize: "cover",
            }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-11">
              <div className="title-area text-center">
              <h2
                className="sec-title"
                style={{ color: "white" }}
              >
               Notre Savoir-Faire
              </h2>
              </div>
            </div>
            <div className="col-xl-8 col-md-10 col-11">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style3 active">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      {" "}
                     1. Traitement Physico-Chimique
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                  <div className="accordion-body">
                    <div className="faq-text text-black">
                      <p className="mb-3">
                        Nous intervenons dans la séparation des solides, des huiles et des polluants complexes
                        grâce à des procédés fiables et performants :
                      </p>
                        <ul>✔ Coagulation – Floculation</ul>
                        <ul>✔ Flottation à air dissous (DAF)</ul>
                        <ul>✔ Décantation lamellaire</ul>
                        <ul>✔ Centrifugation et filtration</ul>
                        <ul>✔ Neutralisation, précipitation, électrolyse</ul>
                        <ul>Avantages :</ul>
                         <ul> ✔ Rendement élevé sur les MES</ul>
                         <ul> ✔ Installation compacte et optimisée</ul>
                         <ul> ✔ Procédés flexibles avec mise en service et arrêt instantané</ul> 
                    </div>
                  </div>
                  </div>
                </div>
                <div className="accordion-card style3">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      {" "}
                      2. Traitement Biologique
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <div className="faq-text text-black">
                        <p className="mb-3">
                          Nous proposons plusieurs technologies biologiques pour le traitement des charges
polluantes biodégradables :
                        </p>
                          <ul>✔ Boues activées (compactes ou classiques)</ul>
                          <ul>✔ MBBR (cultures fixées fluidisées)</ul>
                          <ul>✔ Biodisques rotatifs (RBC)</ul>
                          <ul>✔ MBR (membrane bioreactor)</ul>
                          <ul>Atouts :</ul>
                          <ul> ✔ Réduction des coûts d’exploitation</ul>
                          <ul> ✔ Maîtrise des rendements épuratoires</ul>
                          <ul> ✔ Solutions adaptées à toutes les tailles d’installation </ul> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      {" "}
                      3. Gestion et Valorisation des Boues
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <div className="faq-text text-black">
                        <p className="mb-3">
                          Nous assurons le traitement et la déshydratation des boues générées par les
                          différentes étapes d’épuration :
                        </p>
                          <ul>✔ Filtres à bande, filtres à plateau, presses à vis</ul>
                          <ul>✔ Centrifugation, lits de séchage</ul>
                          <ul>✔ Digestion anaérobie</ul>
                          <ul>Objectif :</ul>
                          <ul> ✔ Réduire le volume des boues pour faciliter leur valorisation (épandage
                          agricole, incinération ou compostage).</ul>
                      </div>
                    </div>
                  </div>
                </div>

                                <div className="accordion-card style3 active">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      {" "}
                     4. Traitement des Odeurs
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                  <div className="accordion-body">
                    <div className="faq-text text-black">
                      <p className="mb-3">
                        Pour le respect de l’environnement et du voisinage, nous intégrons des solutions de
                        désodorisation efficaces :
                      </p>
                        <ul>✔ Charbon actif</ul>
                        <ul>✔ Biofiltres naturels</ul>
                        
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAreaThree;
