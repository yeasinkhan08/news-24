import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsBody {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  altText?: string;
  caption?: string;
}

interface News {
  id: string;
  title: string;
  imageUrl: string;
  firstPublished: string;
  wordCount: number;
  byline: {
    name: string;
  }[];
  description?: {
    blocks?: {
      model?: {
        blocks?: {
          model?: {
            text?: string;
          };
        }[];
      };
    }[];
  };
  body: NewsBody[];
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  if (!data.success || !data.data) {
    notFound();
  }

  const news: News = data.data;

  const description =
    news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  const date = new Date(news.firstPublished).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = new Date(news.firstPublished).toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <main className="mx-auto max-w-2xl px-5 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold leading-[1.35] text-[#111]">
        {news.title}
      </h1>

      {/* Description */}
      {description && (
        <p className="mt-4 text-[17px] leading-8 text-[#555]">{description}</p>
      )}

      {/* Meta */}
      <div className="mt-5 border-y border-[#ddd] py-3 text-sm text-[#777]">
        <span>{news.byline?.[0]?.name}</span>

        <span className="mx-3">|</span>

        <span>
          {date} {time}
        </span>

        <span className="mx-3">|</span>

        <span>{news.wordCount} শব্দ</span>
      </div>

      {/* Main Image */}
      {news.imageUrl && <figure className="mt-8"></figure>}

      {/* Caption / Article Body */}
      <div className="mt-5">
        {news.body?.map((item, index) => {
          if (item.type === "text") {
            return (
              <p key={index} className="mb-6 text-[17px] leading-8 text-[#222]">
                {item.text}
              </p>
            );
          }

          if (item.type === "subheading") {
            return (
              <h2 key={index} className="my-8 text-2xl font-bold text-[#111]">
                {item.text}
              </h2>
            );
          }

          if (item.type === "image") {
            return (
              <figure key={index} className="my-8">
                <Image
                  src={item.url!}
                  alt={item.altText || news.title}
                  width={640}
                  height={360}
                  className="w-full rounded-lg"
                />

                {item.caption && (
                  <figcaption className="mt-3 text-[15px] leading-6 text-[#555]">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </div>
    </main>
  );
};

export default NewsDetails;
