'use client';

const MainSection = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b pb-2 text-gray-600">
        <button className="font-semibold text-black border-b-2 border-black pb-2">For you</button>
        <button className="hover:text-black">Following</button>
        <button className="hover:text-black">Featured</button>
        <button className="hover:text-black">Software Development</button>
        <button className="hover:text-black">Remote Work</button>
      </div>
      
      {/* Articles List */}
      <div className="mt-4 space-y-6">
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

const ArticleCard = ({ title, author, category, date, views, comments }) => {
  return (
    <div className="flex flex-col border-b pb-4">
      <p className="text-sm text-gray-500">{category} by {author}</p>
      <h2 className="text-lg font-bold text-black">{title}</h2>
      <div className="flex space-x-4 text-sm text-gray-500 mt-1">
        <span>{date}</span>
        <span>{views} views</span>
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

export default MainSection;
