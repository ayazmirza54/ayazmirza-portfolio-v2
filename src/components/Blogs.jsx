import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: "Intellisketch : AI powered drawing tool 🖌️",
      preview: "IntelliSketch: Building an AI-Powered Mathematical Sketching App",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      link: "https://dev.to/ayazmirza54/intellisketch-ai-powered-drawing-tool-3i8e",
      platform: "Dev.to"
    },
    {
      title: "Migrating my app from chatgpt API to Gemini AI API",
      preview: "Migrating my app from chatgpt API to Gemini AI API",
      date: "Sept 14, 2024",
      readTime: "4 min read",
      link: "https://dev.to/ayazmirza54/migrating-my-app-from-chatgpt-api-to-gemini-ai-api-557o",
      platform: "Dev.to"
    },
    {
      title: "🤖 chatGPT on loop➰ using babyAGI and AutoGPT",
      preview: "Using babyAGI and AutoGPT to interact with chatGPT on loop",
      date: "Apr 13, 2023",
      readTime: "6 min read",
      link: "https://dev.to/ayazmirza54/chatgpt-on-loop-using-babyagi-and-autogpt-29c8",
      platform: "Dev.to"
    },
    {
      title: "Text and Code Utilities App using OpenAI API",
      preview: "Building a Text and Code Utilities App using OpenAI API",
      date: "Jan 28, 2023",
      readTime: "7 min read",
      link: "https://dev.to/ayazmirza54/text-and-code-utilities-app-using-openai-api-4m13",
      platform: "Dev.to"
    }
  ];

  return (
    <div id="blogs" className="portfolio-container">
      <div className="text-4xl font-extrabold capitalize mb-8">Blogs</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <a 
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-gray-700 rounded-lg p-6 h-full hover:border-gray-500 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {blog.title}
                </h3>
                <ArrowUpRight 
                  size={20} 
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              
              <p className="text-gray-400 mb-4 line-clamp-2">
                {blog.preview}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <span className="text-gray-400 font-medium">
                  {blog.platform}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
