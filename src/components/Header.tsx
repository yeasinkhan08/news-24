import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full">
      <div className="mx-auto flex max-w-5xl items-center py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={40}
            height={40}
            priority
          />

          <div>
            <h1 className="font-serif text-2xl font-bold leading-none text-red-700">
              Bangla News 24
            </h1>

            <p className="mt-1 font-serif text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute right-4 top-4 flex items-center gap-3">
        <Link href="/login" className="font-serif text-sm text-gray-700">
          লগইন
        </Link>

        <Link
          href="/signup"
          className="rounded-md bg-red-700 px-3 py-2 font-serif text-sm font-medium text-white"
        >
          সাইন আপ
        </Link>
      </div>
    </header>
  );
};

export default Header;
