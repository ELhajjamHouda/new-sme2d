import Link from "next/link";

const FooterAreaTwo = () => {
  return (
<footer
  className="footer-wrapper footer-layout2"
  style={{
    background: "#3EA5D0",  // fond bleu uni
  }}
>
      <div className="container">
        {/* <div className="widget-area"> */}
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">SME2D</h3>
                <p className="footer-text mb-30">
                 SME2D, votre partenaire pour des solutions innovantes et durables dans le traitement et l’épuration de l’eau.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Liens</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/page">Accueil</Link>
                    </li>
                    <li>
                      <Link href="/about">À propos de nous</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Projets</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/epuration-des-eaux-usees">Épuration Des Eaux Usées</Link>
                    </li>
                    <li>
                      <Link href="/relevage-et-pompage-des-eaux">Relevage et Pompage des Eaux</Link>
                    </li>
                    <li>
                      <Link href="/traitement-de-l-air">Traitement de l'air</Link>
                    </li>
                    <li>
                      <Link href="/electricite-et-automatisme">Électricité et Automatisme</Link>
                    </li>
                    <li>
                      <Link href="/service-apres-vente-et-exploitation">Service après-vente et exploitation</Link>
                    </li>
                    <li>
                      <Link href="/bureau-d-etudes-integre">Bureau d’études intégré</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        Mohammedia
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link href="tel:888123456765">06 61 93 21 62/ 06 61 12 40 40</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link href="mailto:infoname@mail.com">
                         sme2d.sarl@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="#">SME2D</Link> 2025 | Tous droits réservés
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                {/* <Link href="/contact">Tarms &amp; Condition</Link> */}
                <Link href="/contact">Merci de votre visite et bienvenue à</Link>
                <Link href="/contact">SME2D</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
