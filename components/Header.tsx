"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { LogoMark } from "@/components/Logo";
import { ButtonAnchor, ButtonLink } from "@/components/ui";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-brand-800 sm:text-lg">
              {site.shortName}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks
            .filter((link) => link.href !== "/contact")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-800"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          <ButtonLink href="/contact" variant="secondary" className="ml-2 px-3 py-2">
            Contact
          </ButtonLink>
          <ButtonAnchor href={site.phoneHref} variant="primary" className="px-3 py-2">
            Call
          </ButtonAnchor>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-50 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id={panelId}
        className={`grid overflow-hidden border-slate-200 bg-white transition-[grid-template-rows,opacity,border-color] duration-300 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] border-t opacity-100"
            : "grid-rows-[0fr] border-t border-transparent opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0">
          <nav className="px-4 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    tabIndex={open ? undefined : -1}
                    className={`block rounded-xl px-3 py-2.5 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-800"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex gap-2">
                <ButtonAnchor
                  href={site.phoneHref}
                  variant="primary"
                  className="flex-1"
                  tabIndex={open ? undefined : -1}
                >
                  Call
                </ButtonAnchor>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  className="flex-1"
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
