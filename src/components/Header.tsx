import React from "react";
import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full">
      <div className="max-w-[1250px] mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 logo"
            width={40}
            height={40}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-2xl font-bold text-red-700 leading-tight">
              Bangla News 24
            </h2>

            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        {/* Sign In / Sign Out */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-700 transition"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="px-4 py-2 rounded-md bg-red-700 text-sm font-medium text-white hover:bg-red-800 transition"
          >
            সাইন আউট
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
