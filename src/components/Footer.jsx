import { LINKS } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-[18px] gap-y-2.5 px-[26px] py-6">
        <span className="font-mono text-[12.5px] text-text-faint">© 2026 Reethu Justin · built with React</span>
        <div className="flex gap-[18px] font-mono text-[12.5px]">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-dim no-underline hover:text-text">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim no-underline hover:text-text">
            LinkedIn
          </a>
          <a href="#home" className="text-text-dim no-underline hover:text-text">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
