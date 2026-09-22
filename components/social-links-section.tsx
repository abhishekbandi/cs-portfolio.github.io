import Image from "next/image";
import { HoverLift } from "@/components/hover-lift";
import { ScrollReveal } from "@/components/scroll-reveal";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: "/work/instagram.svg" },
  { name: "LinkedIn", href: "#", icon: "/work/linked.svg" },
  { name: "Behance", href: "#", icon: "/work/behance.svg" },
  { name: "Dribbble", href: "#", icon: "/work/dribble.svg" },
  { name: "Pinterest", href: "#", icon: "/work/pintrest.svg" },
  { name: "YouTube", href: "#", icon: "/work/youtube.svg" },
];

export function SocialLinksSection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <ScrollReveal className="flex flex-col items-center">
          <p className="max-w-xl text-lg text-muted-foreground">
            Feel free to reach me across different social platforms, always
            open to connect, collaborate, and explore partnerships.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <HoverLift key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[14px]"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </a>
              </HoverLift>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
