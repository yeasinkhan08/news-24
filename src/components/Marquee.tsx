import React from "react";
import { title } from "process";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLine = data.data;
  console.log(headLine);

  return (
    <div>
      {headLine.map((line) => (
        <span>
          <span>{line.title}</span>
          <span className="mx-4">ㆍ</span>
        </span>
      ))}
    </div>
  );
};

export default Marquee;
