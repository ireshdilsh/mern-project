import '../styles/landing.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Album = {
    _id: string;
    title: string;
};

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        loadAllAlbums()
    }, []);

    const [openCreateAlbumModal, setOpenCreateAlbumModal] = useState(false)

    const openSaveAlbumModal = () => {
        setOpenCreateAlbumModal(true)
    }

    const [title, setTitle] = useState('')
    const [albums, setAlbums] = useState<Album[] | null>(null)

    const saveAlbum = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const resp = await axios.post('http://localhost:5000/albums/api/v1/create/new/album', {
                title: title
            })

            if(resp.status === 200){
                setOpenCreateAlbumModal(false)
                setTitle('')
                console.log(resp)
                loadAllAlbums()
            }
        }catch (e) {
            console.error(e)
        }
    }

    const loadAllAlbums  = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/albums/api/v1/get/all/albums')
            setAlbums(resp.data.albums)
        }catch(err) {
            console.error(err)
        }
    }

    const handleAlbumClick = (albumId: string) => {
        navigate(`/album/${albumId}`);
    }


    return (
        <div className='flex justify-center items-start w-full flex-col h-full'>
            <nav className='flex justify-between items-center w-full px-35 py-3 border-b border-b-neutral-200'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='logo cursor-pointer'>MemoraAI</div>
                </div>
                {/*<div className='flex justify-center items-center gap-5'>*/}
                {/*    <p>Create Album</p>*/}
                {/*    <p>Upload Image</p>*/}
                {/*</div>*/}
            </nav>

            <div className='flex justify-start items-start flex-col px-35 py-10 w-full'>
                <div>
                    <h1 className='text-2xl font-medium text-[#333] tracking-tighter'>My Albums</h1>
                    <button onClick={openSaveAlbumModal}
                            className='mt-5 border border-neutral-200 flex justify-center items-center flex-col cursor-pointer p-8 rounded-md text-[#333] font-medium'>
                        <img className='h-8 mb-4'
                             src="https://img.icons8.com/?size=100&id=114100&format=png&color=333333" alt=""/>Create New
                        Album
                    </button>
                </div>
                <div className='mt-8'>
                    <div className='mt-10 flex justify-center items-center gap-5'>
                        {albums && albums.map((album:Album) => (
                            <div
                                key={album._id}
                                className='p-5 mb-5 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 rounded-lg transition-colors'
                                onClick={() => handleAlbumClick(album._id)}
                            >
                                <img className='h-15' src="https://img.icons8.com/?size=100&id=12160&format=png&color=000000" alt="album-icon"/>
                                <p className='text-base font-medium text-[#333] mt-2'>{album.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {openCreateAlbumModal && (
                <div className='w-full h-full flex justify-center items-center absolute top-0 ' id='modal-overlay'>
                    <div className='flex flex-col p-10 bg-white rounded-md w-xl'>
                        <h1 className='text-xl font-medium text-[#333] tracking-tighter'>Create New Album</h1>
                        <p className='text-neutral-400 text-sm'>Give your album a name and start collecting your favorite memories.</p>
                        <div className='mt-5 flex flex-col gap-4'>
                            <p className='text-[#333]'>Album Name</p>
                            <input type="text"
                                   value={title}
                                      onChange={(e) => setTitle(e.target.value)}
                                   className='border border-neutral-200 rounded-md px-4 py-2 outline-none' placeholder='Enter album name'/>
                            <div className='flex justify-end items-center gap-4 mt-6'>
                                <button onClick={() => {
                                    setOpenCreateAlbumModal(false)
                                }} className='px-4 py-2 rounded-md border border-neutral-200 font-medium cursor-pointer'>Cancel
                                </button>
                                <button onClick={saveAlbum} className='px-4 py-2 rounded-md bg-black text-white font-medium cursor-pointer'>Create Album</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
