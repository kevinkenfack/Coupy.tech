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
    <footer className="pt-10 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-6 text-center">
          <img src="/path/to/your-logo.svg" alt="Logo" className="w-32 mx-auto" />
          <p className="text-gray-300">
            Your custom description goes here. Feel free to add any message or call to action.
          </p>
          <div className="items-center gap-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <a href="https://kevinkenfack.com" target="_blank" rel="noopener noreferrer" className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 duration-150">
              Let's get started
            </a>
            <Link href="/about" className="py-2 px-4 border rounded-lg text-gray-300 hover:text-white duration-150">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="mt-10 py-10 border-t border-gray-600 sm:flex sm:justify-between items-center text-sm">
          <p>© 2024 Kevin Kenfack. All rights reserved.</p>
          <ul className="flex gap-4 mt-6 sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="text-gray-400 hover:text-white duration-150">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
