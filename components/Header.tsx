const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-b-zinc-200 dark:border-b-zinc-800">
      <h1 className="text-3xl font-semibold">My App</h1>
      <nav className="flex items-center gap-4">
        <a href="#" className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
          Home
        </a>
        <a href="#" className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;