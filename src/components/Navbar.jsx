import { useState } from 'react';
import { useTheme } from '../hooks/useTheme.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { NAV_IDS, LINKS } from '../data/portfolio.js';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(['home', ...NAV_IDS]);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border-soft backdrop-blur-[14px]"
      style={{ background: 'color-mix(in srgb, var(--bg) 82%, transparent)' }}
    >
      <nav className="relative mx-auto flex h-16 max-w-page items-center justify-between px-[26px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent font-mono text-[15px] font-semibold text-on-accent">
            RJ
          </span>
          <span className="font-mono text-[14.5px] font-medium text-text">
            reethu<span className="text-text-faint">.</span>dev
          </span>
        </a>

        {/* Nav links (inline on desktop, dropdown on mobile) */}
        <div
          className={`font-mono text-[13.5px] md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 ${
            open ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col items-start gap-0.5 border-b border-border bg-bg-elev px-[22px] pb-[18px] pt-2.5`}
        >
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`no-underline transition-colors after:mt-[3px] after:block after:h-0.5 after:bg-accent-strong after:transition-all after:duration-300 after:content-[''] ${
                active === id
                  ? 'text-accent-strong after:w-full'
                  : 'text-text-dim hover:text-text after:w-0'
              }`}
            >
              {id}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="min-w-[64px] cursor-pointer rounded-lg border border-border bg-transparent px-3 py-[7px] font-mono text-[12.5px] text-text-dim transition-colors hover:text-text"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-accent px-3.5 py-2 font-mono text-[12.5px] font-medium text-on-accent no-underline sm:inline-block"
          >
            Résumé ↓
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="cursor-pointer rounded-lg border border-border bg-transparent px-2.5 py-[7px] text-sm leading-none text-text md:hidden"
          >
            ≡
          </button>
        </div>
      </nav>
    </header>
  );
}
