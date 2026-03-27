import Section from "@/components/layout/Section";
import { coreStack, skillGroups } from "@/data/skills";
import { Icon } from "@iconify/react";

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-background">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Technologies and tools
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          Here are the technologies and tools I have been working with
          throughout my education and projects.
        </p>

        {/* Core stack */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">Core Stack</h3>

          <div className="mt-4 flex flex-wrap gap-4">
            {coreStack.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Icon icon={skill.icon} className="h-5 w-5" />
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Other skills */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-muted-soft px-3 py-1.5 text-sm text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary ">
                    <Icon
                      icon={item.icon}
                      className="h-4.5 w-4.5 shrink-0 opacity-90"
                    />
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
