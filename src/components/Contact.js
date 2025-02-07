import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>
      <p className="contact-intro">
        Have a question or need assistance? Feel free to reach out to us using the details below.
      </p>

      <div className="contact-info">
        <div className="contact-card">
          <h2>🏥 Address</h2>
          <p>Advanced Care Hospital</p>
          <p>Johri Bazar, S.D.O Road Street</p>
        </div>

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>contact@advancedcarehospital.com</p>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>7979023596</p>
          <p>7070702916</p>
          <p>9504227843</p>
        </div>

        <div className="contact-card">
          <h2>⏰ Working Hours</h2>
          <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
          <p>Emergency: 24/7</p>
        </div>
      </div>

      <div className="map-container">
        <h2>📍 Location</h2>
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509495!2d-122.41941548467824!3d37.77492977975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA1LjkiVw!5e0!3m2!1sen!2sus!4v1633524258789!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
