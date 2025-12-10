"use client";

import Section from "@/components/Section";
import Card from "@/components/Card";
import { useLanguage } from "./LanguageProvider";

const ContactContent = () => {
  const { t } = useLanguage();

  return (
    <Section>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="space-y-3">
          <p className="text-sm text-[var(--muted)]">{t("contact.label")}</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">{t("contact.title")}</h1>
          <p className="text-lg text-[var(--muted)]">{t("contact.subtitle")}</p>
        </div>

        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <a
                href="mailto:2257855@gmail.com"
                className="group flex flex-col items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)]"
                aria-label="Email"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--nav-hover)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25zM5.75 5.5A1.25 1.25 0 0 0 4.5 6.75v.383l7.315 4.24a.75.75 0 0 0 .77 0L19.9 7.133V6.75A1.25 1.25 0 0 0 18.25 5.5zM19.9 8.87l-6.832 3.958a2.25 2.25 0 0 1-2.287 0L4.5 8.87v8.38A1.25 1.25 0 0 0 5.75 18.5h12.5A1.25 1.25 0 0 0 19.9 17.25z" />
                  </svg>
                </span>
                <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)]">Email</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                {
                  href: "https://github.com/lelikone777",
                  label: "GitHub",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.486 2 12.018c0 4.425 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.37-1.343-3.37-1.343-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.532 2.341 1.09 2.91.833.091-.647.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.255-.446-1.275.098-2.656 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.502-.337 9.56 9.56 0 0 1 2.501.337c1.91-1.296 2.748-1.026 2.748-1.026.546 1.381.202 2.401.1 2.656.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.941.359.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.024 10.024 0 0 0 22 12.018C22 6.486 17.523 2 12 2Z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/aleks-kalinin/",
                  label: "LinkedIn",
                  icon: <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.354V9h3.414v1.561h.05c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.268 2.371 4.268 5.456zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554z" />,
                },
                {
                  href: "https://t.me/rspav",
                  label: "Telegram",
                  icon: (
                    <path d="M21.4 3.05a1.15 1.15 0 0 0-1.16-.2L3.41 9.43c-.46.17-.76.58-.8 1.04-.05.47.2.9.62 1.1l3.94 1.86 1.7 5.43c.14.45.53.76 1 .81h.1c.43 0 .82-.23 1.03-.6l2.06-3.51 4.1 3.33c.2.16.44.24.7.24.16 0 .31-.03.46-.1.36-.15.62-.47.7-.86l2.2-14.48c.08-.5-.16-.98-.56-1.25ZM9.12 12.42l-3.75-1.77 11.7-4.52-7.95 6.29Zm2.07 1.51 6.3-5.43-3.93 6.7-2.37 4.04Zm6.73 1.86-3.26-2.65 5.48-9.35z" />
                  ),
                },
                {
                  href: "https://wa.me/89859609798",
                  label: "WhatsApp",
                  icon: (
                    <path d="M16.04 3C9.408 3 4 8.216 4 14.612c0 2.293.712 4.432 1.94 6.204L5 27l6.386-1.7a12.1 12.1 0 0 0 4.654.91c6.632 0 12.04-5.216 12.04-11.612C28.08 8.216 22.672 3 16.04 3Zm0 2c5.512 0 10.04 4.23 10.04 9.612 0 5.383-4.528 9.612-10.04 9.612-1.46 0-2.848-.3-4.092-.856l-.598-.268-3.756 1 1.002-3.266-.392-.524A7.63 7.63 0 0 1 6 14.612C6 9.23 10.528 5 16.04 5Zm5.178 11.044c-.296-.148-1.752-.878-2.022-.978-.27-.098-.468-.148-.666.148-.198.296-.76.978-.932 1.178-.172.198-.344.222-.64.074-.296-.148-1.246-.458-2.37-1.46-.876-.776-1.474-1.752-1.646-2.048-.172-.296-.018-.458.13-.606.134-.134.296-.346.444-.518.148-.172.198-.296.296-.494.098-.198.05-.37-.024-.518-.074-.148-.654-1.596-.898-2.18-.236-.57-.466-.494-.64-.494h-.55c-.198 0-.49.074-.76.346-.27.296-1 1.014-1 2.48 0 1.468 1.024 2.886 1.166 3.086.148.198 2.006 3.17 4.874 4.452.682.296 1.22.492 1.634.632.682.218 1.286.198 1.786.122.548-.082 1.684-.684 1.926-1.346.236-.67.236-1.248.16-1.368-.074-.122-.27-.172-.548-.32Z" />
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex flex-col items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)]"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--nav-hover)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
                      {icon}
                    </svg>
                  </span>
                  <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)]">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:2257855@gmail.com"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-[var(--accent-foreground)] transition hover:opacity-90"
          >
            {t("contact.emailCta")}
          </a>
          <a
            href="/resume.pdf"
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--foreground)] transition hover:border-[var(--accent)]"
          >
            {t("contact.resume")}
          </a>
        </div>
        <p className="text-sm text-[var(--muted)]">{t("contact.response")}</p>
      </div>
    </Section>
  );
};

export default ContactContent;
