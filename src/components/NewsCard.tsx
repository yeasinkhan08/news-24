import React from "react";

const NewsCard = ({ news }) => {
  return (
    <Link href={`/news/${firstNews.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
