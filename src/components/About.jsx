import Section, { Eyebrow } from './Section.jsx';
import { STATS } from '../data/portfolio.js';

export default function About() {
  return (
    <Section id="about" className="border-t border-border-soft py-14">
      <Eyebrow>01 / about</Eyebrow>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="m-0 mb-[18px] text-[clamp(26px,3.4vw,34px)] font-bold tracking-[-0.8px] text-text">
            Frontend engineer with a QA mindset.
          </h2>
          <p className="m-0 mb-3.5 text-[16px] leading-[1.7] text-text-dim" style={{ textWrap: 'pretty' }}>
            I build responsive, accessible UIs with React.js, JavaScript (ES6+), HTML5 and CSS3 — and I test the systems
            they live in. Currently I'm validating <strong className="font-semibold text-text">INVOQ</strong>, a DNCR
            (Do Not Call Registry) compliance and administration platform.
          </p>
          <p className="m-0 text-[16px] leading-[1.7] text-text-dim" style={{ textWrap: 'pretty' }}>
            My work spans REST API integration, role-based access validation, test case design and full defect-lifecycle
            management — shipping and verifying quality software alongside cross-functional teams.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface px-[18px] py-5">
              <div className="font-mono text-[30px] font-semibold leading-none text-accent-strong">
                {s.value}
                {s.unit && <span className="text-[18px]">{s.unit}</span>}
              </div>
              <div className="mt-2 text-[13px] text-text-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
