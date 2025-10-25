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
          <p className="contact-info_text">80 lotiss. Al Amane , El Alia</p>
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


      {/* Carte */}
      <div className="space-bottom">
        <div className="container">
          <div className="map-sec">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              title="address"
            />
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div
        className="space-bottom bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/img/blog/email-back.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "50px",  // espace en haut
          paddingBottom: "50px", // espace en bas
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact-form-wrap p-4 bg-white rounded shadow">
                <div className="title-area text-center">
                  <span className="sub-title">Contactez-nous</span>
                  <h2 className="sec-title">Une question ? Écrivez-nous !</h2>
                </div>
                <form onSubmit={handleSubmit} className="appointment-form">
                  <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6 mt-3">
                      <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Numéro de téléphone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    className="form-control mt-3"
                    required
                  />
                  <div className="form-btn col-12 text-center mt-3">
                    <button type="submit" className="btn style2">
                      Envoyer <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                  {status && <p className="text-center mt-3">{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
