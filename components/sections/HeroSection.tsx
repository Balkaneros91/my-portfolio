import Section from "@/components/layout/Section";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        {/* Soft glow */}
        <div className="absolute left-1/2 top-1/3 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl md:h-105 md:w-105" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[40px_40px] dark:opacity-[0.06]" />

        {/* Soft fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center py-16 text-center md:py-20 lg:flex-row lg:items-center lg:justify-evenly lg:text-left">
        <div className="lg:max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Junior Full-Stack Developer
          </p>

          <h1 className="font-bold tracking-tight text-foreground text-4xl md:text-5xl lg:text-7xl">
            Antonio-Claudio Andelic
          </h1>

          {/* Mobile / tablet image */}
          <div className="mt-8 flex justify-center lg:hidden">
            <Image
              src="/profile_img/portfolio_img.png"
              alt="Antonio-Claudio Andelic"
              width={180}
              height={240}
              className="h-auto w-42.5 rounded-4xl border border-border object-cover shadow-md ring-1 ring-primary/20 transition-transform duration-200 hover:scale-[1.02] sm:w-47.5 lg:w-55"
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I build modern web applications with JavaScript, React and Next.js.
            I am looking for an opportunity where I can keep learning,
            contribute to real projects and grow as a developer in a strong
            team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {/* buttons */}
            <Link
              href="/cv/Antonio-Claudio-CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
              <Icon icon="solar:download-bold-duotone" className="h-5 w-5" />
              Download CV (PDF)
            </Link>
            <Link
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition duration-200 hover:opacity-90 hover:shadow-md">
              View projects
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary hover:shadow-md">
              Contact me
            </Link>
          </div>
        </div>

        {/* Desktop image */}
        <div className="hidden lg:flex lg:justify-center lg:pl-12">
          <Image
            src="/profile_img/portfolio_img.png"
            alt="Antonio-Claudio Andelic"
            width={240}
            height={320}
            className="h-auto w-55 rounded-[2.25rem] border border-border object-cover shadow-md ring-1 ring-primary/20 transition-transform duration-200 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
