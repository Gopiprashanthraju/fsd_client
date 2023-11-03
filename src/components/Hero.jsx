import React from "react";
import "./Hero.css";
import "boxicons/css/boxicons.min.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <video autoPlay muted loop>
        <source
          src="/path/to/your/video.mp4" // Update the path to your video
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-container" data-aos="fade-up">
        <h1>Welcome to SilentVox</h1>
        <h2>Where Ideas Anonymously Unite: Your Hub for Diverse Journals</h2>
        <a href="/Auth" className="circle scrollto">
          <i className="bx bx-chevrons-right"></i>{" "}
          {/* Use className instead of class */}
        </a>
      </div>
    </section>
  );
}

export default Hero;
