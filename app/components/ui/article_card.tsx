'use client';

import Button from "flyonui";

interface ArticleCardProps {
  title: string;
  author: string;
  category: string;
  date: string;
  views: string;
  comments: string;
}

export default function ArticleCard({ title, author, category, date, views, comments }: ArticleCardProps) {
  return (
    <div className="card sm:card-side max-w-sm sm:max-w-full">
      {/* <figure><img src="https://cdn.flyonui.com/fy-assets/components/card/image-7.png" alt="headphone" /></figure> */}
      <div className="card-body">
        <h5 className="card-title mb-2.5">{title}</h5>
        <p className="mb-3">{author} - {category}</p>
        <p className="mb-3">{date}</p>
        <p className="mb-3">{views} views - {comments} comments</p>
      </div>
    </div>
  );
}