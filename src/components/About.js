import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Advanced Care Hospital</h1>
      <p className="about-intro">
        Welcome to <strong>Advanced Care Hospital</strong>, located at <em>Johri Bazar, S.D.O Road Street</em>.
        We are dedicated to providing exceptional healthcare services to our community with
        state-of-the-art facilities and a team of highly qualified medical professionals.
      </p>

      <section className="about-section">
        <h2>🏥 Emergency Services</h2>
        <p>We offer <strong>24 x 7 emergency services</strong> to ensure that you receive the care you need, when you need it. <br />
          <em>(Reg. No- 338/23/24)</em>
        </p>
      </section>

      <section className="about-section">
        <h2>👩‍⚕️ Our Doctors</h2>
        <div className="doctor-list">
          {[
            { name: "Dr. Pramod Kumar", degree: "M.B.B.S, MD (Medicine)", specialty: "Physician & Cardiologist", availability: "Monday, Wednesday & Friday" },
            { name: "Dr. Saurabh Das", degree: "M.B.B.S, MD (Neuro Physician)", availability: "Monday to Saturday, 12:00 PM - 05:00 PM" },
            { name: "Dr. Divya Ray", degree: "M.D (Gynaecologist)", availability: "Monday to Saturday, 12:00 PM - 05:00 PM" },
            { name: "Dr. O.P. Bharti", degree: "M.B.B.S., M.S (General Surgeon)", availability: "Monday to Saturday, 12:00 PM - 05:00 PM" },
          ].map((doctor, index) => (
            <div key={index} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p><strong>{doctor.degree}</strong></p>
              <p>{doctor.specialty}</p>
              <p><strong>Available:</strong> {doctor.availability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>📞 Contact Us</h2>
        <p>For appointments, please call:</p>
        <ul className="contact-list">
          <li>📞 7979023596</li>
          <li>📞 7070702916</li>
          <li>📞 9504227843</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>👨‍💼 Management</h2>
        <p><strong>Director:</strong> Faisal Khan, Uday Kumar</p>
      </section>
    </div>
  );
};

export default About;
