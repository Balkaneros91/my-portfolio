import Section from "@/components/layout/Section";

export default function ContactSection() {
  return (
    <Section>
      <div id="contact" className="mx-auto max-w-xl py-20">
        <p className="text-sm font-medium uppercase text-zinc-500">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Let&apos;s connect
        </h2>
        <p className="mt-4 text-base text-zinc-600">
          I&apos;m currently open to junior full-stack or frontend
          opportunities. Feel free to reach out or connect with me.
        </p>
        <a
          href="mailto:andelic.antonio.claudio91@gmail.com"
          className="mt-6 block text-sm font-medium text-zinc-800 hover:text-zinc-950">
          andelic.antonio.claudio91@gmail.com
        </a>

        <div className="mt-6 flex gap-4 text-sm font-medium">
          <a
            href="https://github.com/Balkaneros91"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-claudio-andelic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
