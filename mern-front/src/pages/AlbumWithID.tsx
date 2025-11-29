import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

type Album = {
    _id: string;
    title: string;
};

export default function AlbumWithId() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState<Album | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            loadAlbumDetails();
        }
    }, [id]);

    const loadAlbumDetails = async () => {
        try {
            setLoading(true);
            const resp = await axios.get(`http://localhost:5000/albums/api/v1/get/album/details/${id}`);
            setAlbum(resp.data.selectedAlbumDetails);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to load album details");
        } finally {
            setLoading(false);
        }
    };

    const goBackToDashboard = () => {
        navigate('/user/dashboard');
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <p className='text-lg'>Loading album...</p>
            </div>
        );
    }

    if (error || !album) {
        return (
            <div className='flex justify-center items-center h-screen flex-col'>
                <p className='text-lg text-red-500 mb-4'>{error || "Album not found"}</p>
                <button
                    onClick={goBackToDashboard}
                    className='px-4 py-2 bg-black text-white rounded-md cursor-pointer'
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className='flex justify-start items-start w-full flex-col h-full'>
            <nav className='flex justify-between items-center w-full px-35 py-3 border-b border-b-neutral-200'>
                    <div className='logo cursor-pointer' onClick={goBackToDashboard}>MemoraAI</div>
            </nav>

            <div className='flex justify-start items-start flex-col px-35 py-10 w-full'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-medium text-[#333] tracking-tighter'>{album.title}</h1>
                    <p className='text-neutral-500 mt-2'>Album ID: {id}</p>
                </div>

                <div className='w-full'>
                    <div className='flex justify-center items-center p-20 border-2 border-dashed border-neutral-200 rounded-lg'>
                        <div className='text-center'>
                            <img
                                className='h-16 mx-auto mb-4 opacity-50'
                                src="https://img.icons8.com/?size=100&id=GiNKOzxL3w6e&format=png&color=999999"
                                alt="album-icon"
                            />
                            <p className='text-lg text-neutral-400'>No images in this album yet</p>
                            <p className='text-sm text-neutral-400 mt-2'>Upload some photos to get started</p>
                            <button className='mt-4 px-6 py-2 bg-black text-white rounded-md cursor-pointer font-medium'>
                                Upload Images
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
