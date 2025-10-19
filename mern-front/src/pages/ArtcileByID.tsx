import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Article } from '../types/Article';
import Navbar from '../component/Navbar';
import '../styles/articlebyid.css'

export default function ArtcileByID() {

    const { id } = useParams<{ id: string }>()
    const [article, setArticle] = useState<Article>()

    useEffect(() => {
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
        featchArticle()
    }, [id]);

    return (
        <div className='flex justify-center items-center w-full flex-col'>
            <Navbar />
            <div className='flex justify-center items-start flex-col mt-20 w-195' id='article-by-id-page'>
                <p className='text-sm'>{article?.title} by {article?.name}</p>
                <h1 className='text-5xl tracking-tight font-medium leading-13 my-4'>{article?.title}</h1>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-neutral-500 font-light '>By {article?.name} on {article ? new Date(article.date).toLocaleDateString() : ''}</p>
                    <p className='text-neutral-500 font-light '>Estimated reading time : {article?.readingTime} min</p>
                </div>
                <div className='mt-8 border-y border-y-neutral-100 text-justify text-xl pt-8 text-neutral-800 font-normal'>
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
            </div>
        </div>
    )
}
