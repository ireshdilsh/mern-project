import Navbar from "../component/Navbar.tsx";
import '../styles/myarticle.css';
import { useEffect, useState } from "react";
import axios from "axios";
import type { Article } from "../types/Article.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";

export default function MyArticles() {
    const [articles, setArticles] = useState<Article[] | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('googleUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            getArticlesByEmail(user.email);
        }
    }, []);

    const getArticlesByEmail = async (email: string) => {
        const resp = await axios.get(`http://localhost:5000/api/v1/article/get/articles/by/email/is/${email}`);
        console.log(resp.data.articles);
        setArticles(resp.data.articles);
    };

    const navigate : NavigateFunction = useNavigate()

    const gotoWritePage = (): void => {
        navigate('/write/page')
    }

    return (
        <div className='flex justify-center items-start flex-col' id='my-article-page'>
            <Navbar />
            <h1 className='text-4xl tracking-tighter pl-50 pt-15'>My Articles</h1>
            <div className='flex justify-center items-center flex-col w-full mt-15'>
                {articles === null ? (
                    <div>Loading...</div>
                ) : articles.length === 0 ? (
                    <div className='text-3xl flex flex-col justify-center items-center'>
                        <h1 className='mt-10 tracking-tighter text-neutral-500'> No articles found for You.</h1>
                        <img src="https://img.icons8.com/?size=100&id=Rin5jsZMXvl0&format=png&color=000000" alt="" className='h-30 mt-10'/>
                        <button onClick={gotoWritePage} className='px-5 py-2.5 font-medium cursor-pointer text-sm mt-5 bg-green-700 text-white rounded-sm w-38'>Write Article</button>
                    </div>
                ) : (
                    articles.map((article: Article) => (
                        <div key={article._id} className='article-card'>
                            <h2 className='article-title'>{article.title}</h2>
                            <p className='article-date'>Published on: {new Date(article.date).toLocaleDateString()}</p>
                            <p className='article-content'>{article.content.substring(0, 100)}...</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}