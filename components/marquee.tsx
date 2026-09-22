const MARQUEE_ITEMS = [
  "SAAS Platform",
  "Blockchain",
  "Web & Mobile App",
  "Motion Design",
  "UI/UX",
  "Branding",
  "Presentation",
  "Social Media & Ads",
];

export function Marquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {MARQUEE_ITEMS.map((item, index) => (
              <span
                key={index}
                className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-medium tracking-wide text-foreground sm:text-base"
              >
                {item}
                <span className="h-1.5 w-1.5 rotate-45 bg-muted-foreground" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
