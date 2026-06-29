import Section, { Eyebrow } from './Section.jsx';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <Section id="certifications" className="border-t border-border-soft py-14">
      <Eyebrow>05 / certifications &amp; education</Eyebrow>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Certifications */}
        <div className="rounded-[13px] border border-border bg-surface p-[22px]">
          <h3 className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-accent-strong">// certifications</h3>
          <div className="flex flex-col gap-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name}>
                <div className="text-[14.5px] font-semibold text-text">{c.name}</div>
                <div className="text-[13px] text-text-faint">{c.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="rounded-[13px] border border-border bg-surface p-[22px]">
          <h3 className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-accent-strong">// awards</h3>
          <div className="text-[14.5px] font-semibold text-text">★ Rising Star Award, 2024</div>
          <div className="mt-0.5 text-[13px] text-text-faint">iLearningEngines</div>
        </div>

        {/* Education */}
        <div className="rounded-[13px] border border-border bg-surface p-[22px]">
          <h3 className="m-0 mb-3.5 font-mono text-[13px] font-semibold text-accent-strong">// education</h3>
          <div className="text-[14.5px] font-semibold text-text">{EDUCATION.degree}</div>
          <div className="mt-0.5 text-[13px] text-text-faint">{EDUCATION.school}</div>
          <div className="mt-2 font-mono text-[12px] text-text-faint">{EDUCATION.detail}</div>
        </div>
      </div>
    </Section>
  );
}
