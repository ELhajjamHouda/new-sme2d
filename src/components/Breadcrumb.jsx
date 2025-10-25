import Link from "next/link";

const Breadcrumb = ({ title, imageHeader }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `
          linear-gradient(90deg, #171717 0.03%, rgba(165, 14, 14, 0) 99.95%),
          url(${imageHeader})
        `,
      }}
    >

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
