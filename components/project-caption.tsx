export function ProjectCaption({
  title,
  tags,
  className,
}: {
  title?: string;
  tags?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-normal text-foreground sm:text-xl">
          {title}
        </h3>
      )}

      {tags && (
        <p className="mt-3 text-sm text-muted-foreground">{tags}</p>
      )}

      <span className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-[#FF5D64]">
        <span>Read more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}
