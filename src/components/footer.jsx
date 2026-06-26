import { useEffect, useRef } from "react";
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-stats" ref={statsRef}>
        <div className="stat-box">
          <i className="fa-solid fa-users icon"></i>
          <h2>700+</h2>
          <p>Developers</p>
        </div>

        <div className="stat-box">
          <i className="fa-solid fa-book-open icon"></i>
          <h2>165+</h2>
          <p>Problems</p>
        </div>

        <div className="stat-box">
          <i className="fa-solid fa-layer-group icon"></i>
          <h2>2</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-box">
          <i className="fa-solid fa-rocket icon"></i>
          <h2>2025</h2>
          <p>Launched</p>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <h2>FrontendArk</h2>
          <p>Master Frontend Interviews</p>

          <p className="desc">
            FrontendArk helps you practice JavaScript and React interview
            questions online. Solve challenges, improve your frontend
            skills, and build confidence.
          </p>

          <div className="socials">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Platform</h3>
          <a href="#">Problems</a>
          <a href="#">JavaScript</a>
          <a href="#">React</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="#">Tutorials</a>
          <a href="#">Blog</a>
          <a href="#">Courses</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 FrontendArk. Made with{" "}
          <i className="fa-solid fa-heart heart"></i> for developers worldwide
        </p>

        <div className="bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <span className="status">● All systems operational</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;