import React from 'react';
import type { ForgeStage } from '../../types/forge';

interface SpineProgressProps {
  activeIndex: number;
  progressPercent: string;
  stages: ForgeStage[];
}

export const SpineProgress: React.FC<SpineProgressProps> = ({
  activeIndex,
  progressPercent,
  stages,
}) => {
  const currentStage = stages[activeIndex] || stages[0];
  const stageNumber = ('0' + (activeIndex + 1)).slice(-2);
  const cleanName = currentStage?.name.replace(/\.$/, '') || 'Focus';

  return (
    <div className="spine">
      <div className="spine__inner" aria-hidden="true">
        <div className="spine__track">
          <div
            className="spine__fill"
            data-spine-fill
            style={{ height: progressPercent }}
          ></div>
        </div>
        <div className="spine__labels">
          {stages.map((stage, i) => (
            <p
              key={stage.id || stage.stage_key}
              className={`spine__label ${i <= activeIndex ? 'is-done' : ''}`}
              data-spine-label
            >
              <i className="spine__dot" aria-hidden="true"></i>
              {stage.name.replace(/\.$/, '')}
            </p>
          ))}
        </div>
      </div>
      <dl className="spine__now">
        <dt>Now reading</dt>
        <dd data-spine-now>
          {stageNumber} · {cleanName}
        </dd>
      </dl>
    </div>
  );
};

export default SpineProgress;
