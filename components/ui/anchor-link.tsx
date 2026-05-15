import Link from "next/link";
import { cn } from "@/lib/cn";
import { shouldPrefetchHref } from "@/lib/links";

type AnchorLinkProps = React.ComponentProps<typeof Link> & {
  underline?: boolean;
};

export function AnchorLink({
  href,
  className,
  underline = false,
  children,
  ...props
}: AnchorLinkProps) {
  const hrefString = typeof href === "string" ? href : (href.pathname ?? "");

  return (
    <Link
      href={href}
      prefetch={shouldPrefetchHref(hrefString) ? undefined : false}
      className={cn(
        underline &&
          "group relative transition duration-300 ease-out-expo hover:text-white",
        className,
      )}
      {...props}
    >
      {underline ? (
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-bright transition-transform duration-400 ease-out-expo group-hover:scale-x-100" />
        </span>
      ) : (
        children
      )}
    </Link>
  );
}
