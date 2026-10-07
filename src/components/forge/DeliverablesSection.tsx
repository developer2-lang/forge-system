import React from 'react';

interface DeliverableItem {
  title: string;
  description: string;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    title: 'Intelligence Summary',
    description:
      'Your vision, commercial objectives and positioning written back to you in our words — signed off before design starts.',
  },
  {
    title: 'Concept Presentation',
    description:
      'Three researched directions with sketches, 3D visualisation, CMF and written rationale.',
  },
  {
    title: 'Design Finalisation Pack',
    description:
      'Production-intent CAD, CMF specification and dimensioned 2D layout, against a 100%-complete checklist.',
  },
  {
    title: 'FORGE GATE Report',
    description:
      'DFM findings, costing against budget, vendor review and a risk matrix — then the CAD locks.',
  },
  {
    title: 'Prototype + Spec Sheet',
    description:
      'A 1:1 production-fidelity unit, painted to Pantone, with functional electronics where the product needs them.',
  },
  {
    title: 'Full Handoff Pack',
    description:
      'Locked CAD in every format, 2D with GD&T, final BOM, plus the vendor briefing we run ourselves.',
  },
];

export const DeliverablesSection: React.FC = () => {
  return (
    <section className="sec">
      <div className="grid-sec">
        <p className="marker">
          § 04
          <br />
          What you hold
        </p>
        <div>
          <h2 className="h2">Six gates. Six deliverables.</h2>
          <p className="lede deliverables-lede">
            Nothing is implied. At each gate a named document changes hands, is
            approved in writing, and triggers the next stage.
          </p>
          <div className="tiles tiles--3">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="tile">
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
