import Section from './Section.jsx';
import { LINKS } from '../data/portfolio.js';

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-border-soft pb-[72px] pt-16">
      <div className="rounded-[18px] border border-border bg-surface px-10 py-12 text-center">
        <div className="mb-3.5 font-mono text-[13px] text-accent-strong">06 / contact</div>
        <h2 className="m-0 mb-3.5 text-[clamp(28px,4vw,40px)] font-bold tracking-[-1px] text-text">
          Let's build something.
        </h2>
        <p className="mx-auto mb-[30px] max-w-[46ch] text-[16px] leading-[1.6] text-text-dim" style={{ textWrap: 'pretty' }}>
          I'm open to frontend and software-engineering roles. The fastest way to reach me is email or LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${LINKS.email}`}
            className="rounded-[9px] bg-accent px-[22px] py-[13px] font-mono text-[13.5px] font-medium text-on-accent no-underline"
          >
            Email me ↗
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] border border-border px-[22px] py-[13px] font-mono text-[13.5px] text-text no-underline"
          >
            LinkedIn ↗
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] border border-border px-[22px] py-[13px] font-mono text-[13.5px] text-text no-underline"
          >
            GitHub ↗
          </a>
        </div>
        <div className="mt-[22px] font-mono text-[12.5px] text-text-faint">
          {LINKS.phone} · {LINKS.location}
        </div>
      </div>
    </Section>
  );
}
