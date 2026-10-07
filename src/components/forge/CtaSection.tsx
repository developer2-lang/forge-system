import React from 'react';
import ArrowRight from './icons/ArrowRight';

export const CtaSection: React.FC = () => {
  return (
    <section className="cta">
      <div>
        <h2>Start at stage 01.</h2>
        <p>
          A 30-minute discovery call is enough for us to capture the vision and
          tell you what your FORGE programme looks like.
        </p>
        <p className="cta__meta">info@iuova.in · +91 83690 83208</p>
      </div>
      <div className="cta__actions">
        <a className="btn btn--pill-dark" href="/contact">
          See how we work
          <ArrowRight />
        </a>
        <a className="btn btn--ghost-light" href="/forge-system.pdf">
          Download the playbook
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
