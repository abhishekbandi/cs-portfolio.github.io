import Link from "next/link";
import { HoverLift } from "@/components/hover-lift";

export function CtaButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <HoverLift className={`inline-block ${className ?? ""}`}>
      <Link
        href={href}
        className="group flex items-center gap-3 rounded-full bg-neutral-800 py-1.5 pl-7 pr-1.5 text-white transition-colors hover:bg-neutral-700"
      >
        <span className="text-base font-medium">{label}</span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF5D64] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5D64]/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </span>
      </Link>
    </HoverLift>
  );
}
