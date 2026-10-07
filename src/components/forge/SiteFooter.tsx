import React from 'react';
import logoImg from '../../assets/logo.png';

/**
 * Standalone SiteFooter reproducing the IUOVA website footer.
 * Isolated so it can easily be replaced or deleted in production.
 */
export const SiteFooter: React.FC = () => {
  return (
    <footer className="sitefooter on-dark">
      <div className="sitefooter__cols">
        <div>
          <a href="/" className="logo" aria-label="IUOVA Design Company">
            <img
              src={logoImg}
              alt="IUOVA Design Company"
              className="logo__img footer-logo-img"
            />
          </a>
          <p className="footer-desc">
            Industrial product design and engineering studio. Transforming bold
            ideas into manufacturable reality.
          </p>
          <p className="sitefooter__contact">
            <a href="mailto:info@iuova.in">info@iuova.in</a>
            <br />
            <a href="tel:+918369083208">+91 83690 83208</a> ·{' '}
            <a href="tel:+918104487664">+91 81044 87664</a>
          </p>
          <address>
            Office No. 504, Filix Commercial,
            <br />
            Near Asian Paints Bus Stop,
            <br />
            Bhandup (W), Mumbai 400078
          </address>
          <div className="socials">
            <a
              href="https://linkedin.com/company/iuovadesigncompany"
              aria-label="LinkedIn"
            >
              In
            </a>
            <a href="https://x.com/iuovadesign" aria-label="X">
              X
            </a>
            <a href="https://instagram.com/iuovadesign" aria-label="Instagram">
              Ig
            </a>
            <a href="https://youtube.com/@Iuovadesign" aria-label="YouTube">
              Yt
            </a>
            <a href="https://pinterest.com/iuovadesign" aria-label="Pinterest">
              Pi
            </a>
            <a
              href="https://www.behance.net/iuovadesigncompany"
              aria-label="Behance"
            >
              Be
            </a>
          </div>
        </div>

        <div>
          <h3>Work</h3>
          <ul>
            <li>
              <a href="/work">All Projects</a>
            </li>
            <li>
              <a href="/work?industry=consumer-electronics">
                Consumer Electronics
              </a>
            </li>
            <li>
              <a href="/work?industry=medical-devices">Medical Devices</a>
            </li>
            <li>
              <a href="/work?industry=industrial-equipment">
                Industrial Equipment
              </a>
            </li>
          </ul>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/services/industrial-design">Industrial Design</a>
            </li>
            <li>
              <a href="/services/product-development">Product Development</a>
            </li>
            <li>
              <a href="/services/digital-product-ux">Digital Product UX</a>
            </li>
            <li>
              <a href="/services/brand-strategy">Brand Strategy</a>
            </li>
            <li>
              <a href="/services/innovation-strategy">Innovation Strategy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/why-iuova">Why Us?</a>
            </li>
            <li>
              <a href="/services">Expertise</a>
            </li>
            <li>
              <a href="/forge-system">The FORGE System™</a>
            </li>
            <li>
              <a href="/prototype">Model Making</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/ventures">Ventures</a>
            </li>
            <li>
              <a href="/clients">Clients</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Featured case studies</h3>
          <ul>
            <li>
              <a href="/work/ellipse">Ellipse</a>
            </li>
            <li>
              <a href="/work/cura">Cura</a>
            </li>
            <li>
              <a href="/work/gatikneo">Gatikneo</a>
            </li>
            <li>
              <a href="/work/charge-grid">Charge Grid</a>
            </li>
            <li>
              <a href="/work/kaspell">Kaspell</a>
            </li>
            <li>
              <a href="/work/enso">Enso</a>
            </li>
          </ul>
          <h3>Insights &amp; media</h3>
          <ul>
            <li>
              <a href="/insights">Latest Insights</a>
            </li>
            <li>
              <a href="/media">Media Library</a>
            </li>
            <li>
              <a href="/latest">Industry News</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="sitefooter__geo">
        Serving clients in Mumbai, Pune, Bangalore · New York · London ·
        Toronto · Dubai · Berlin · Singapore — and worldwide.
      </p>
      <div className="sitefooter__legal">
        <span>© 2026 IUOVA Design. All rights reserved.</span>
        <span>
          <a href="/privacy-policy/">Privacy Policy</a> ·{' '}
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
