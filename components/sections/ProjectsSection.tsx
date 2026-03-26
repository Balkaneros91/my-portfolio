import Section from "@/components/layout/Section";
import { featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted-soft/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          A selection of projects that reflect my work in frontend and
          full-stack development.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted-soft px-3 py-1 text-xs font-medium text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-4 pt-6 text-sm font-medium">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary">
                  Live demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-primary">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
