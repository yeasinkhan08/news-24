import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative mx-auto max-w-7xl px-4 py-4">
      {/* Center Logo + Title + Date */}
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />

        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-red-700">
            Bangla News 24
          </span>

          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>

      {/* Top Right */}
      <div className="absolute left-200 top-4 flex items-center gap-3 text-sm">
        <Link
          href="/login"
          className="text-sm font-medium text-neutral-700 hover:text-red-700"
        >
          লগইন
        </Link>

        <Link
          href="/sign-up"
          className="rounded-md bg-red-700 px-5 py-1 text-sm font-medium text-white hover:bg-red-800"
        >
          সাইন আপ
        </Link>
      </div>
    </header>
  );
};

export default Header;
