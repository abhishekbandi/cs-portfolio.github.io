import { Image } from "@/components/image";
import { CtaButton } from "@/components/cta-button";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-3 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <Image
            src="/logomark.svg"
            alt="Logo"
            width={160}
            height={160}
            className="h-16 w-16 invert dark:invert-0 sm:h-20 sm:w-20"
          />

          <CtaButton href="/contact" label="Let’s talk" />
        </div>

        <div className="flex flex-col gap-2 lg:items-end">
          <a
            href="mailto:cs@chandrashekhar.design"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            cs@chandrashekhar.design
          </a>
          <a
            href="tel:+919304898229"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            +91 93048 98229
          </a>
        </div>
      </div>
    </footer>
  );
}
