import Section, { Eyebrow } from './Section.jsx';
import { EXPERIENCE } from '../data/portfolio.js';

export default function Experience() {
  return (
    <Section id="experience" className="border-t border-border-soft py-14">
      <Eyebrow>03 / experience</Eyebrow>
      <h2 className="m-0 mb-[34px] text-[clamp(26px,3.4vw,34px)] font-bold tracking-[-0.8px] text-text">
        Where I've worked
      </h2>
      <div className="flex flex-col gap-3.5">
        {EXPERIENCE.map((job) => (
          <div key={job.company} className="rounded-[14px] border border-border bg-surface px-[26px] pb-6 pt-[26px]">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3 className="m-0 text-[19px] font-semibold text-text">
                {job.role} <span className="font-normal text-text-faint">— {job.company}</span>
              </h3>
              <span className="whitespace-nowrap font-mono text-[13px] text-accent-strong">{job.period}</span>
            </div>
            <div className="mb-4 font-mono text-[12.5px] text-text-faint">{job.location}</div>
            <ul className="m-0 flex list-disc flex-col gap-[9px] pl-5 text-[14.5px] leading-[1.65] text-text-dim">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
