import Section from "@/components/layout/Section";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <Section>
      <div id="skills" className="mx-auto max-w-5xl py-20">
        <p className="text-sm font-medium uppercase text-zinc-500">Skills</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-4 text-base text-zinc-600">
          Here are the technologies and tools I have been working with
          throughout my education and projects.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
