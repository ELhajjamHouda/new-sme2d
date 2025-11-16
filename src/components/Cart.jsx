"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";

const Cart = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [scaleRatio, setScaleRatio] = useState(1);

  const markers = [
    
    {
      id: 1,
      name: "Mazguitem",
      top: "15%",
      left: "67%",
      color: "#28a745",
      status: "active",
      link: "#",
    },
    {
      id: 2,
      name: "Sidi Hajjaj",
      top: "25%",
      left: "55%",
      color: "#28a745",
      status: "active",
      link: "#",  
    },
 {
      id: 3,
      name: "Bouznika",
      top: "21%",
      left: "56%",
      color: "#28a745",
      status: "active",
      link: "#",
    },
 {
      id: 4,
      name: "Prison Taourirt",
      top: "18%",
      left: "67%",
      color: "#28a745",
      status: "active",
      link: "#",
    },    
  {
      id: 5,
      name: "Prison Troudaunt",
      top: "39%",
      left: "51%",
      color: "#28a745",
      status: "active",
      link: "#",
    },    
      {
      id: 6,
      name: "Prison Essaouira",
      top: "40%",
      left: "49%",
      color: "#28a745",
      status: "active",
      link: "#",
    }, 
  {
      id: 7,
      name: "Kassita",
      top: "14%",
      left: "67%",
      color: "#28a745",
      status: "active",
      link: "#",
    },
      {
      id: 8,
      name: "SK Taourirt",
      top: "19%",
      left: "68.5%",
      color: "#28a745",
      status: "active",
      link: "#",
    },
     {
      id: 9,
      name: "Mirlaft",
      top: "39%",
      left: "49%",
      color: "#28a745",
      status: "active",
      link: "#",
    },    
     {
      id: 10,
      name: "Dakhla 1",
      top: "78%",
      left: "27.5%",
      color: "#28a745",
      status: "active",
      link: "#",
    }, 
     {
      id: 11,
      name: "Dakhla 2",
      top: "77%",
      left: "27.5%",
      color: "#28a745",
      status: "active",
      link: "#",
    }, 
     {
      id: 12,
      name: "Dakhla 3",
      top: "79%",
      left: "27.5%",
      color: "#28a745",
      status: "active",
      link: "#",
    },    
     {
      id: 13,
      name: "Tnin Amellou",
      top: "46%",
      left: "48%",
      color: "#28a745",
      status: "active",
      link: "#",
    },  
    {
      id: 14,
      name: "SRM Casablanca",
      top: "22%",
      left: "54.5%",
      color: "#28a745",
      status: "active",
      link: "#",  
    }, 
     {
      id: 15,
      name: "Surpresseur Sidi Maarouf Casablanca",
      top: "22.3%",
      left: "55%",
      color: "#28a745",
      status: "active",
      link: "#",  
    }, 
     {
      id: 16,
      name: "Ouelad Ghanem",
      top: "22.3%",
      left: "55.5%",
      color: "#28a745",
      status: "active",
      link: "#",  
    }, 
  ];

  const getStatusColor = (status) => {
    if (status === "active") return "#28a745";
    if (status === "completed") return "#6c757d";
    if (status === "upcoming") return "#ffc107";
  };

  return (
    <section className="blog-area space-bottom">
      <div className="container">

        <div className="page-title space-top" style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", fontWeight: "600" }}>
        📍 Nos Projets sur la Carte
       </div>

        <div className="border-wrapper">
          {/* --------------- ZOOM CONTROLLER --------------- */}
          <TransformWrapper
            initialScale={1}
            minScale={0.8}
            maxScale={6}
            wheel={{ step: 0.2 }}
            onTransformed={(e) => {
              setScaleRatio(e.state.scale); // <-- récupère le zoom en temps réel
            }}
          >

            <TransformComponent>
              <div className="image-container">
                <img
                  src="assets/img/blog/carte.png"
                  alt="Carte"
                  className="zoomable-image"
                />

                {/* ---- Markers ---- */}
                {markers.map((marker) => (
                  <div key={marker.id}>
                    <div
                      className="marker"
                      style={{
                        top: marker.top,
                        left: marker.left,
                        background: marker.color,

                        /* TAILLE AUTO SELON LE ZOOM */
                        transform: `translate(-50%, -100%) rotate(-45deg) scale(${1 / scaleRatio})`,
                      }}
                      onMouseEnter={() => setHoveredMarker(marker)}
                      onMouseLeave={() => setHoveredMarker(null)}
                      onClick={() => setSelectedMarker(marker)}
                    ></div>

                    {/* ---- Hover Popup ---- */}
                    {hoveredMarker?.id === marker.id && (
                        <div
                            className="popup"
                            style={{
                            top: marker.top,
                            left: marker.left,
                            transform: `translate(-50%, -110%) scale(${1 / scaleRatio})`,
                            }}
                        >
                            <h4>{marker.name}</h4>
                            <p>
  <b>Status :</b>{" "}
  <span
    className=""
    style={{ backgroundColor: getStatusColor(marker.status || "inactive") }}
  >
    {marker.status || "Non défini"}
  </span>
</p>

                            <a href={marker.link} className="btn-project">
                            View Project →
                            </a>
                        </div>
                        )}

                  </div>
                ))}
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>

      {/* ---- MODAL ---- */}
      {selectedMarker && (
        <div className="modal-overlay" onClick={() => setSelectedMarker(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMarker(null)}>×</button>

            <h2>{selectedMarker.name}</h2>
            <p>
  <b>Status :</b>{" "}
  <span
    className=""
    style={{ backgroundColor: getStatusColor(selectedMarker.status || "inactive") }}
  >
    {selectedMarker.status || "Non défini"}
  </span>
</p>


            <a href={selectedMarker.link} className="modal-btn">
              View Project →
            </a>
          </div>
        </div>
      )}
 {/* === CSS === */}
<style jsx>{`
  .border-wrapper {
    border-radius: 12px;
    overflow: visible !important;
    max-width: 900px;
    margin: 40px auto;
    background: #fff;
  }

  .image-container {
    position: relative;
    overflow: visible !important;
  }

  .zoomable-image {
    width: 100%;
    display: block;
  }

  /* ----------------------- MARKER AUTO-ZOOM ----------------------- */
  .marker {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50% 50% 50% 0;
    transform: translate(-50%, -100%) rotate(-45deg);
    cursor: pointer;
    z-index: 20;
    transition: transform 0.15s linear;
  }

  .marker::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Désactivation du hover normal pour ne pas casser l'auto-zoom */
  .marker:hover {
    transform: translate(-50%, -100%) rotate(-45deg) scale(1);
  }

  /* ----------------------- POPUP ----------------------- */
  .popup {
    position: absolute;
    background: white;
    padding: 12px 16px;
    width: 220px;
    border-radius: 12px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.22);
    z-index: 999;
    animation: fadeIn 0.2s ease;
  }

  .badge {
    padding: 3px 8px;
    color: white;
    border-radius: 6px;
    margin-left: 6px;
    font-size: 12px;
  }

  .btn-project {
    display: inline-block;
    margin-top: 6px;
    padding: 6px 10px;
    background: #007bff;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-size: 13px;
  }

  /* ----------------------- MODAL ----------------------- */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
    z-index: 5000;
  }

  .modal-box {
    background: white;
    width: 420px;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
    position: relative;
    animation: zoomIn .25s ease;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 22px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .modal-btn {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 14px;
    background: #007bff;
    color: white;
    border-radius: 8px;
    text-decoration: none;
  }

  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -120%); }
    to { opacity: 1; transform: translate(-50%, -110%); }
  }
`}</style>

    </section>
  );
};

export default Cart;
