"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  const mobileMenu = () => {
    setActive(!active);
  };

  // ✅ الدالة لتحديد حالة النشاط (Active State Logic)
  const isActive = (href) => {
    // 1. تطابق تام للصفحات الفردية
    if (pathname === href) {
      return "active-link";
    }
    
    // 2. تطابق يبدأ بـ (للروابط الأبوية، مع استثناء الصفحة الرئيسية "/")
    if (href !== "/" && pathname.startsWith(href)) {
      return "active-link";
    }
    
    return "";
  };

  useEffect(() => {
    // كود القائمة المنبثقة (Offcanvas)
    const offCanvasNav = document.getElementById("offcanvas-navigation");
    if (!offCanvasNav) return;

    const subMenus = offCanvasNav.querySelectorAll(".sub-menu");
    subMenus.forEach(sub => {
      sub.insertAdjacentHTML("beforebegin", "<span class='mean-expand-class'>+</span>");
    });

    const menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");

    const sideMenuExpand = function () {
      if (this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
      } else {
        menuExpand.forEach(me => me.parentElement.classList.remove("active"));
        this.parentElement.classList.add("active");
      }
    };

    menuExpand.forEach(me => me.addEventListener("click", sideMenuExpand));

    // ===== Scroll Event =====
    const handleScroll = () => setScroll(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
      menuExpand.forEach(me => me.removeEventListener("click", sideMenuExpand));
    };
  }, []);

  return (
    <header className="nav-header header-layout1">
      {/* Partie top header */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <Link href="mailto:sme2d.sarl@gmail.com">sme2d.sarl@gmail.com</Link>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    80 lotiss Al Amane , El Alia - Mohammedia
                  </li>
                  <li>
                    <i className="fas fa-clock" />
                    Lundi - Vendredi
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links ps-0">
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://wa.me/212666221689"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Menu */}
      <div className={`sticky-wrapper ${scroll ? "sticky" : ""}`}>
        <div className="menu-area">
          <div className="header-navbar-logo">
            <Link href="/">
              <img src="assets/img/logo.svg" alt="sme2d" />
            </Link>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-lg-start justify-content-between">
              <div className="col-auto d-xl-none d-block">
                <div className="header-logo">
                  <Link href="/">
                    <img src="assets/img/logo.svg" alt="sme2d" />
                  </Link>
                </div>
              </div>

              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    {/* ✅ استخدام isActive لجميع الروابط */}
                    <li className={isActive("/")}>
                      <Link href="/">Accueil</Link>
                    </li>
                    <li className={isActive("/about")}>
                      <Link href="/about">À propos de nous</Link>
                    </li>
                    
                    {/* ✅ الرابط الأبوي: نستخدم || (OR) للتأكد من أنه نشط إذا كانت أي صفحة فرعية نشطة */}
                    <li className={`menu-item-has-children ${
                        isActive("/service") || 
                        isActive("/epuration-des-eaux-usees") || 
                        isActive("/relevage-et-pompage-des-eaux") || 
                        isActive("/traitement-de-l-air") || 
                        isActive("/electricite-et-automatisme") || 
                        isActive("/service-apres-vente-et-exploitation") || 
                        isActive("/bureau-d-etudes-integre")
                    }`}>
                      <Link href="/service">Nos services</Link>
                      <ul className="sub-menu">
                        {/* ✅ الروابط الفرعية تستعمل isActive أيضاً */}
                        <li className={isActive("/epuration-des-eaux-Usees")}>
                          <Link href="/epuration-des-eaux-Usees">Épuration Des Eaux Usées</Link>
                        </li>
                        <li className={isActive("/relevage-et-pompage-des-eaux")}>
                          <Link href="/relevage-et-pompage-des-eaux">Relevage et Pompage des Eaux</Link>
                        </li>
                        <li className={isActive("/traitement-de-l-air")}>
                          <Link href="/traitement-de-l-air">Traitement de l'air</Link>
                        </li>
                        <li className={isActive("/electricite-et-automatisme")}>
                          <Link href="/electricite-et-automatisme">Électricité et Automatisme</Link>
                        </li>
                        <li className={isActive("/service-apres-vente-et-exploitation")}>
                          <Link href="/service-apres-vente-et-exploitation">Service après-vente et exploitation</Link>
                        </li>
                        <li className={isActive("/bureau-d-etudes-integre")}>
                          <Link href="/bureau-d-etudes-integre">Bureau d’études intégré</Link>
                        </li>
                      </ul>
                    </li>

                    <li className={isActive("/project")}>
                      <Link href="/project">Projects</Link>
                    </li>
                    <li className={isActive("/contact")}>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>

                {/* Mobile button */}
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                    style={{ color: 'black' }}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>

              <div className="col-auto ms-auto d-xl-block d-none">
                <div className="navbar-right-desc">
                  <img src="assets/img/icon/chat.svg" alt="sme2d" />
                  <div className="navbar-right-desc-details">
                    <h6 className="title">Besoin d'aide</h6>
                    <Link className="link" href="tel:+212661932162">
                      (+212) 661 932 162
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <Link href="/">
              <img src="assets/img/logo.png" alt="sme2d" />
            </Link>
            <button className="menu-toggle" onClick={mobileMenu}>
              <i className="fa fa-times" />
            </button>
          </div>

          <div className="mobile-menu">
            <ul id="offcanvas-navigation">
              <li className={isActive("/")}>
                <Link href="/">Accueil</Link>
              </li>
              <li className={isActive("/about")}>
                <Link href="/about">À propos de nous</Link>
              </li>
              <li className={`menu-item-has-children ${
                  isActive("/service") || 
                  isActive("/epuration-des-eaux-usees") || 
                  isActive("/relevage-et-pompage-des-eaux") || 
                  isActive("/traitement-de-l-air") || 
                  isActive("/electricite-et-automatisme") || 
                  isActive("/service-apres-vente-et-exploitation") || 
                  isActive("/bureau-d-etudes-integre")
              }`}>
                <Link href="/service">Nos services</Link>
                <ul className="sub-menu">
                  <li className={isActive("/epuration-des-eaux-Usees")}>
                    <Link href="/epuration-des-eaux-Usees">Épuration Des Eaux Usées</Link>
                  </li>
                  <li className={isActive("/relevage-et-pompage-des-eaux")}>
                    <Link href="/relevage-et-pompage-des-eaux">Relevage et Pompage des Eaux</Link>
                  </li>
                  <li className={isActive("/traitement-de-l-air")}>
                    <Link href="/traitement-de-l-air">Traitement de l'air</Link>
                  </li>
                  <li className={isActive("/electricite-et-automatisme")}>
                    <Link href="/electricite-et-automatisme">Électricité et Automatisme</Link>
                  </li>
                  <li className={isActive("/service-apres-vente-et-exploitation")}>
                    <Link href="/service-apres-vente-et-exploitation">Service après-vente et exploitation</Link>
                  </li>
                  <li className={isActive("/bureau-d-etudes-integre")}>
                    <Link href="/bureau-d-etudes-integre">Bureau d’études intégré</Link>
                  </li>
                </ul>
              </li>
              <li className={isActive("/project")}>
                <Link href="/project">Projects</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;