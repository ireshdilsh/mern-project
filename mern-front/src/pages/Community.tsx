import Navbar from "../component/Navbar.tsx";
import '../styles/community.css';
import { useState } from 'react';

export default function Community() {
    const [activeTab, setActiveTab] = useState('discussions');

    const discussions = [
        {
            title: 'Best practices for React hooks in 2025',
            author: 'Sarah Chen',
            replies: 24,
            likes: 156,
            category: 'React',
            time: '2 hours ago',
            avatar: 'https://img.icons8.com/?size=100&id=23264&format=png&color=000000'
        },
        {
            title: 'How to optimize MongoDB queries for large datasets?',
            author: 'Michael Rodriguez',
            replies: 18,
            likes: 89,
            category: 'Database',
            time: '5 hours ago',
            avatar: 'https://img.icons8.com/?size=100&id=23265&format=png&color=000000'
        },
        {
            title: 'TypeScript vs JavaScript: When to use which?',
            author: 'Emily Johnson',
            replies: 42,
            likes: 234,
            category: 'TypeScript',
            time: '1 day ago',
            avatar: 'https://img.icons8.com/?size=100&id=23266&format=png&color=000000'
        },
        {
            title: 'Docker deployment strategies for microservices',
            author: 'David Park',
            replies: 31,
            likes: 178,
            category: 'DevOps',
            time: '1 day ago',
            avatar: 'https://img.icons8.com/?size=100&id=23267&format=png&color=000000'
        },
        {
            title: 'API security best practices for production apps',
            author: 'Lisa Anderson',
            replies: 27,
            likes: 145,
            category: 'Security',
            time: '2 days ago',
            avatar: 'https://img.icons8.com/?size=100&id=23268&format=png&color=000000'
        },
        {
            title: 'Building real-time chat with WebSockets and Node.js',
            author: 'James Wilson',
            replies: 35,
            likes: 201,
            category: 'Node.js',
            time: '2 days ago',
            avatar: 'https://img.icons8.com/?size=100&id=23269&format=png&color=000000'
        }
    ];

    const events = [
        {
            title: 'Web Development Masterclass',
            date: 'Nov 15, 2025',
            time: '10:00 AM EST',
            type: 'Online Workshop',
            attendees: 342,
            icon: 'https://img.icons8.com/?size=100&id=53439&format=png&color=000000'
        },
        {
            title: 'React Summit 2025',
            date: 'Nov 22, 2025',
            time: '9:00 AM PST',
            type: 'Conference',
            attendees: 1250,
            icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'
        },
        {
            title: 'DevOps Best Practices',
            date: 'Dec 5, 2025',
            time: '2:00 PM GMT',
            type: 'Webinar',
            attendees: 567,
            icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
        },
        {
            title: 'AI & Machine Learning for Developers',
            date: 'Dec 12, 2025',
            time: '11:00 AM EST',
            type: 'Online Workshop',
            attendees: 423,
            icon: 'https://img.icons8.com/?size=100&id=kOPTH4LMkQh3&format=png&color=000000'
        }
    ];

    const members = [
        {
            name: 'Sarah Chen',
            role: 'Full Stack Developer',
            articles: 45,
            followers: 1234,
            avatar: 'https://img.icons8.com/?size=100&id=23264&format=png&color=000000'
        },
        {
            name: 'Michael Rodriguez',
            role: 'Backend Engineer',
            articles: 32,
            followers: 856,
            avatar: 'https://img.icons8.com/?size=100&id=23265&format=png&color=000000'
        },
        {
            name: 'Emily Johnson',
            role: 'Frontend Specialist',
            articles: 58,
            followers: 2341,
            avatar: 'https://img.icons8.com/?size=100&id=23266&format=png&color=000000'
        },
        {
            name: 'David Park',
            role: 'DevOps Engineer',
            articles: 41,
            followers: 1567,
            avatar: 'https://img.icons8.com/?size=100&id=23267&format=png&color=000000'
        },
        {
            name: 'Lisa Anderson',
            role: 'Security Expert',
            articles: 36,
            followers: 1089,
            avatar: 'https://img.icons8.com/?size=100&id=23268&format=png&color=000000'
        },
        {
            name: 'James Wilson',
            role: 'Mobile Developer',
            articles: 29,
            followers: 743,
            avatar: 'https://img.icons8.com/?size=100&id=23269&format=png&color=000000'
        }
    ];

    return (
        <div className='flex justify-center items-center flex-col' id='community-page'>
            {/* Hero Section */}
            <section className='flex justify-center items-center flex-col mt-20 px-50 w-full'>
                <h1 className='text-6xl font-semibold tracking-tighter text-center'>
                    Join the <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>Community</span>
                </h1>
                <p className='text-neutral-500 text-center text-lg mt-6 max-w-200'>
                    Connect with thousands of developers, participate in discussions, attend events, and grow together.
                </p>
            </section>

            {/* Stats Section */}
            <section className='flex justify-center items-center gap-15 mt-15 px-50 w-full'>
                <div className='flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-lg w-48'>
                    <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000" alt="Members" className='h-10 mb-3' />
                    <h3 className='text-3xl font-bold tracking-tighter'>12,500+</h3>
                    <p className='text-neutral-600 text-sm mt-1'>Active Members</p>
                </div>
                <div className='flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-lg w-48'>
                    <img src="https://img.icons8.com/?size=100&id=37966&format=png&color=000000" alt="Discussions" className='h-10 mb-3' />
                    <h3 className='text-3xl font-bold tracking-tighter'>8,300+</h3>
                    <p className='text-neutral-600 text-sm mt-1'>Discussions</p>
                </div>
                <div className='flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-lg w-48'>
                    <img src="https://img.icons8.com/?size=100&id=53439&format=png&color=000000" alt="Events" className='h-10 mb-3' />
                    <h3 className='text-3xl font-bold tracking-tighter'>150+</h3>
                    <p className='text-neutral-600 text-sm mt-1'>Events Hosted</p>
                </div>
                <div className='flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-lg w-48'>
                    <img src="https://img.icons8.com/?size=100&id=85028&format=png&color=000000" alt="Views" className='h-10 mb-3' />
                    <h3 className='text-3xl font-bold tracking-tighter'>2M+</h3>
                    <p className='text-neutral-600 text-sm mt-1'>Monthly Views</p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className='flex justify-center items-center mt-20 px-50 w-full'>
                <div className='flex justify-center items-center gap-4'>
                    <button
                        onClick={() => setActiveTab('discussions')}
                        className={`px-8 py-3 rounded-4xl font-medium transition-all ${
                            activeTab === 'discussions'
                                ? 'bg-black text-white'
                                : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                        }`}
                    >
                        Discussions
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-8 py-3 rounded-4xl font-medium transition-all ${
                            activeTab === 'events'
                                ? 'bg-black text-white'
                                : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                        }`}
                    >
                        Events
                    </button>
                    <button
                        onClick={() => setActiveTab('members')}
                        className={`px-8 py-3 rounded-4xl font-medium transition-all ${
                            activeTab === 'members'
                                ? 'bg-black text-white'
                                : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                        }`}
                    >
                        Top Members
                    </button>
                </div>
            </section>

            {/* Content Section */}
            <section className='flex justify-start items-start mt-10 px-50 w-full max-w-300 mb-20'>
                {activeTab === 'discussions' && (
                    <div className='flex flex-col gap-6 w-full'>
                        {discussions.map((discussion, index) => (
                            <div
                                key={index}
                                className='discussion-card flex items-start gap-6 p-8 bg-white border border-neutral-200 rounded-lg hover:shadow-lg transition-all cursor-pointer'
                            >
                                <img src={discussion.avatar} alt={discussion.author} className='h-14 w-14 rounded-full' />
                                <div className='flex-grow'>
                                    <div className='flex items-start justify-between mb-2'>
                                        <div>
                                            <h3 className='text-2xl font-semibold tracking-tight mb-2'>{discussion.title}</h3>
                                            <p className='text-neutral-600 text-sm'>
                                                by <span className='font-medium'>{discussion.author}</span> • {discussion.time}
                                            </p>
                                        </div>
                                        <span className='text-xs bg-blue-100 text-blue-900 px-3 py-1 rounded-4xl'>
                                            {discussion.category}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-6 mt-4'>
                                        <div className='flex items-center gap-2'>
                                            <img src="https://img.icons8.com/?size=100&id=37966&format=png&color=666666" alt="replies" className='h-4' />
                                            <span className='text-neutral-600 text-sm'>{discussion.replies} replies</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img src="https://img.icons8.com/?size=100&id=33481&format=png&color=666666" alt="likes" className='h-4' />
                                            <span className='text-neutral-600 text-sm'>{discussion.likes} likes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'events' && (
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className='event-card flex flex-col p-8 bg-white border border-neutral-200 rounded-lg hover:shadow-lg transition-all'
                            >
                                <div className='flex items-start justify-between mb-6'>
                                    <div className='h-16 w-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex justify-center items-center'>
                                        <img src={event.icon} alt={event.title} className='h-10' />
                                    </div>
                                    <span className='text-xs bg-green-100 text-green-900 px-3 py-1 rounded-4xl'>
                                        {event.type}
                                    </span>
                                </div>
                                <h3 className='text-2xl font-semibold tracking-tight mb-3'>{event.title}</h3>
                                <div className='flex flex-col gap-2 mb-6'>
                                    <div className='flex items-center gap-2 text-neutral-600'>
                                        <img src="https://img.icons8.com/?size=100&id=11500&format=png&color=666666" alt="date" className='h-4' />
                                        <span className='text-sm'>{event.date}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-neutral-600'>
                                        <img src="https://img.icons8.com/?size=100&id=43876&format=png&color=666666" alt="time" className='h-4' />
                                        <span className='text-sm'>{event.time}</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between pt-6 border-t border-neutral-200'>
                                    <div className='flex items-center gap-2'>
                                        <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=666666" alt="attendees" className='h-4' />
                                        <span className='text-sm text-neutral-600'>{event.attendees} attending</span>
                                    </div>
                                    <button className='bg-black text-white text-sm px-6 py-2 rounded-4xl hover:bg-neutral-800 transition-colors'>
                                        Join Event
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'members' && (
                    <div className='grid grid-cols-3 gap-8 w-full'>
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className='member-card flex flex-col items-center p-8 bg-white border border-neutral-200 rounded-lg hover:shadow-lg transition-all text-center'
                            >
                                <img src={member.avatar} alt={member.name} className='h-20 w-20 rounded-full mb-4' />
                                <h3 className='text-xl font-semibold tracking-tight mb-1'>{member.name}</h3>
                                <p className='text-neutral-600 text-sm mb-6'>{member.role}</p>
                                <div className='flex items-center gap-8 mb-6'>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-2xl font-bold'>{member.articles}</span>
                                        <span className='text-xs text-neutral-600'>Articles</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span className='text-2xl font-bold'>{member.followers}</span>
                                        <span className='text-xs text-neutral-600'>Followers</span>
                                    </div>
                                </div>
                                <button className='border border-neutral-300 text-sm px-6 py-2 rounded-4xl hover:bg-neutral-50 transition-colors w-full'>
                                    Follow
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className='flex justify-center items-center flex-col py-20 px-50 w-full bg-gradient-to-r from-blue-50 via-purple-50 to-red-50'>
                <h2 className='text-4xl font-semibold tracking-tight mb-4 text-center'>Start Your First Discussion</h2>
                <p className='text-neutral-600 text-lg text-center max-w-200 mb-8'>
                    Have a question or want to share your knowledge? Our community is here to help and learn together.
                </p>
                <div className='flex gap-4'>
                    <button className='bg-black text-white text-lg border-none rounded-4xl cursor-pointer px-10 py-3 font-medium hover:bg-neutral-800 transition-colors'>
                        Start Discussion
                    </button>
                    <button className='border border-neutral-300 text-lg rounded-4xl cursor-pointer px-10 py-3 font-medium hover:bg-white transition-colors'>
                        Browse Topics
                    </button>
                </div>
            </section>
        </div>
    );
}

