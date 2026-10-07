import React from 'react';
import ArrowRight from './icons/ArrowRight';
import smoothScrollTo from '../../lib/smoothScroll';

export const HeroSection: React.FC = () => {
  const handleStageClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetSelector: string
  ) => {
    e.preventDefault();
    smoothScrollTo(targetSelector, {
      offset: 40,
      duration: 850,
    });
  };

  return (
    <section className="hero on-dark">
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="hero__glow" aria-hidden="true"></div>

      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/services">Expertise</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">The FORGE System™</span>
      </nav>

      <div className="hero__body">
        <div>
          <p className="eyebrow">The official methodology playbook</p>
          <h1 className="h1 hero__title">
            <span className="hero__title-line">FORGE</span>
            <br />
            <span className="hero__title-accent">
              SYSTEM<sup aria-hidden="true">™</sup>
            </span>
          </h1>
          <p className="hero__rule">
            <span>
              <b>Six stages</b>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <b>Gate-verified</b>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <b>Nothing skips</b>
            </span>
          </p>
          <p className="lede hero__lede">
            Six stages. Gate-verified. Nothing skips. Every project moves
            through the same system, and no stage opens until the previous gate
            closes in writing.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--light"
              href="https://www.iuovadesign.com/contact"
            >
              Book a discovery call
              <ArrowRight />
            </a>
            <a
              className="btn btn--ghost-dark"
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Portfolio
            </a>
          </div>
          <div
            className="scrollcue"
            role="button"
            tabIndex={0}
            onClick={() => smoothScrollTo('#flow', { offset: 30, duration: 850 })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                smoothScrollTo('#flow', { offset: 30, duration: 850 });
              }
            }}
          >
            <span>Scroll to explore</span>
            <i aria-hidden="true"></i>
          </div>
        </div>

        <nav className="toc" aria-label="Stages">
          <div className="toc__head">
            <span>Contents</span>
            <span>Turnaround</span>
          </div>
          <a
            className="toc__row"
            href="#stage-focus"
            onClick={(e) => handleStageClick(e, '#stage-focus')}
          >
            <span className="toc__name">
              <b className="toc__key">F</b>
              <span>
                Focus
                <span className="toc__sub">Vision &amp; brief</span>
              </span>
            </span>
            <span className="toc__dur">2–4 d</span>
          </a>
          <a
            className="toc__row"
            href="#stage-originate"
            onClick={(e) => handleStageClick(e, '#stage-originate')}
          >
            <span className="toc__name">
              <b className="toc__key">O</b>
              <span>
                Originate
                <span className="toc__sub">Concept creation</span>
              </span>
            </span>
            <span className="toc__dur">4–6 d</span>
          </a>
          <a
            className="toc__row"
            href="#stage-refine"
            onClick={(e) => handleStageClick(e, '#stage-refine')}
          >
            <span className="toc__name">
              <b className="toc__key">R</b>
              <span>
                Refine
                <span className="toc__sub">Production CAD</span>
              </span>
            </span>
            <span className="toc__dur">5–8 d</span>
          </a>
          <a
            className="toc__row"
            href="#stage-gate"
            onClick={(e) => handleStageClick(e, '#stage-gate')}
          >
            <span className="toc__name">
              <b className="toc__key">G</b>
              <span>
                Gate
                <span className="toc__sub">DFM validation</span>
              </span>
            </span>
            <span className="toc__dur">3–5 d</span>
          </a>
          <a
            className="toc__row"
            href="#stage-engineer-a"
            onClick={(e) => handleStageClick(e, '#stage-engineer-a')}
          >
            <span className="toc__name">
              <b className="toc__key">E</b>
              <span>
                Engineer A
                <span className="toc__sub">Prototyping</span>
              </span>
            </span>
            <span className="toc__dur">7–12 d</span>
          </a>
          <a
            className="toc__row"
            href="#stage-engineer-b"
            onClick={(e) => handleStageClick(e, '#stage-engineer-b')}
          >
            <span className="toc__name">
              <b className="toc__key">E</b>
              <span>
                Engineer B
                <span className="toc__sub">Handoff</span>
              </span>
            </span>
            <span className="toc__dur">3–4 d</span>
          </a>
          <dl className="toc__facts">
            <div
              className="toc__fact"
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                smoothScrollTo('#turnaround', { offset: 30, duration: 900 })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  smoothScrollTo('#turnaround', { offset: 30, duration: 900 });
                }
              }}
            >
              <dt>End to end</dt>
              <dd>24–39 days</dd>
            </div>
            <div
              className="toc__fact"
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() =>
                smoothScrollTo('#flow', { offset: 30, duration: 850 })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  smoothScrollTo('#flow', { offset: 30, duration: 850 });
                }
              }}
            >
              <dt>Stage gates</dt>
              <dd>6</dd>
            </div>
          </dl>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
