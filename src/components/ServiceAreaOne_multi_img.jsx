import Link from "next/link";


const ServiceAreaOne_multi_img = () => {
  return (
    <div className="service-area-1 space-top  overflow-hidden">
      <div className="container">
        <div className="section-title text-center mb-60">
          <h2 className="title">Nos Services</h2>
          <p>Découvrez notre expertise dans le traitement des eaux, l’air, et plus.</p>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                </div>
                */}
                <h4 className="service-card_title h5">
                  <Link href="/epuration-des-eaux-Usees">Épuration Des Eaux Usées</Link>
                </h4>
                {/*
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                */}
                <Link href="/epuration-des-eaux-Usees" className="link-btn">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                </div>
                */}
                <h4 className="service-card_title h5">
                  <Link href="/relevage-et-pompage-des-eaux">Relevage et Pompage des Eaux</Link>
                </h4>
                {/*
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                */}
                <Link href="/relevage-et-pompage-des-eaux" className="link-btn">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                </div>
                */}
                <div className="service-card_content_padding-top">
                  <h4 className="service-card_title h5">
                    <Link href="/traitement-de-l-air">Traitement de l'air</Link>
                  </h4>
                  {/*
                  <p className="service-card_text">
                    A car repair is a service provided to fix any issues or
                    damages with your{" "}
                  </p>
                  */}
                  <Link href="/traitement-de-l-air" className="link-btn">
                    En savoir plus <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
               <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"> 
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                </div>
                */}
                <div className="service-card_content_padding-top">
                  <h4 className="service-card_title h5">
                    <Link href="/electricite-et-automatisme">Électricité et Automatisme</Link>
                  </h4>
                  {/*
                  <p className="service-card_text">
                    A car repair is a service provided to fix any issues or
                    damages with your{" "}
                  </p>
                  */}
                    <Link href="/electricite-et-automatisme" className="link-btn">
                      En savoir plus <i className="fas fa-arrow-right" />
                    </Link>
                </div>
                </div>
                <div className="service-card_img">
                  <img src="assets/img/service/service-1-4.png" alt="img" />
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-5.svg" alt="img" />
                </div>
                */}
                <h4 className="service-card_title h5">
                  <Link href="/service-apres-vente-et-exploitation">Service après-vente et exploitation</Link>
                </h4>
                {/*
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                */}
                <Link href="/service-apres-vente-et-exploitation" className="link-btn">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-5.svg" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                {/*
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-6.svg" alt="img" />
                </div>
                */}
                <h4 className="service-card_title h5">
                  <Link href="/bureau-d-etudes-integre">Bureau d’Études Intégré</Link>
                </h4>
                {/*
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                */}
                <Link href="/bureau-d-etudes-integre" className="link-btn">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-6.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne_multi_img;
