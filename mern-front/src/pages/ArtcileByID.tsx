import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Article } from '../types/Article';
import Navbar from '../component/Navbar';
import '../styles/articlebyid.css'

export default function ArtcileByID() {

    const { id } = useParams<{ id: string }>()
    const [article, setArticle] = useState<Article>()

    useEffect(() => {
        axios.put(`http://localhost:5000/api/v1/article/increment/view/${id}`);
        featchArticle()
    }, [id]);

    const featchArticle = async () => {
        if (!id) {
            console.log("No article ID provided");
            return;
        }

        try {
            const resp = await axios.get(`http://localhost:5000/api/v1/article/get/article/${id}`)
            setArticle(resp.data.article);
            console.log(resp.data.article);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    const incrementLikes = async () => {
        await axios.put(`http://localhost:5000/api/v1/article/increment/like/${id}`);
        featchArticle()
    }

    const incrementDisLikes = async () => {
        await axios.put(`http://localhost:5000/api/v1/article/decrement/like/${id}`);
        featchArticle()
    }


    return (
        <div className='flex justify-center items-center w-full flex-col'>
            <Navbar />
            <div className='flex justify-center items-start flex-col mt-20 w-195' id='article-by-id-page'>
                <div className='inline-block bg-green-100 px-3 rounded-4xl'>
                    <p className='text-sm whitespace-nowrap text-green-900'>{article?.title} by {article?.name}</p>
                </div>
                <h1 className='text-5xl tracking-tight font-medium leading-13 my-4'>{article?.title}</h1>
                <div className='flex justify-between items-center w-full mt-2'>
                    <p className='text-neutral-500 font-light '>By {article?.name} on {article ? new Date(article.date).toLocaleDateString() : ''}</p>
                    <p className='text-neutral-500 font-light '>Estimated reading time : {article?.readingTime} min</p>
                </div>
                <div className='flex justify-center items-center gap-8 mt-5'>
                    <div className='flex justify-center items-center gap-3'>
                        <img src="https://img.icons8.com/?size=100&id=85028&format=png&color=333333" className='h-5'
                            alt="" />
                        <p>{article?.viewCount}</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 cursor-pointer' onClick={incrementLikes}>
                        <img
                            src="https://img.icons8.com/?size=100&id=33481&format=png&color=333333" className='h-5'
                            alt="" />
                        <p>{article?.likeCount}</p>
                    </div>

                    <div className='flex justify-center items-center gap-3 cursor-pointer' onClick={incrementDisLikes}>
                        <img src="https://img.icons8.com/?size=100&id=15957&format=png&color=333333" className='h-5'
                            alt="" />
                        <p>{article?.disLikeCount}</p>
                    </div>
                </div>
                <div
                    className='mt-8 border-y border-y-neutral-100 text-justify text-xl py-8 text-neutral-800 font-normal'>
                    {article?.content.split('.').map((sentence, index) => (
                        sentence.trim() && (
                            <span key={index}>
                                {sentence.trim()}.
                                {index < article.content.split('.').length - 1 && <><br /><br /></>}
                            </span>
                        )
                    ))}
                </div>
                <h1 className='text-3xl tracking-tighter mt-10'>Comments (10)</h1>
                <div className='flex justify-center items-left flex-col'>
                    <div className='flex justify-center items-center mt-5'>
                        <input type="text" className='bg-neutral-100 w-170 h-10 px-10 rounded-sm' placeholder='Submit response' />
                        <button className='bg-black text-white rounded-sm px-4 py-2.5 cursor-pointer text-sm'>Responded</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
