
"use client";
import Link from "next/link"; 
import CategoryAreaOne from "./CategoryAreaOne";

const BlogAreaList = ({
  imageUrl,
  overlayTexts = [],
  tables = [],
  sidebar = {},
  categories = [],
  sliderData = [],  
  sectionTitle,
}) => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          {/* Main Content */}
          <div className="col-xxl-8 col-lg-8">
            <div className="blog-single-card">
              {/* Image avec overlay */}
              <div
                className="blog-thumb"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  position: "relative",
                  borderRadius: "5px",
                }}
              >
                <div className="text-overlay">
                  {overlayTexts.map((txt, i) => (
                    <div key={i}>{txt}</div>
                  ))}
                </div>
              </div>

              {/* Tables dynamiques */}
              <div className="blog-content">
                <div className="tables-wrapper">
                  <div className="tables-row">
                    {tables.map((table, i) => (
                      <div className="table-box" key={i}>
                        <h4 className="table-title text-center">{table.title}</h4>
                        <table className="styled-table custom-table">
                          <thead>
                            {table.headers && (
                              <tr>
                                {table.headers.map((h, j) => (
                                  <th key={j}>{h}</th>
                                ))}
                              </tr>
                            )}
                          </thead>
                          <tbody>
                            {table.rows.map((row, j) => (
                              <tr key={j}>
                                {row.map((cell, k) => (
                                  <td key={k}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Ici on remplace le contenu précédent par notre slider */}
              <CategoryAreaOne slidesData={sliderData} sectionTitle={sectionTitle}  />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xxl-4 col-lg-4">
            <aside className="sidebar-area">
              {/* Étude de Cas */}
              {sidebar.caseStudies && (
                <div className="widget">
                  <h3 className="widget_title">Étude de Cas</h3>
                  <div className="recent-post-wrap">
                    {sidebar.caseStudies.map((study, i) => (
                      <div className="recent-post" key={i}>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link className="text-inherit" href="#">
                              {study.label}
                            </Link>
                          </h4>
                          <div className="recent-post-meta">
                            <Link href="/#">{study.value}</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Catégories */}
              {categories.length > 0 && (
                <div className="widget widget_categories">
                  <h3 className="widget_title">Category</h3>
                  <ul>
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <Link href={cat.href}>
                          {cat.label} 
                          {/* <span>({cat.count})</span> */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
