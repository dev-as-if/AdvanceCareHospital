import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>📞 +91 7070702916</p>
          <p>📧 contact@advancedcarehospital.com</p>
          <p>⏰ 24*7 Services</p>
        </div>
        <div className="map">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d115052.65459577563!2d85.1221736!3d25.6913276!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x39ed5c10c7a62c2d%3A0x2d41af3ba64e987d!3m2!1d25.692372199999998!2d85.2041459!4m5!1s0x39ed5d828c3beef3%3A0x86e42accb3dbdd2e!2sJohri%20Bazar%2C%20S.D.O%20ROAD%20Gali%2C%20Hajipur%2C%20Pin%2C%20no%20844101!3m2!1d25.691350699999997!2d85.2045751!5e0!3m2!1sen!2sin!4v1737983913794!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
