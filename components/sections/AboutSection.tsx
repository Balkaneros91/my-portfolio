import Section from "@/components/layout/Section";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          About
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          My background
        </h2>

        <div className="mt-6 space-y-6 text-base leading-8 text-muted">
          {/* Intro */}
          <div className="space-y-4">
            <p>
              I&apos;m a junior full-stack developer focused on modern web
              development, with hands-on experience from education and
              team-based projects.
            </p>
            <p>
              My background in banking and hospitality has shaped how I work —
              with strong communication, collaboration, and a clear focus on
              user needs. I&apos;m now looking to grow within a real development
              team.
            </p>
          </div>

          {/* Q&A */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Icon
                icon="solar:code-bold-duotone"
                className="mt-1 h-5 w-5 shrink-0 text-foreground"
              />
              <div>
                <p className="font-medium text-foreground">What do I do?</p>
                <p>
                  I build web applications using React, Next.js and TypeScript,
                  focusing on clean UI and practical functionality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon
                icon="solar:bolt-bold-duotone"
                className="mt-1 h-5 w-5 shrink-0 text-foreground"
              />
              <div>
                <p className="font-medium text-foreground">How do I work?</p>
                <p>
                  I learn by building. I break problems down, test quickly, and
                  improve through iteration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <Icon
                icon="solar:users-group-rounded-bold-duotone"
                className="mt-1 h-5 w-5 shrink-0 text-foreground"
              />
              <div>
                <p className="font-medium text-foreground">Why hire me?</p>
                <p>
                  I combine technical training with real-world experience, which
                  means I understand both the code and the people using it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
