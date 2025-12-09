import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch via email or social links.",
};

const ContactPage = () => {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
      <div className="space-y-2">
        <p className="text-sm text-[var(--muted)]">Contact</p>
        <h1 className="text-3xl font-semibold">Get in touch</h1>
        <p className="text-[var(--muted)]">Reach me by email or social links.</p>
      </div>
      <div className="space-y-2">
        <a href="mailto:you@example.com" className="text-[var(--accent)] hover:underline">
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
          className="inline-flex w-fit rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2"
        >
          Download resume
        </a>
      </div>
    </main>
  );
};

export default ContactPage;
