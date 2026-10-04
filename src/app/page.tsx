import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  return (
    <>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
        </div>
        {/* most read section */}
        <div className="clo-span-1 bg-amber-900 p-10"></div>
      </div>
    </>
  );
}
