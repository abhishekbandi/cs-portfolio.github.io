import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { EDUCATION, JOBS, type Education, type Job } from "@/lib/career";

function EducationEntry({ education }: { education: Education }) {
  return (
    <ScrollReveal className="flex gap-6">
      <Image
        src={education.logo.src}
        alt={`${education.school} logo`}
        width={education.logo.width}
        height={education.logo.height}
        className="h-auto w-24 shrink-0 object-contain"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-base text-foreground">{education.school}</h4>
        <p className="text-base text-foreground">{education.degree}</p>
        <p className="text-sm text-muted-foreground">
          {education.period} · {education.location}
        </p>
      </div>
    </ScrollReveal>
  );
}

function JobEntry({ job }: { job: Job }) {
  return (
    <ScrollReveal className="flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-lg font-semibold text-foreground">{job.company}</h4>
        <p className="text-sm text-muted-foreground">
          {job.period} · {job.location}
        </p>
      </div>
      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="text-base font-bold text-[#1b1bea] transition-opacity hover:opacity-80"
      >
        {job.url}
      </a>
      <p className="text-sm text-muted-foreground">{job.role}</p>

      {job.bullets.length > 0 && (
        <ul className="mt-2 flex list-disc flex-col gap-3 pl-5 text-base text-foreground">
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </ScrollReveal>
  );
}

export function CareerSection() {
  return (
    <section className="px-3 pt-32 pb-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:items-start md:gap-20">
        <div className="flex flex-col items-start gap-10 md:sticky md:top-24 md:w-72 md:shrink-0">
          <ScrollReveal className="flex flex-col items-start gap-6">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
              Career
            </h2>
            <p className="text-base text-muted-foreground">
              My expertise ensures every project is executed with precision
              and creativity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <CtaButton href="/cv.pdf" label="View CV Pdf" />
          </ScrollReveal>
        </div>

        <div className="flex flex-1 flex-col gap-14">
          <ScrollReveal>
            <h3 className="text-2xl font-medium sm:text-3xl">
              User Experience Designer
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
              <span className="font-bold" style={{ color: "#FF5D64" }}>
                @ Impelsys
              </span>{" "}
              India Pvt Ltd, Bangalore, India
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I am Chandrashekhar Singh, a highly skilled and experienced
              Senior UI/UX Designer with 10 years of experience designing
              intuitive and engaging digital interfaces for a range of
              industries. Proven ability to lead design teams, collaborate
              with cross-functional stakeholders, and deliver exceptional
              results that drive user engagement and business success.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-10">
            <ScrollReveal>
              <h3 className="text-xl font-medium">My Experiences</h3>
            </ScrollReveal>
            {JOBS.map((job) => (
              <JobEntry key={job.company} job={job} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <h3 className="text-xl font-medium">Education & Certification</h3>
            </ScrollReveal>
            {EDUCATION.map((education) => (
              <EducationEntry key={education.school} education={education} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
