import Section from "@/components/layout/Section";
import { Icon } from "@iconify/react";

const backgroundItems = [
  {
    title: "Full-stack JavaScript Developer",
    place: "Chas Academy",
    period: "2024 - Present",
    description:
      "Focused on modern web development with React, Next.js and TypeScript, working in team-based projects.",
    icon: "solar:code-bold-duotone",
  },
  {
    title: "Full Stack Software Development Diploma",
    place: "Code Institute",
    period: "2022 - 2023",
    description:
      "Hands-on training in full-stack development, building real-world applications using modern technologies.",
    icon: "solar:book-bold-duotone",
  },
  {
    title: "Previous professional experience",
    place: "Banking & Hospitality",
    period: "",
    description:
      "Developed strong communication, teamwork, and customer-focused problem solving in fast-paced environments.",
    icon: "solar:users-group-rounded-bold-duotone",
  },
];

export default function BackgroundSection() {
  return (
    <Section id="background" className="bg-muted-soft/40">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Background
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Experience & education
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          A combination of technical training and real-world experience that
          shapes how I approach development and collaboration.
        </p>

        <div className="mt-10 space-y-8">
          {backgroundItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <Icon
                icon={item.icon}
                className="mt-0.5 h-5 w-5 shrink-0 text-foreground/80"
              />

              <div>
                <p className="font-medium text-foreground">
                  {item.title}{" "}
                  <span className="text-muted font-normal">— {item.place}</span>
                </p>

                {item.period && (
                  <p className="text-sm text-muted">{item.period}</p>
                )}

                <p className="mt-2 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
