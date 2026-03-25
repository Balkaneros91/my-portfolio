import Section from "@/components/layout/Section";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Section>
      <div className="mx-auto flex max-w-3xl flex-col items-center py-28 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Junior Full-Stack Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
          Antonio-Claudio Andelic
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          I build modern web applications with JavaScript, React, and Next.js,
          and I am ready to contribute, keep learning, and grow as a developer
          in a real team environment.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
            View projects
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-900">
            Contact me
          </Link>
        </div>
      </div>
    </Section>
  );
}
