'use client';

import ArticleCard from "@/app/components/article_card";

export default function MainSection() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4">
      {/* Articles List */}
      <div className="flex flex-col mt-4 space-y-6">
        <ArticleCard 
          title="The 5-Second Conversation Hack That Makes People Instantly Like You" 
          author="Alessia Fransisca"
          category="In Hello, Love"
          date="Feb 10"
          views="5.5K"
          comments="102"
        />
        <ArticleCard 
          title="Zuckerberg’s New Meta: It’s Finally Time to Leave Social Media" 
          author="Kat Anderson"
          category="Tech"
          date="Jan 8"
          views="13.2K"
          comments="433"
        />
        <ArticleCard 
          title="Why Resilience Culture is Failing LGBTQ+ People" 
          author="Gino Cosme"
          category="In Prism & Pen"
          date="1d ago"
          views="769"
          comments="6"
        />
      </div>
    </div>
  );
};



