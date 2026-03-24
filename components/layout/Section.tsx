type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6 border-2">{children}</div>
    </section>
  );
}
