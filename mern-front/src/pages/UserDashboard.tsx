import {useEffect, useState} from 'react'
import UserNavbar from '../components/UserNavbar'
import axios from "axios";
import imfs from '../assets/hero.png'

interface Article{
    _id:string
    name:string
    email:string
    title:string
    content:string
    reading_time:number
}

export default function UserDashboard() {

    useEffect(() => {
        getAllArticles()
    }, []);

    const [articles, setArticles] = useState<Article[] | null>(null);

    const getAllArticles = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/v1/articles/get/all/articles")
            setArticles(resp.data.articles)
            console.log(resp.data.articles)
        }catch (e) {
            console.error(e)
        }
    }

  return (
    <div>
      <UserNavbar />
        <div className='w-280 border-r border-r-neutral-200 h-full'>
            {articles && articles.map((article)=>(
                <div className='flex justify-between items-center'>
                    <div className='w-280 h-full flex flex-col justify-start items-start py-8 px-25 border-b border-b-neutral-200 ' key={article._id}>
                        <h1 className='text-sm bg-amber-100 px-2 rounded-3xl mb-2'>{article.name}</h1>
                        <p className='text-2xl font-medium tracking-tighter'>{article.title}</p>
                        <h3 className='mt-2.5'>{article.content.substring(0,250)}...</h3>
                    </div>
                    <img src={imfs} className='h-28' alt="aticles-image"/>
                </div>
            ))}
            <div>

            </div>
        </div>
    </div>
  )
}
