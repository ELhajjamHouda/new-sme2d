import Link from "next/link";

const Breadcrumb = ({ title, imageHeader }) => {
  return (
    <div
      className="breadcumb-wrapper "
      style={{
        backgroundImage: imageHeader
          ?  `
          linear-gradient(90deg, #171717 0.03%, rgba(165, 14, 14, 0) 99.95%),
          url(${imageHeader})
        `
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="hero-wrapper hero-2"> */}
      <div className="hero-shape2-111">
        <span className="hero-shape2-122" />
      </div>

      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Acceuil</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
