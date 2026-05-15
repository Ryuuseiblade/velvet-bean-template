import { AnchorLink } from "@/components/ui/anchor-link";
import { siteConfig } from "@/config";
import { getVisibleNavLinks } from "@/lib/navigation";

const { brand, footer } = siteConfig;
const navLinks = getVisibleNavLinks();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-soft">
      <div className="section-divider" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gold/5 to-transparent"
      />
      <div className="section-shell relative py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-12 sm:gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <p className="font-display text-[1.65rem] tracking-[-0.04em] text-white sm:text-[1.85rem] md:text-3xl">
              {brand.name}
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/42 sm:mt-5">{footer.tagline}</p>
          </div>
          <nav aria-label="Footer" className="lg:pt-1">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <AnchorLink href={l.href} underline className="group link-footer">
                    {l.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/32 sm:text-[11px]">
              {footer.socialHeading}
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:gap-8">
              {footer.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group link-footer"
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
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-[12px] text-white/32 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-10 md:pt-12">
          <p className="tracking-[-0.01em]">
            © {year} {brand.legalName}. {footer.copyrightRights}
          </p>
          <p className="text-white/28">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
