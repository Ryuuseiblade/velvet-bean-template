import Link from "next/link";
import { siteContent } from "@/data/site-content";

const { brand, navigation, footer } = siteContent;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-ink-soft">
      <div className="section-shell py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-sm">
            <p className="font-display text-[1.75rem] font-semibold tracking-[-0.04em] text-white md:text-3xl">
              {brand.name}
            </p>
            <p className="mt-5 text-[15px] leading-[1.65] text-white/45">{footer.tagline}</p>
          </div>
          <nav aria-label="Footer" className="lg:pt-1">
            <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
              {navigation.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    prefetch={l.href.startsWith("#") ? false : undefined}
                    className="group inline-flex py-1 text-[14px] font-medium tracking-[-0.01em] text-white/45 transition duration-300 ease-out-expo hover:text-white"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
              {footer.socialHeading}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-8">
              {footer.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex text-[14px] font-medium text-white/45 transition duration-300 hover:text-white"
                >
                  <span className="relative">
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white/40 transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-10 text-[12px] text-white/35 md:flex-row md:items-center md:justify-between md:pt-12">
          <p className="tracking-[-0.01em]">
            © {year} {brand.legalName}. {footer.copyrightRights}
          </p>
          <p className="text-white/30">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
