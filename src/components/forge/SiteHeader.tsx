import React from 'react';
import ChevronDown from './icons/ChevronDown';
import logoImg from '../../assets/logo.png';

/**
 * Standalone SiteHeader reproducing the IUOVA website header.
 * Isolated so it can easily be replaced or deleted in production.
 */
export const SiteHeader: React.FC = () => {
  return (
    <header className="siteheader">
      <a href="/" className="logo" aria-label="IUOVA Design Company">
        <img
          src={logoImg}
          alt="IUOVA Design Company"
          className="logo__img"
        />
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="/work">Work</a>
        <a href="/prototype">Model Making</a>
        <a href="/forge-system" aria-current="page">
          The FORGE System™
        </a>
        <a href="/about" className="nav__caret">
          About Us
          <ChevronDown />
        </a>
        <a href="/media">Media</a>
        <a href="#" className="nav__caret">
          More
          <ChevronDown />
        </a>
      </nav>
      <div className="header__cta">
        <a
          className="btn btn--light btn--sm"
          href="/portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>

<a
  className="btn btn--light btn--sm"
  href="https://iuovadesign.com/contact"
  target="_blank"
  rel="noopener noreferrer"
>
  Let's Talk
</a>
      </div>
    </header>
  );
};

export default SiteHeader;
