import Section, { Eyebrow } from './Section.jsx';
import { SKILLS } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-border-soft py-14">
      <Eyebrow>02 / skills</Eyebrow>
      <h2 className="m-0 mb-[30px] text-[clamp(26px,3.4vw,34px)] font-bold tracking-[-0.8px] text-text">
        Technical toolkit
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((cat) => (
          <div key={cat.group} className="rounded-[13px] border border-border bg-surface p-[22px]">
            <h3 className="m-0 mb-3.5 font-mono text-[13px] font-semibold tracking-[0.4px] text-accent-strong">
              // {cat.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-[7px] border border-border-soft bg-surface-2 px-[11px] py-1.5 font-mono text-[12.5px] text-text-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
