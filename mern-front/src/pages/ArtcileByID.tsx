import axios from 'axios';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import type {Article} from '../types/Article';
import Navbar from '../component/Navbar';
import '../styles/articlebyid.css'
import type {Comment} from '../types/Comments';
import type {GoogleUser} from '../types/GoogleUser';

export default function ArtcileByID() {

    const {id} = useParams<{ id: string }>()
    const [article, setArticle] = useState<Article>()

    const [comments, setComments] = useState<Comment['comment']>('');
    const [allComments, setAllComments] = useState<Comment[]>([]);
    const [user, setUser] = useState<GoogleUser | null>(null)
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const storedUser = localStorage.getItem('googleUser')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        axios.put(`http://localhost:5000/api/v1/article/increment/view/${id}`);
        featchArticle()
        getCommentsforArticle()
        getCommentsCount()
    }, [id]);

    const getCommentsCount = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/api/v1/comment/get/comment/count/${id}`);
            setCount(resp.data.count)
            console.log(resp.data.count);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    const submitComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault();

            const commentData: Comment = {
                articleId: id || '',
                userName: user?.name || 'undefined',
                userEmail: user?.email || 'undefined',
                comment: comments,
                date: new Date().toISOString()
            }

            const resp = await axios.post('http://localhost:5000/api/v1/comment/add/comment', commentData)
            console.log(resp.data);
            setComments('')
            getCommentsforArticle()
            getCommentsCount()
        } catch (error) {
            console.log('Something went wrong!', error)
        }
    }

    const getCommentsforArticle = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/api/v1/comment/get/comments/article/${id}`);
            setAllComments(resp.data.comments);
            console.log(resp.data.comments);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

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
            <Navbar/>
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
                             alt=""/>
                        <p>{article?.viewCount}</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 cursor-pointer' onClick={incrementLikes}>
                        <img
                            src="https://img.icons8.com/?size=100&id=33481&format=png&color=333333" className='h-5'
                            alt=""/>
                        <p>{article?.likeCount}</p>
                    </div>

                    <div className='flex justify-center items-center gap-3 cursor-pointer' onClick={incrementDisLikes}>
                        <img src="https://img.icons8.com/?size=100&id=15957&format=png&color=333333" className='h-5'
                             alt=""/>
                        <p>{article?.disLikeCount}</p>
                    </div>
                </div>
                <div
                    className='mt-8 border-y border-y-neutral-100 text-justify text-xl py-8 text-neutral-800 font-normal'>
                    {article?.content.split('.').map((sentence, index) => (
                        sentence.trim() && (
                            <span key={index}>
                                {sentence.trim()}.
                                {index < article.content.split('.').length - 1 && <><br/><br/></>}
                            </span>
                        )
                    ))}
                </div>
                <h1 className='text-3xl tracking-tighter mt-10'>Comments ({count})</h1>
                <div className='flex justify-center items-left flex-col'>
                    <div className='flex justify-center items-center mt-5'>
                        <input type="text" className='bg-neutral-100 w-170 h-10 px-6 rounded-sm'
                               placeholder='Submit response' value={comments}
                               onChange={(e) => setComments(e.target.value)}/>
                        <button onClick={submitComment}
                                className='bg-black text-white rounded-sm px-4 py-2.5 cursor-pointer text-sm'>Responded
                        </button>
                    </div>
                    <div className='flex justify-center items-center flex-col mt-10'>
                        {allComments && allComments.map((commentObj) => (
                            <div key={commentObj.articleId} className='border-b border-b-neutral-200 w-full pb-6 mb-6'>
                                <div className='flex justify-start items-center gap-4 mb-2'>
                                    <div
                                        className='bg-red-500 text-white rounded-full h-8 w-8 flex justify-center font-semibold items-center'>
                                        {commentObj?.userName?.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div className='flex justify-start items-start flex-col'>
                                        <p className='font-medium'>{commentObj?.userName}</p>
                                        <p className='text-sm text-neutral-500'>{commentObj?.date ? new Date(commentObj.date).toLocaleDateString() : 'No date'}</p>
                                    </div>
                                </div>
                                <p className='text-neutral-800 text-base mt-3'>{commentObj?.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
