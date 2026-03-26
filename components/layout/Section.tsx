type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
