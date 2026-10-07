import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="sec sec--dark on-dark">
      <div className="grid-sec">
        <p className="marker">
          § 01
          <br />
          Why the system
        </p>
        <div>
          <h2 className="h2">
            Products don't fail from bad design.
            <br />
            They fail from <span className="problem__accent">no system</span>.
          </h2>
          <div className="fails">
            <div className="fail">
              <i aria-hidden="true">↘</i>
              <p>Renders that won't manufacture</p>
            </div>
            <div className="fail">
              <i aria-hidden="true">↘</i>
              <p>Status chased on WhatsApp</p>
            </div>
            <div className="fail">
              <i aria-hidden="true">↘</i>
              <p>DFM review after tooling quoted</p>
            </div>
            <div className="fail">
              <i aria-hidden="true">↘</i>
              <p>No paper trail</p>
            </div>
          </div>
          <div className="answer">
            <div>
              <i aria-hidden="true"></i>
              <b>Nothing skips</b>
              <p>Six gates. Each one closes in writing before the next stage opens.</p>
            </div>
            <div>
              <i aria-hidden="true"></i>
              <b>Written, not WhatsApp</b>
              <p>Every approval, revision and change request sits on the record.</p>
            </div>
            <div>
              <i aria-hidden="true"></i>
              <b>DFM before the tooling quote</b>
              <p>Manufacturing validation is a dedicated stage, not an afterthought.</p>
            </div>
            <div>
              <i aria-hidden="true"></i>
              <b>Built for Indian tooling</b>
              <p>Vendor review against real toolroom practice — not a European textbook.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
