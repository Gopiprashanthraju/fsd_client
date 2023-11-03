import "./About.css";
function About() {
  return (
    <main id="main " className="glass">
      {/* ======= About Section ======= */}
      <section id="about" className="about ">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="content col-xl-5 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>Welcome to SilentVox</h3>
                <p>
                  the ultimate platform where innovation, collaboration, and
                  creativity unite. We're more than just a website; we're a
                  community of content creators, viewers, and thinkers,
                  dedicated to breaking down barriers and fostering a diverse
                  and engaging online ecosystem.
                </p>
                <a href="#" className="about-btn">
                  About us <i className="bx bx-chevron-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-receipt" />
                    <h4>Our Mission</h4>
                    <p>
                      At SilentVox, we believe in the power of ideas. Our
                      mission is to provide a space where people from all walks
                      of life can come together to express themselves
                      Anonymously
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bx bx-cube-alt" />
                    <h4>Our Story</h4>
                    <p>
                      Our journey began with a simple idea: to create a digital
                      space that combined the best of YouTube's visual
                      storytelling and Reddit's collaborative discussions.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="bx bx-images" />
                    <h4>Our Vision</h4>
                    <p>
                      We envision a world where ideas and creativity flow
                      freely, unburdened by the constraints of identity
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="bx bx-shield" />
                    <h4>Join Us Today</h4>
                    <p>
                      We invite you to become a part of our thriving community.
                      Share your insights, collaborate with fellow enthusiasts,
                      and embark on a journey of discovery
                    </p>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
