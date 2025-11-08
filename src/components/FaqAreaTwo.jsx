

import CountUp from "react-countup";

const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space-bottom space ">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50 text-center">
              <img
                src="assets/img/normal/faq-thumb-2-1.png"
                alt="sme2d"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">Pourquoi nous choisir?</span>
              <h2 className="sec-title">
                Si vous avez besoin d'un excellent résultat et d'une bonne
                qualité nous sommes là !
              </h2>
            </div>

            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Chez SME2D, nous sommes passionnés par notre travail et
                      nous nous engageons à fournir à nos clients les solutions
                      les plus innovantes et les plus durables. Avec notre
                      expertise, notre engagement envers le service à la
                      clientèle et notre engagement envers la durabilité, nous
                      sommes convaincus que nous pouvons répondre à tous vos
                      besoins en matière d'entreprise de manière efficace et
                      efficiente. Choisissez SME2D pour vos besoins en matière
                      d'entreprise et voyez la différence que nous pouvons faire
                      pour votre entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
