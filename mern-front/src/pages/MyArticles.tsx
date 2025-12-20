import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { type NavigateFunction, useNavigate, useParams } from 'react-router-dom';
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
     const [openMenuId, setOpenMenuId] = useState<string | null>(null);
     const navigate: NavigateFunction = useNavigate()

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

     const gotoArticleByIdPage = (id: string) => {
          navigate(`/get/article/by/${id}`)
     }

     const toggleMenu = (e: React.MouseEvent, articleId: string) => {
          e.stopPropagation();
          setOpenMenuId(openMenuId === articleId ? null : articleId);
     }

     const handleDelete = (e: React.MouseEvent, articleId: string) => {
          e.stopPropagation();
          // Delete function will be implemented here
          console.log('Delete article:', articleId);
     }

     const handleUpdate = (e: React.MouseEvent, articleId: string) => {
          e.stopPropagation();
          // Update function will be implemented here
          console.log('Update article:', articleId);
     }

     return (
          <div>
               <UserNavbar/>
               <div className='w-full px-25 py-10'>
                    <p className='text-3xl mb-2 tracking-tighter'>My Articles ({articles.length})</p>
                    <p className='text-neutral-500 mb-10 text-lg'>Read high-quality articles and blog posts covering technology, lifestyle, education, and more. <br /> Stay informed with fresh insights, expert opinions, and engaging stories updated regularly.</p>
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
                                        <div className='flex items-center justify-between mb-3'>
                                             <div className='flex items-center gap-2'>
                                                  <div className='w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center'>
                                                       <span className='text-xs font-semibold text-amber-800'>
                                                            {article.name.substring(0, 2).toUpperCase()}
                                                       </span>
                                                  </div>
                                                  <span className='text-xs font-medium text-neutral-700'>{article.name}</span>
                                             </div>
                                             <div className='relative'>
                                                  <button
                                                       onClick={(e) => toggleMenu(e, article._id)}
                                                       className='p-1 hover:bg-neutral-100 rounded-full transition-colors'
                                                  >
                                                       <svg className='w-5 h-5 text-neutral-600' fill='currentColor' viewBox='0 0 24 24'>
                                                            <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/>
                                                       </svg>
                                                  </button>
                                                  {openMenuId === article._id && (
                                                       <div className='absolute right-0 mt-1 w-40 bg-white border border-neutral-200 rounded-lg shadow-lg z-10'>
                                                            <button
                                                                 onClick={(e) => handleUpdate(e, article._id)}
                                                                 className='w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 rounded-t-lg'
                                                            >
                                                                 <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                                                 </svg>
                                                                 Update
                                                            </button>
                                                            <button
                                                                 onClick={(e) => handleDelete(e, article._id)}
                                                                 className='w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 rounded-b-lg'
                                                            >
                                                                 <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                                                                 </svg>
                                                                 Delete
                                                            </button>
                                                       </div>
                                                  )}
                                             </div>
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
