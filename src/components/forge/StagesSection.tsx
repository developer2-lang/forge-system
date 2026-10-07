import React, { useMemo } from 'react';
import type { ForgeStage } from '../../types/forge';
import SpineProgress from './SpineProgress';
import StageCard from './StageCard';
import useScrollSpine from '../../hooks/useScrollSpine';

interface StagesSectionProps {
  stages: ForgeStage[];
}

export const StagesSection: React.FC<StagesSectionProps> = ({ stages }) => {
  // Create stable ref for each stage
  const stageRefs = useMemo(
    () => stages.map(() => React.createRef<HTMLElement>()),
    [stages]
  );

  const { activeIndex, progressPercent } = useScrollSpine({
    stagesRefs: stageRefs,
  });

  return (
    <section className="sec" id="flow" data-flow>
      <div className="grid-sec">
        <div>
          <p className="marker marker--stage">
            § 02
            <br />
            The system
          </p>
          <SpineProgress
            activeIndex={activeIndex}
            progressPercent={progressPercent}
            stages={stages}
          />
        </div>

        <div>
          <h2 className="h2">
            Six stages.
            <br />
            Each gate-verified.
          </h2>
          <p className="lede stages-lede">
            Every stage runs in four layers, carries a published turnaround, and
            closes on a named deliverable and a written gate.
          </p>

          {stages.map((stage, index) => (
            <StageCard
              key={stage.id || stage.stage_key}
              ref={stageRefs[index]}
              stage={stage}
              index={index}
              totalStages={stages.length}
              isDone={index <= activeIndex}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
