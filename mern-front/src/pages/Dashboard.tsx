import '../styles/landing.css'
import {useState} from "react";

export default function Dashboard() {

    const [openCreateAlbumModal, setOpenCreateAlbumModal] = useState(false)

    const openSaveAlbumModal = () => {
        setOpenCreateAlbumModal(true)
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
                <div className='mt-15'>
                    <h1 className='text-2xl font-medium text-[#333] tracking-tighter'>Recent Albums</h1>
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
                                   className='border border-neutral-200 rounded-md px-4 py-2 outline-none' placeholder='Enter album name'/>
                            <div className='flex justify-end items-center gap-4 mt-6'>
                                <button onClick={() => {
                                    setOpenCreateAlbumModal(false)
                                }} className='px-4 py-2 rounded-md border border-neutral-200 font-medium cursor-pointer'>Cancel
                                </button>
                                <button className='px-4 py-2 rounded-md bg-black text-white font-medium cursor-pointer'>Create Album</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
