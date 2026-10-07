import { forwardRef } from 'react';
import type { ForgeStage } from '../../types/forge';
import ImageSlot from './ImageSlot';

interface StageCardProps {
  stage: ForgeStage;
  index: number;
  totalStages?: number;
  isDone?: boolean;
  isActive?: boolean;
}

export const StageCard = forwardRef<HTMLElement, StageCardProps>(
  ({ stage, index, totalStages = 6, isDone = false, isActive = false }, ref) => {
    const stageNumStr = ('0' + (index + 1)).slice(-2);
    const totalNumStr = ('0' + totalStages).slice(-2);

    const classNames = [
      'stage',
      isDone ? 'is-done' : '',
      isActive ? 'is-live' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <article
        ref={ref}
        className={classNames}
        id={`stage-${stage.stage_key}`}
        data-stage
      >
        <div className="stage__head">
          <div className="stage__key" aria-hidden="true">
            {stage.stage_letter}
          </div>
          <div className="stage__titles">
            <div className="stage__titlerow">
              <h3 className="stage__name">{stage.name}</h3>
              <p className="stage__meta">
                Stage {stageNumStr} of {totalNumStr} · Turnaround {stage.turnaround}
              </p>
            </div>
            <p className="stage__sub">{stage.tagline}</p>
            <p className="stage__one">{stage.description}</p>
          </div>
        </div>

        <div className="stage__cols">
          <div>
            <p className="colhead">Four layers</p>
            <div className="layers">
              {stage.layers.map((layer, lIndex) => (
                <dl key={lIndex} className="layer">
                  <dt>{layer.dt}</dt>
                  <dd>
                    <b>{layer.title}</b>
                    <p>{layer.body}</p>
                  </dd>
                </dl>
              ))}
            </div>
          </div>

          <div>
            <ImageSlot slot={stage.image_slot}>
              Image
              <br />
              {stage.name.replace(/\.$/, '')}
            </ImageSlot>
            <div className="stat">
              <b>{stage.stat_value}</b>
              <span>{stage.stat_label}</span>
            </div>
            <dl className="deliv">
              <dt>Deliverable</dt>
              <dd>{stage.deliverable}</dd>
            </dl>
          </div>
        </div>

        <dl className="gate">
          <dt>Stage gate →</dt>
          <dd>{stage.gate_text}</dd>
        </dl>
      </article>
    );
  }
);

StageCard.displayName = 'StageCard';

export default StageCard;
