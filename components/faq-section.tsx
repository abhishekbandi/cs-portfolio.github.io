"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FAQ_ITEMS } from "@/lib/faq";

function FaqEntry({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-medium text-foreground">
          {question}
        </span>
        <span
          className={`shrink-0 text-2xl leading-none text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-base text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <ScrollReveal>
          <h2 className="text-4xl font-black tracking-tight uppercase text-center sm:text-5xl">
            FAQ
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 w-full max-w-3xl">
          {FAQ_ITEMS.map((item) => (
            <FaqEntry
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
