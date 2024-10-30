import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl text-white/80 p-6">
      <span>Built by </span>
      <Link
        href="https://kevinkenfack.com"
        target="_blank"
        className="transition-colors underline underline-offset-4 hover:text-neutral-200"
      >
        Kevin Kenfack ❤️.
      </Link>
    </footer>
  );
};