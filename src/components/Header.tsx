import React from "react";
import Image from "next/image";
import Home from "../app/page";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={"/logo.webp"} alt="" height={40} width={40} />
      </div>
    </div>
  );
};

export default Header;
