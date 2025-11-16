"use client";
import React, { useState } from "react";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l'envoi");
      }
    } catch (err) {
      setStatus("⚠️ Erreur de connexion au serveur");
    }
  };

  return (
    <>
      {/* Informations de contact */}
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Adresse</h6>
                <p className="contact-info_text">
                  80 lotiss. Al Amane , El Alia
                </p>
                <p className="contact-info_text">Mohammedia, Maroc</p>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Contact</h6>
                <p className="contact-info_text">
                  <a href="tel:(+212)661932162">(+212) 661 932 162</a>
                </p>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-mail</h6>
                <p className="contact-info_text">
                  <a href="mailto:contact@sme2d.com">sme2d.sarl@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire à gauche + Carte à droite */}
      <div className="space-bottom" style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="row gx-4 gy-4 align-items-start">
            {/* Formulaire à gauche */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="text-center mb-4">
                  <span className="sub-title">Contactez-nous</span>
                  <h2 className="sec-title">Une question ? Écrivez-nous !</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Adresse email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Numéro de téléphone"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      className="form-control"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn style2">
                      Envoyer <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                  {status && <p className="text-center mt-3">{status}</p>}
                </form>
              </div>
            </div>

            {/* Carte à droite */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="rounded shadow-sm overflow-hidden h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.183020408645!2d-7.382073933978181!3d33.68835242708963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b7b18e731197%3A0x8f0fbc9e2f9b6322!2sSME2D%20%3A%20Technologie%20de%20l'eau%20%26%20Travaux%20divers.!5e0!3m2!1sfr!2sma!4v1761402311108!5m2!1sfr!2sma"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
