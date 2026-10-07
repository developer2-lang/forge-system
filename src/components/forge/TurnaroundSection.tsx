import React from 'react';
import GanttChart from './GanttChart';
import type { ForgeStat, ForgeStage } from '../../types/forge';
import { DEFAULT_FORGE_STATS } from '../../data/forgeDefaults';

interface TurnaroundSectionProps {
  stats?: ForgeStat[];
  stages?: ForgeStage[];
}

export const TurnaroundSection: React.FC<TurnaroundSectionProps> = ({
  stats = DEFAULT_FORGE_STATS,
  stages,
}) => {
  return (
    <section className="sec sec--dark on-dark" id="turnaround">
      <div className="grid-sec">
        <p className="marker">
          § 03
          <br />
          Turnaround
        </p>
        <div>
          <h2 className="h2">24 to 39 days, end to end.</h2>
          <p className="lede turnaround-lede">
            Each stage carries a published turnaround. The clock on a stage
            starts when the previous gate closes — so the only variable in the
            schedule is approval speed.
          </p>

          <GanttChart stages={stages} />

          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.id || stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default TurnaroundSection;
