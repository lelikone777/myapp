const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full items-center justify-center border-t border-[var(--border)] px-6 py-6">
      <p className="text-sm text-[var(--muted)]">© {year} Kalinin. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
