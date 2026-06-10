"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { contact, navLinks, profile } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";

const scrollOffset = 128;

export default function Navbar() {
  const navGroupRef = useRef(null);
  const linkRefs = useRef(new Map());
  const [activeHref, setActiveHref] = useState("");

  const setLinkRef = useCallback(
    (href) => (node) => {
      if (node) {
        linkRefs.current.set(href, node);
      } else {
        linkRefs.current.delete(href);
      }
    },
    [],
  );

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollPoint = window.scrollY + scrollOffset;
        const pageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 8;
        let nextHref = "";

        for (const link of navLinks) {
          const section = document.querySelector(link.href);

          if (section && section.offsetTop <= scrollPoint) {
            nextHref = link.href;
          }
        }

        if (pageBottom) {
          nextHref = navLinks[navLinks.length - 1]?.href ?? nextHref;
        }

        setActiveHref((current) =>
          current === nextHref ? current : nextHref,
        );
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[rgba(15,35,58,0.08)] bg-white/85 px-4 backdrop-blur-xl md:px-8">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 text-[var(--deep-blue)]"
          aria-label={`${profile.shortName} home`}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-[var(--deep-blue)] font-heading text-sm font-black text-white">
            {profile.initials}
          </span>
          <span className="hidden truncate font-heading text-sm font-bold uppercase text-[var(--deep-blue)] sm:block">
            {profile.shortName}
          </span>
        </a>

        <div
          ref={navGroupRef}
          className="relative hidden items-center gap-1 rounded-[8px] bg-[rgba(248,250,252,0.7)] p-1 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
                ref={setLinkRef(link.href)}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`relative z-10 rounded-[8px] px-3 py-2 text-sm font-semibold transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "scale-110 text-[var(--deep-blue)]"
                    : "scale-100 text-[rgba(15,35,58,0.58)] hover:text-[var(--deep-blue)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-[var(--deep-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--teal)]"
        >
          <Icon name="github" className="size-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
