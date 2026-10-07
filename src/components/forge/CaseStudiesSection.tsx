import React from 'react';
import type { ForgeCaseStudy } from '../../types/forge';
import ImageSlot from './ImageSlot';
import FounderQuote from './FounderQuote';

interface CaseStudiesSectionProps {
  caseStudies: ForgeCaseStudy[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  caseStudies,
}) => {
  return (
    <section className="sec">
      <div className="grid-sec">
        <p className="marker">
          § 05
          <br />
          Proof
        </p>
        <div>
          <div className="sechead">
            <h2 className="h2">The system, shipped.</h2>
            <a className="btn btn--pill-dark" href="/work">
              See our work
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 5.5h14M11 1l4.5 4.5L11 10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </a>
          </div>

          <div className="tiles tiles--2">
            {caseStudies.map((study, idx) => (
              <a
                key={study.id || study.slug}
                className="case"
                href={`/work/${study.slug}`}
              >
                <ImageSlot slot={`Case ${idx + 1} — hero render`}>
                  Case image
                </ImageSlot>
                <div className="case__row">
                  <p className="case__name">{study.title}</p>
                  <p className="case__stages">{study.stages_label}</p>
                </div>
                <p>{study.summary}</p>
              </a>
            ))}
          </div>

          <FounderQuote />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
