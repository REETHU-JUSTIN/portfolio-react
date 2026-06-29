import Section, { Eyebrow } from './Section.jsx';
import { PROJECTS, LINKS } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section id="projects" className="border-t border-border-soft py-14">
      <Eyebrow>04 / projects</Eyebrow>
      <h2 className="m-0 mb-[30px] text-[clamp(26px,3.4vw,34px)] font-bold tracking-[-0.8px] text-text">
        Selected work
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div key={p.title} className="flex flex-col rounded-[14px] border border-border bg-surface p-6">
            <div className="mb-3.5 flex items-start justify-between">
              <div className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-accent-soft font-mono text-[16px] font-semibold text-accent-strong">
                {p.monogram}
              </div>
              <span className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-text-faint">
                {p.tag}
              </span>
            </div>
            <h3 className="m-0 mb-2 text-[18px] font-semibold text-text">{p.title}</h3>
            <p className="m-0 mb-4 flex-1 text-[14px] leading-[1.6] text-text-dim" style={{ textWrap: 'pretty' }}>
              {p.description}
            </p>
            <div className="flex flex-wrap gap-[7px]">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface-2 px-[9px] py-1 font-mono text-[11.5px] text-text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 border-t border-border-soft pt-4 font-mono text-[12.5px]">
              {p.code ? (
                <>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dim no-underline transition-colors hover:text-accent-strong"
                  >
                    Code ↗
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dim no-underline transition-colors hover:text-accent-strong"
                    >
                      Live ↗
                    </a>
                  )}
                </>
              ) : (
                <span className="text-text-faint">{p.note || 'Private project'}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="m-0 mt-[18px] font-mono text-[12.5px] text-text-faint">
        // personal projects are open-source on{' '}
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-accent-strong no-underline">
          GitHub ↗
        </a>
      </p>
    </Section>
  );
}
