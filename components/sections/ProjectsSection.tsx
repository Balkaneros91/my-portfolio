import Section from "@/components/layout/Section";

import { featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section>
      <div id="projects" className="mx-auto max-w-5xl py-20">
        <p className="text-sm font-medium uppercase text-zinc-500">Projects</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Featured projects
        </h2>
        <p className="mt-4 text-base text-zinc-600">
          A selection of projects that reflect my work in frontend and
          full-stack development.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6 flex items-center gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-900 text-zinc-500">
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-900 text-zinc-500">
                  Live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
