const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-(--border) bg-(--card) shadow-(--shadow) p-6">
    {children}
  </div>
);

export default Card;
