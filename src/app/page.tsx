import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);

  return (
    <>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <div className=" grid gap-6 mt-5">
            {otherSections.map((os) => (
              <div key={os.curationId}>
                <h1 className="font-bold border-b-2 pb-1 border-red-700">
                  {os.title}
                </h1>

                <div className="grid mt-3 grid-cols-3 gap 2">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className="clo-span-1 bg-amber-900 p-10"></div>
      </div>
    </>
  );
}
