import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Article } from '../types/Article';
import Navbar from '../component/Navbar';

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
        <div className='flex justify-center items-center flex-col'>
            <Navbar/>
            ArtcileByID = {article?._id}
        </div>
    )
}
