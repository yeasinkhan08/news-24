import Link from "next/link";
import { title } from "process";
import React from "react";
interface Navs {
  slug: string;
  title: string;
  topicID: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  console.log(navs);

  const filteredNavs = navs.filter((nav) => nav.scrapable);

  return (
    <div className=" flex gap-5 justify-center mt-5">
      <Link href={"/"}>হোম</Link>
      {filteredNavs.map((nav, index) => (
        <Link key={index} href={nav.slug}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
