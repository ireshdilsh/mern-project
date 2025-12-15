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

interface Comments{
    article_id:string
    name:string
    comment:string
}

export default function ArticleById() {

    const {id} = useParams()
    useEffect(() => {
        getArticleByID()
        loadCommets()
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

    const [comment, setcomment] = useState('');

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcomment(e.target.value);
    }

    const [comments, setComments] = useState<Comments[]>([])

    const loadCommets = async () => {
        try {
            const resp = await axios.get<{comments: Comments[]}>(`http://localhost:5000/api/v1/comments/get/comments/by/article/${id}`)
            setComments(resp.data.comments)
            console.log(resp.data.comments)
        } catch (error) {
            console.error(error)
        }
    }

    const addNewComments = async () => {
        try {
            const datas :Comments = {
                article_id: id || '',
                name: 'John Doe',
                comment
            }
            const resp = await axios.post<Comments>('http://localhost:5000/api/v1/comments/add/new/comment', datas)
            console.log(resp.data.comment)
            setcomment('')
            alert('Success Comment !')
            loadCommets()
        } catch (error) {
            console.error(error)
            alert('Something went wrong')
        }
    }

    return (
        <div>
            <UserNavbar/>
           <div className='mx-100 flex justify-start items-start flex-col w-200 border-b border-b-neutral-200 pb-10'>
               <p className='border border-neutral-200 text-sm px-2 text-neutral-500 rounded-sm mt-15'>{article?.name}</p>
              <div className='flex flex-col border-b border-b-neutral-200 pb-4'>
                  <p className='text-4xl tracking-tighter mt-2'>{article?.title}</p>
                    {article?.imageURL && <img src={article.imageURL} className='py-5' alt="articles-image" />}
                  <h2 className='text-lg text-neutral-500 mt-1'>{article?.reading_time} min reading time</h2>
              </div>
               <h1 className='text-xl mt-8 text-justify'>{article?.content}</h1>
           </div>
           <p className="text-4xl tracking-tighter mx-100 mt-15">Comments ({comments.length})</p>
           <div className="w-200 mx-100 mb-10">
            <div className="w-full flex justify-center items-center gap-3 mt-5">
                <input value={comment} onChange={handleCommentChange} type="text" className="bg-neutral-100 w-full rounded-md h-9 px-4 text-sm" placeholder="write comments here ...."/>
                <button onClick={addNewComments} className="bg-black text-white px-4 h-9 text-sm rounded-sm cursor-pointer hover:opacity-85">Submit</button>
            </div>
            <div className="mt-5">
                {comments.map((comm, index) => (
                    <div key={index} className="border-b border-b-neutral-200 py-4">
                        <p className="text-sm font-semibold">{comm.name}</p>            
                        <p className="text-sm text-neutral-600 mt-1">{comm.comment}</p>
                    </div>
                ))}
            </div>
           </div>
        </div>
    )
}