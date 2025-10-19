import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import '../styles/dashboard.css'
import axios from 'axios';
import type { Article } from '../types/Article';
import { Link } from 'react-router-dom';

export default function Dashboard() {

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    loadAllArticles();
  }, []);

  const loadAllArticles = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/api/v1/article/get/all/published/articles');
      setArticles(resp.data.articles);
      console.log(resp.data.articles);
    } catch (error) {
      console.log("Error loading articles", error);
    }
  }


  return (
    <div className='flex justify-center items-center flex-col w-full' id='dashboard-page'>
      <Navbar />
      <div className='flex justify-center items-start flex-col w-full'>
        {articles ? articles.map((article, index) => (
          <div key={index} className='py-15 w-200 border-b border-b-neutral-200 mx-50 pr-15 border-r border-r-neutral-200'>
            <div className='inline-block bg-green-100 mb-5 px-2 py-0.5 rounded-4xl'>
              <p className='text-sm whitespace-nowrap text-green-900'>{article.title} by {article.name}</p>
            </div>
            <h1 className='text-4xl mb-4 tracking-tight font-semibold '>{article.title}</h1>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-gray-600 text-sm'>By {article.name} on {new Date(article.date).toLocaleDateString()}</p>
              <p className='text-gray-600 text-sm'>astimated reading time : {article.readingTime} min</p>
            </div>
            <p className='text-gray-800 text-lg text-justify mb-10'>{article.content.substring(0, 200)}...</p>
            <Link to={`/view/article/${article._id}/${article.title}`} className='underline underline-offset-4 cursor-pointer'>Read more</Link>
          </div>
        )) : <p className='pl-50 pt-10 text-neutral-400 font-semibold text-7xl'>No articles found.</p>
        }
      </div>
    </div>
  )
}
