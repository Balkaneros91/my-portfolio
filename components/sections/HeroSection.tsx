import Section from "@/components/layout/Section";

export default function HeroSection() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center py-24">
        <p className="text-sm font-medium uppercase mb-3 text-zinc-500">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl font-bold tracking-tight">
          Antonio-Claudio Andelic
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Junior Full-Stack Developer focused on JavaScript, React, and modern
          web development.
        </p>
      </div>
    </Section>
  );
}
