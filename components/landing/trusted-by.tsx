export default function TrustedBy() {
  const companies = [
    'Google',
    'Meta',
    'Amazon',
    'Apple',
    'Microsoft',
    'Netflix'
  ];

  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted font-semibold mb-8">
          TRUSTED BY ENGINEERS AT
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="text-center text-foreground font-semibold opacity-60 hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
