import { useEffect, useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import axios from "axios";
import { type NavigateFunction, useNavigate } from "react-router-dom";

interface Article {
    _id: string
    name: string
    email: string
    title: string
    content: string
    reading_time: number
    imageURL?: string
}

export default function UserDashboard() {

    useEffect(() => {
        getAllArticles()
    }, []);

    const [articles, setArticles] = useState<Article[] | null>(null);
    const [search, setsearch] = useState<string>('');

    useEffect(() => {
        if (search === '') {
            getAllArticles()
        }
    }, [search]);

    const getAllArticles = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/v1/articles/get/all/articles")
            setArticles(resp.data.articles)
            console.log(resp.data.articles)
        } catch (e) {
            console.error(e)
        }
    }

    const navigate: NavigateFunction = useNavigate()

    const gotoArticleByIdPage = (id: string) => {
        navigate(`/get/article/by/${id}`)
    }

    const searchArticles = async() => {
        try {

            const resp = await axios.get(`http://localhost:5000/api/v1/articles/find/article/${search}`)
            console.log(resp.data)
            setArticles(resp.data.articles)

            if (resp.data.articles.length === 0) {
                alert('No articles found')
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <UserNavbar />
            <div className='w-full px-25 py-10'>
                <p className='text-3xl tracking-tighter mt-4'>Dashboard ({articles?.length})</p>
                <p className='text-lg text-neutral-500 mt-2 mb-8'>Your creative hub for writing, publishing, and managing articles. <br /> Stay in control of your content, monitor engagement, and grow your audience effortlessly.</p>
                <div className='flex gap-2.5 mb-12'>
                    <input onChange={(e)=>{setsearch(e.target.value)}} value={search} style={{fontFamily:'Gabarito'}} type="text" className='h-11 rounded-3xl px-5 bg-neutral-50 w-120' placeholder='Search here ...'/>
                    <button onClick={searchArticles} className='bg-black text-white rounded-3xl px-5 text-sm hover:opacity-80 cursor-pointer flex items-center gap-2'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                    </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {articles && articles.map((article) => (
                        <article
                            key={article._id}
                            className='bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col'
                            onClick={() => gotoArticleByIdPage(article._id)}
                        >
                            {article.imageURL && (
                                <div className='w-full h-48 overflow-hidden'>
                                    <img
                                        src={article.imageURL}
                                        alt={article.title}
                                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                                    />
                                </div>
                            )}

                            <div className='p-5 flex-1 flex flex-col'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center'>
                                        <span className='text-xs font-semibold text-amber-800'>
                                            {article.name.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className='text-xs font-medium text-neutral-700'>{article.name}</span>
                                </div>

                                <h2 className='text-lg font-semibold tracking-tight text-neutral-900 mb-2 line-clamp-2 hover:text-neutral-700 transition-colors'>
                                    {article.title}
                                </h2>

                                <p className='text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3 flex-1'>
                                    {article.content.substring(0, 120)}...
                                </p>

                                <div className='flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-100'>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                        {article.reading_time} min
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                        </svg>
                                        {Math.floor(Math.random() * 500) + 50}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
