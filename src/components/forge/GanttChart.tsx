import React, { useState, useRef } from 'react';
import type { ForgeStage } from '../../types/forge';
import { DEFAULT_FORGE_STAGES } from '../../data/forgeDefaults';
import smoothScrollTo from '../../lib/smoothScroll';

interface GanttItem {
  key: string;
  letter: string;
  name: string;
  duration: string;
  stageClass: string;
  variantClass: string;
}

const GANTT_ROWS: GanttItem[] = [
  {
    key: 'focus',
    letter: 'F',
    name: 'Focus',
    duration: '2–4 d',
    stageClass: 'gantt__bar--stage-1',
    variantClass: 'gantt__bar--tight',
  },
  {
    key: 'originate',
    letter: 'O',
    name: 'Originate',
    duration: '4–6 d',
    stageClass: 'gantt__bar--stage-2',
    variantClass: 'gantt__bar--tight',
  },
  {
    key: 'refine',
    letter: 'R',
    name: 'Refine',
    duration: '5–8 d',
    stageClass: 'gantt__bar--stage-3',
    variantClass: '',
  },
  {
    key: 'gate',
    letter: 'G',
    name: 'Gate',
    duration: '3–5 d',
    stageClass: 'gantt__bar--stage-4',
    variantClass: 'gantt__bar--tight',
  },
  {
    key: 'engineer-a',
    letter: 'E',
    name: 'Engineer A',
    duration: '7–12 d',
    stageClass: 'gantt__bar--stage-5',
    variantClass: '',
  },
  {
    key: 'engineer-b',
    letter: 'E',
    name: 'Engineer B',
    duration: '3–4 d',
    stageClass: 'gantt__bar--stage-6',
    variantClass: 'gantt__bar--end',
  },
];

interface GanttChartProps {
  stages?: ForgeStage[];
}

export const GanttChart: React.FC<GanttChartProps> = ({
  stages = DEFAULT_FORGE_STAGES,
}) => {
  // 1. State tracking which stage is currently selected
  const [selectedStageKey, setSelectedStageKey] = useState<string | null>(null);

  // 2. Ref to anchor the smooth scrolling target
  const detailsRef = useRef<HTMLDivElement | null>(null);

  // 3. Find the selected stage object
  const activeStage = stages.find(
    (s) => s.stage_key === selectedStageKey
  ) || DEFAULT_FORGE_STAGES.find((s) => s.stage_key === selectedStageKey);

  // 4. Click handler with deselect and smooth scrolling
  const handleRowClick = (key: string) => {
    if (selectedStageKey === key) {
      // Deselect if already selected
      setSelectedStageKey(null);
      return;
    }

    setSelectedStageKey(key);

    // Wait one animation frame for React to mount/expand the details element before scrolling
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    });
  };

  const handleJumpToSection2 = (stageKey: string) => {
    smoothScrollTo(`#stage-${stageKey}`, { offset: 40, duration: 900 });
  };

  return (
    <div className="gantt">
      {GANTT_ROWS.map((row) => {
        const isSelected = selectedStageKey === row.key;

        return (
          <div
            key={row.key}
            role="button"
            tabIndex={0}
            aria-expanded={isSelected}
            onClick={() => handleRowClick(row.key)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRowClick(row.key);
              }
            }}
            className={`gantt__row ${isSelected ? 'is-selected' : ''}`}
            data-gantt
          >
            <p className="gantt__label">
              <b>{row.letter}</b>
              {row.name}
            </p>
            <div className="gantt__track">
              <div
                className={`gantt__bar ${row.variantClass} ${row.stageClass}`.trim()}
              >
                <span>{row.duration}</span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="gantt__ruler">
        <span></span>
        <ul>
          <li>DAY 1</li>
          <li>DAY 10</li>
          <li>DAY 20</li>
          <li>DAY 30</li>
          <li>DAY 39</li>
        </ul>
      </div>

      {/* Expanding Anchored Details Section */}
      <div ref={detailsRef} className="gantt__details-anchor">
        {activeStage && (
          <div
            key={activeStage.id || activeStage.stage_key}
            className="gantt__details"
          >
            <div className="gantt__details-header">
              <div className="gantt__details-title">
                <span className="gantt__details-badge">
                  {activeStage.stage_letter}
                </span>
                <span className="gantt__details-name">{activeStage.name}</span>
                <span className="gantt__details-turnaround">
                  {activeStage.turnaround}
                </span>
              </div>
              <button
                type="button"
                className="gantt__details-close"
                onClick={() => setSelectedStageKey(null)}
                aria-label="Close stage details"
              >
                ✕ Close
              </button>
            </div>

            <p className="gantt__details-tagline">{activeStage.tagline}</p>
            <p className="gantt__details-desc">{activeStage.description}</p>

            {activeStage.layers && activeStage.layers.length > 0 && (
              <div className="gantt__details-grid">
                {activeStage.layers.map((layer, idx) => (
                  <dl key={idx} className="gantt__details-layer">
                    <dt>{layer.dt}</dt>
                    <dd>
                      <b>{layer.title}</b>
                      <p>{layer.body}</p>
                    </dd>
                  </dl>
                ))}
              </div>
            )}

            <div className="gantt__details-footer">
              <div className="gantt__details-deliverable">
                Deliverable: <b>{activeStage.deliverable}</b>
              </div>
              <button
                type="button"
                className="gantt__details-jump"
                onClick={() => handleJumpToSection2(activeStage.stage_key)}
              >
                View Stage Gate & Full Specifications →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GanttChart;
