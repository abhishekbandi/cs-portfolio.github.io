export function ProjectMetaSection({
  client,
  year,
  category,
  services,
}: {
  client: string;
  year: string;
  category: string;
  services: string;
}) {
  const items = [
    { label: "Client", value: client },
    { label: "Year", value: year },
    { label: "Category", value: category },
    { label: "Services", value: services },
  ];

  return (
    <section className="px-3 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col gap-2 ${
              i > 0 ? "sm:border-l sm:border-border sm:pl-10" : ""
            }`}
          >
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {item.label}
            </span>
            <span className="text-lg font-medium text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
