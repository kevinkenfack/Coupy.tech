import Link from "next/link";

export const Footer = () => {
  const footerNavs = [
    { href: "/terms", name: "Terms and Conditions" },
    { href: "/privacy", name: "Privacy Policy" },
  ];

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-4">
          <span className="text-gray-700 dark:text-gray-300">Build by&nbsp;</span>
          <Link
            href="https://kevinkenfack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 transition-colors hover:text-gray-500 dark:hover:text-gray-400"
          >
            Kevin Kenfack 💙
          </Link>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          {footerNavs.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 Coupy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
