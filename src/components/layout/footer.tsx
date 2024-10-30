import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl text-white/80 p-6 flex flex-col items-center">
      <div className="flex justify-between w-full items-center">
        <span className="text-neutral-400">Built by</span>
        <Link
          href="https://kevinkenfack.com"
          target="_blank"
          className="transition-colors underline underline-offset-4 hover:text-neutral-200"
        >
          Kevin Kenfack ❤️
        </Link>
        <br/>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        <Link
          href="/terms"
          className="transition-colors underline underline-offset-4 hover:text-neutral-200"
        >
          Terms and Conditions
        </Link>
        <span className="text-neutral-400">|</span>
        <Link
          href="/privacy"
          className="transition-colors underline underline-offset-4 hover:text-neutral-200"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};