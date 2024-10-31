import Link from "next/link";

export const Footer = () => {
  const footerNavs = [
    {
      href: "/terms",
      name: "Terms and Conditions",
    },
    {
      href: "/privacy",
      name: "Privacy Policy",
    },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          <span className="text-gray-300">Built by</span>
          <Link
            href="https://kevinkenfack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold transition-colors underline underline-offset-4 hover:text-gray-400"
          >
            Kevin Kenfack ❤️
          </Link>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          {footerNavs.map((item, idx) => (
            <Link key={idx} href={item.href} className="text-gray-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © 2024 Kevin Kenfack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
