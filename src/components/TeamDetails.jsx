"use client";

const TeamDetails = () => {
  return (
    <div
      className="team-details-area"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(79, 172, 254), rgb(230, 240, 255))",
      }}
    >
      <div className="container">   
        <div className="single-team-details">
          <div className="team-about-card">
            <div className="row align-items-center">
              
              {/* Image à gauche */}
              <div className="col-lg-6 order-lg-1 order-2 ps-lg-4">
                <div className="faq-thumb2 text-center">
                  <img
                    src="assets/img/normal/sme2d_Image.png"
                    alt="sme2d"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Texte à droite */}
              <div className="col-lg-6 order-lg-2 order-1 pe-lg-4">
              <div className="team-about-card_box text-lg-start"> 
                  <h3 className="team-about-card_title">
                    SME2D | Qui sommes-nous
                  </h3>
                  <p>
                      SME2D est spécialisée dans les solutions intégrées pour le
                      traitement des eaux et de l'air, l'automatisation et la
                      gestion des installations. Nous accompagnons nos clients à
                      chaque étape de leurs projets, de l'étude technique à
                      l'exploitation, en passant par la conception, la
                      réhabilitation, la fourniture, l'installation et le suivi
                      opérationnel des équipements.
                  </p>
              </div>
          </div>

            </div> {/* row */}
          </div> {/* team-about-card */}
        </div> {/* single-team-details */}
      </div> {/* container */}
    </div>
  );
};

export default TeamDetails;
