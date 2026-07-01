import { LINKS } from '../data/portfolio.js';

/** Syntax-highlighted line helper colors (fixed dark palette, both themes). */
const C = {
  punc: 'text-[#5b6b88]',
  key: 'text-[#f0b86e]',
  str: 'text-[#7ee0a8]',
  kw: 'text-[#c792ea]',
  id: 'text-[#82aaff]',
  bool: 'text-[#f78c6c]',
};

function Str({ children }) {
  return <span className={C.str}>'{children}'</span>;
}

export default function Hero() {
  return (
    <section id="home" className="pb-24 pt-[86px]">
      <div className="grid grid-cols-1 items-center gap-[54px] md:grid-cols-[1.05fr_0.95fr]">
        {/* ---- Left: intro ---- */}
        <div className="order-2 md:order-1">
          <div className="mb-[22px] inline-flex items-center gap-2 font-mono text-[13px] text-good">
            <span className="h-2 w-2 animate-pulse2 rounded-full bg-good" />
            Open to opportunities
          </div>
          <div className="mb-3 font-mono text-[14px] text-accent-strong">// software engineer</div>
          <h1 className="m-0 mb-[18px] text-[clamp(40px,6vw,60px)] font-bold leading-[1.04] tracking-[-1.4px] text-text">
            Reethu Justin
          </h1>
          <p className="m-0 mb-3.5 max-w-[30ch] text-[clamp(18px,2.4vw,22px)] leading-[1.45] text-text-dim">
            I build <span className="font-semibold text-text">React.js</span> interfaces and test the platforms behind
            them.
          </p>
          <p className="m-0 mb-[30px] max-w-[46ch] text-[15px] leading-[1.6] text-text-faint" style={{ textWrap: 'pretty' }}>
            3 years across frontend development and manual QA for enterprise web applications — building responsive,
            accessible UIs and validating quality across cross-functional teams.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-[9px] bg-accent px-5 py-3 font-mono text-[13.5px] font-medium text-on-accent no-underline"
            >
              View projects
            </a>
<a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-3 font-mono text-[13.5px] text-text-dim no-underline transition-colors hover:text-text"
            >
              GitHub ↗
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-3 font-mono text-[13.5px] text-text-dim no-underline transition-colors hover:text-text"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ---- Right: terminal (fixed dark palette in both themes) ---- */}
        <div className="order-1 overflow-hidden rounded-[14px] border border-[#1f2f4d] bg-[#0b1222] font-mono shadow-[0_30px_70px_-28px_rgba(0,0,0,0.6)] md:order-2">
          <div className="flex items-center gap-[7px] border-b border-[#1f2f4d] bg-[#0f1830] px-4 py-3">
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
            <span className="ml-2.5 text-[12px] text-[#5b6b88]">reethu@portfolio — zsh</span>
          </div>
          <div className="px-[22px] pb-6 pt-5 text-[13px] leading-[1.85] text-[#c6d2e6]">
            <div>
              <span className={C.punc}>$</span> <span className={C.str}>cat</span>{' '}
              <span className="text-[#c6d2e6]">developer.js</span>
            </div>
            <div className="mt-2">
              <span className={C.kw}>const</span> <span className={C.id}>developer</span> <span className={C.punc}>= {'{'}</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>name</span>
              <span className={C.punc}>: </span>
              <Str>Reethu Justin</Str>
              <span className={C.punc}>,</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>role</span>
              <span className={C.punc}>: </span>
              <Str>Software Engineer</Str>
              <span className={C.punc}>,</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>stack</span>
              <span className={C.punc}>: [</span>
              <Str>React.js</Str>
              <span className={C.punc}>, </span>
              <Str>JavaScript</Str>
              <span className={C.punc}>, </span>
              <Str>Node.js</Str>
              <span className={C.punc}>],</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>focus</span>
              <span className={C.punc}>: [</span>
              <Str>Frontend UI</Str>
              <span className={C.punc}>, </span>
              <Str>Manual QA</Str>
              <span className={C.punc}>],</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>experience</span>
              <span className={C.punc}>: </span>
              <Str>3 years</Str>
              <span className={C.punc}>,</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>location</span>
              <span className={C.punc}>: </span>
              <Str>Kochi, India</Str>
              <span className={C.punc}>,</span>
            </div>
            <div className="pl-[18px]">
              <span className={C.key}>openToWork</span>
              <span className={C.punc}>: </span>
              <span className={C.bool}>true</span>
              <span className={C.punc}>,</span>
            </div>
            <div>
              <span className={C.punc}>{'}'};</span>
            </div>
            <div className="mt-2.5">
              <span className={C.punc}>$</span>{' '}
              <span className="inline-block h-4 w-[9px] animate-blink bg-[#7ee0a8] align-[-3px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
