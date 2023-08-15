import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Us</h2>
        <figure className="image-container">
          <img src="/src/assets/image.gif" alt="About Us" />
          <figcaption>Image Caption</figcaption>
        </figure>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </section>
  );
}

export default About;
