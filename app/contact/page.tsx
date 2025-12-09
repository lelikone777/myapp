// app/contact/page.tsx
const ContactPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-(--muted)">Reach me by email or social links.</p>
      <div className="space-y-2">
        <a href="mailto:you@example.com" className="text-(--accent) hover:underline">
          you@example.com
        </a>
        <div className="flex gap-3">
          <a href="https://github.com/your" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your" className="hover:underline">
            LinkedIn
          </a>
        </div>
        <a
          href="/resume.pdf"
          className="inline-flex w-fit rounded-lg border border-(--border) bg-(--card) px-4 py-2"
        >
          Download resume
        </a>
      </div>
    </main>
  );
};

export default ContactPage;
