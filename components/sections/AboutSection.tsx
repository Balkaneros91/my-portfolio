import Section from "@/components/layout/Section";

export default function AboutSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl py-20">
        <p className="text-sm font-medium uppercase text-zinc-500">About</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">About me</h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600">
          <p>
            I&apos;m a newly graduated junior full-stack developer with a
            background in modern web development and hands-on experience from
            education and internship-based team environments.
          </p>
          <p>
            My previous work experience in banking and hospitality has
            strengthened my communication skills, teamwork, customer focus, and
            maturity. I&apos;m now looking for a role where I can keep growing
            in a real development team.
          </p>
        </div>
      </div>
    </Section>
  );
}
