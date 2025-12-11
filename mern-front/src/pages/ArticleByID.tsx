import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar.tsx";

interface ArticleById{
    _id:string
    name:string
    email:string
    title:string
    content:string
    reading_time:number
    imageURL?: string
}

export default function ArticleById() {

    const {id} = useParams()
    useEffect(() => {
        getArticleByID()
    }, [id]);

    const [article, setArticle] = useState<ArticleById>()

    const getArticleByID = async () => {
        try {
            const resp = await  axios.get(`http://localhost:5000/api/v1/articles/get/article/by/${id}`)
            setArticle(resp.data.article)
            console.log(resp.data.article)
        }catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <UserNavbar/>
           <div className='mx-100 flex justify-start items-start flex-col w-200'>
               <p className='border border-neutral-200 text-sm px-2 text-neutral-500 rounded-sm mt-15'>{article?.name}</p>
               {article?.imageURL && <img src={article.imageURL} className='h-28' alt="articles-image" />}
              <div className='flex flex-col border-b border-b-neutral-200 pb-4'>
                  <p className='text-4xl tracking-tighter mt-2'>{article?.title}</p>
                  <h2 className='text-lg text-neutral-500 mt-1'>{article?.reading_time} min reading time</h2>
              </div>
               <h1 className='text-xl mt-8 text-justify'>{article?.content}</h1>
           </div>
        </div>
    )
}