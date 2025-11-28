import '../styles/landing.css'

export default function Dashboard() {
    return (
        <div className='flex justify-center items-center w-full'>
            <nav className='flex justify-between items-center w-full px-35 py-3 border-b border-b-neutral-200'>
                <div className='logo cursor-pointer'>MemoraAI</div>
                <div className='flex justify-center items-center gap-5'>
                    <p className='cursor-pointer'>My Memories</p>
                    <p className='cursor-pointer'>Create New</p>
                    <p className='cursor-pointer'>Settings</p>
                    <div className='w-8 h-8 rounded-full bg-neutral-400 flex justify-center items-center text-white cursor-pointer'>A</div>
                </div>
            </nav>
        </div>
    )
}
