import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

interface Article {
    _id: string
    name: string
    email: string
    title: string
    content: string
    reading_time: number
    imageURL?: string
}

export default function MyArticles() {

    const {email} = useParams()
     const [articles, setarticles] = useState<Article[]>([]);

     useEffect(() => {
          getAllArticlesByEmail()
     }, [email]);

     const getAllArticlesByEmail = async() => {
          try {
               const resp = await axios.get(`http://localhost:5000/api/v1/articles/get/articles/with/${email}`)
               setarticles(resp.data.articles)
               console.log(resp.data);
          } catch (error) {
               console.error(error)
          }
     }

     return (
          <div>
               <UserNavbar/>
               {articles && articles.map(article =>(
                    <div className='px-25 mt-5'>
                         {article?.title}
                         <div className='mt-2'>
                              {article?.content}
                         </div>
                    </div>
               ))}
          </div>
     )
}
