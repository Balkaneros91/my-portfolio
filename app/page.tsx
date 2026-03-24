import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Azure DevOps"],
  },
];

const featuredProjects = [
  {
    title: "Title",
    description: "Description",
    stack: ["Stack"],
    github: "#",
    demo: "#",
  },
  {
    title: "Title 2",
    description: "Description",
    stack: ["Stack"],
    github: "#",
    demo: "#",
  },
  {
    title: "Title 3",
    description: "Description",
    stack: ["Stack"],
    github: "#",
    demo: "#",
  },
  {
    title: "Title 4",
    description: "Description",
    stack: ["Stack"],
    github: "#",
    demo: "#",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <Section>
          <div className="mx-auto max-w-xl text-center py-24">
            <p className="text-sm font-medium uppercase mb-3 text-zinc-500">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl font-bold tracking-tight">
              Antonio-Claudio Andelic
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Junior Full-Stack Developer focused on JavaScript, React, and
              modern web development.
            </p>
          </div>
        </Section>

        {/* About section */}
        <Section>
          <div className="mx-auto max-w-3xl py-20">
            <p className="text-sm font-medium uppercase text-zinc-500">About</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              About me
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600">
              <p>
                I&apos;m a newly graduated junior full-stack developer with a
                background in modern web development and hands-on experience
                from education and internship-based team environments.
              </p>
              <p>
                My previous work experience in banking and hospitality has
                strengthened my communication skills, teamwork, customer focus,
                and maturity. I&apos;m now looking for a role where I can keep
                growing in a real development team.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills section */}
        <Section>
          <div className="mx-auto max-w-5xl py-20">
            <p className="text-sm font-medium uppercase text-zinc-500">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Skills
            </h2>
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

        {/* Projects section */}
        <Section>
          <div className="mx-auto max-w-5xl py-20">
            <p className="text-sm font-medium uppercase text-zinc-500">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              Selected projects that reflect my work across frontend, full-stack
              development, and modern web technologies.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-zinc-200 p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4 text-sm font-medium">
                    <a href={project.github}>GitHub</a>
                    <a href={project.demo}>Live demo</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section>
          <div className="mx-auto max-w-xl py-20">
            <p className="text-sm font-medium uppercase text-zinc-500">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Contact
            </h2>
            <p>Contact paragraph</p>
          </div>
        </Section>
      </main>
    </>
  );
}
