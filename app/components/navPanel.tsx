import Link from "next/link";

export default function NavPanel() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-6">
      <div className="flex items-center gap-6">
        <span className="text-lg font-semibold">Knihovna Resslova</span>
        <Link
          href="/"
          className="px-3 py-2 text-sm"
        >
          Domů
        </Link>
      </div>
      <button
        type="button"
        className="rounded border border-zinc-300 px-3 py-2 text-sm"
      >
        Odhlásit
      </button>
    </header>
  );
}