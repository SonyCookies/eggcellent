import Link from "next/link";
import Image from "next/image";
import BaseNavigation from "./BaseNavigation";

const UserNavigation = () => {
  return (
    <nav
      className="text-white top-0 overflow-hidden bg-cover bg-center h-24 sticky z-50"
      style={{
        backgroundImage: "url('/images/header-background.svg')",
      }}
    >
      <div className="container mx-auto flex justify-between items-center align-baseline p-4 relative">
        <button className="lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden lg:flex flex-1 justify-start">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/our-story"
                className="hover:text-yellow-400 transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-yellow-400 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="hover:text-yellow-400 transition-colors"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/where-to-buy"
                className="hover:text-yellow-400 transition-colors"
              >
                Where to Buy
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center flex-1 lg:flex-none"
        >
          <Image
            src="/placeholder.svg?height=50&width=150"
            alt="Happy Egg Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex justify-end flex-1">
          <Link
            href="/get-happy"
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            Get Happy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavigation;
