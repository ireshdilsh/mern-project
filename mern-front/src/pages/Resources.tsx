import '../styles/resources.css';
import { useState } from 'react';

export default function Resources() {
    const [activeCategory, setActiveCategory] = useState('all');

    const resources = [
        {
            category: 'learning',
            title: 'JavaScript Mastery',
            description: 'Comprehensive guide to modern JavaScript, from basics to advanced concepts including ES6+, async/await, and more.',
            type: 'Tutorial Series',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'
        },
        {
            category: 'learning',
            title: 'React Complete Guide',
            description: 'Learn React from scratch with hooks, context API, and best practices for building modern web applications.',
            type: 'Course',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'
        },
        {
            category: 'tools',
            title: 'VS Code Extensions Pack',
            description: 'Essential VS Code extensions every developer needs for productivity, debugging, and code quality.',
            type: 'Development Tools',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000'
        },
        {
            category: 'tools',
            title: 'GitHub Cheat Sheet',
            description: 'Quick reference for Git and GitHub commands, workflows, and best practices for version control.',
            type: 'Cheat Sheet',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000'
        },
        {
            category: 'documentation',
            title: 'MDN Web Docs',
            description: 'The most comprehensive web development documentation for HTML, CSS, JavaScript, and Web APIs.',
            type: 'Documentation',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'
        },
        {
            category: 'documentation',
            title: 'Node.js Documentation',
            description: 'Official Node.js documentation with API references, guides, and best practices for backend development.',
            type: 'Documentation',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000'
        },
        {
            category: 'community',
            title: 'Stack Overflow',
            description: 'The largest community of developers helping each other solve coding problems and share knowledge.',
            type: 'Community',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=13664&format=png&color=000000'
        },
        {
            category: 'community',
            title: 'Dev.to Community',
            description: 'A constructive and inclusive social network for software developers to share articles and engage.',
            type: 'Community',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=7880&format=png&color=000000'
        },
        {
            category: 'learning',
            title: 'TypeScript Deep Dive',
            description: 'Master TypeScript with type system, generics, decorators, and advanced patterns for scalable applications.',
            type: 'eBook',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000'
        },
        {
            category: 'tools',
            title: 'Postman API Testing',
            description: 'Complete guide to API testing, automation, and collaboration using Postman for REST and GraphQL.',
            type: 'Development Tools',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000'
        },
        {
            category: 'learning',
            title: 'Database Design Patterns',
            description: 'Learn SQL and NoSQL database design patterns, optimization techniques, and best practices.',
            type: 'Tutorial Series',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000'
        },
        {
            category: 'tools',
            title: 'Docker Containerization',
            description: 'Comprehensive guide to Docker, containerization, Docker Compose, and deployment strategies.',
            type: 'Development Tools',
            link: '#',
            icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Resources', icon: 'https://img.icons8.com/?size=100&id=82751&format=png&color=000000' },
        { id: 'learning', name: 'Learning', icon: 'https://img.icons8.com/?size=100&id=83162&format=png&color=000000' },
        { id: 'tools', name: 'Tools', icon: 'https://img.icons8.com/?size=100&id=9793&format=png&color=000000' },
        { id: 'documentation', name: 'Documentation', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
        { id: 'community', name: 'Community', icon: 'https://img.icons8.com/?size=100&id=7880&format=png&color=000000' }
    ];

    const filteredResources = activeCategory === 'all' 
        ? resources 
        : resources.filter(resource => resource.category === activeCategory);

    return (
        <div className='flex justify-center items-center flex-col ' id='resources-page'>
            {/* Hero Section */}
            <section className='flex justify-center items-center flex-col mt-20 px-50 w-full'>
                <h1 className='text-6xl font-semibold tracking-tighter text-center'>
                    Developer <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>Resources</span>
                </h1>
                <p className='text-neutral-500 text-center text-lg mt-6 max-w-200'>
                    Curated collection of tutorials, tools, documentation, and community resources to accelerate your development journey.
                </p>
            </section>

            {/* Category Filter */}
            <section className='flex justify-center items-center mt-15 px-50 w-full'>
                <div className='flex justify-center items-center gap-4 flex-wrap'>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-4xl border transition-all ${
                                activeCategory === category.id
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                            }`}
                        >
                            <img src={category.icon} alt={category.name} className='h-5' />
                            <span className='font-medium'>{category.name}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Resources Grid */}
            <section className='flex justify-center items-start mt-15 px-50 w-full max-w-400 mb-20'>
                <div className='grid grid-cols-3 gap-8 w-full'>
                    {filteredResources.map((resource, index) => (
                        <div 
                            key={index} 
                            className='resource-card flex flex-col p-8 border border-neutral-200 rounded-lg hover:shadow-xl transition-all cursor-pointer bg-white'
                        >
                            <div className='flex items-start justify-between mb-4'>
                                <div className='h-14 w-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex justify-center items-center'>
                                    <img src={resource.icon} alt={resource.title} className='h-8' />
                                </div>
                                <span className='text-xs text-neutral-500 bg-neutral-100 px-3 py-1 rounded-4xl'>
                                    {resource.type}
                                </span>
                            </div>
                            
                            <h3 className='text-2xl font-semibold tracking-tight mb-3'>{resource.title}</h3>
                            <p className='text-neutral-600 leading-relaxed mb-6 flex-grow'>{resource.description}</p>
                            
                            <div className='flex items-center gap-2 text-blue-600 font-medium'>
                                <span>Explore Resource</span>
                                <img src="https://img.icons8.com/?size=100&id=39787&format=png&color=2563eb" alt="arrow" className='h-4' />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className='flex justify-center items-center flex-col py-20 px-50 w-full bg-gradient-to-r from-blue-50 via-purple-50 to-red-50'>
                <div className='max-w-200 text-center'>
                    <h2 className='text-4xl font-semibold tracking-tight mb-4'>Can't Find What You're Looking For?</h2>
                    <p className='text-neutral-600 text-lg mb-8'>
                        Submit your resource suggestions and help us build a better library for the community.
                    </p>
                    <button className='bg-black text-white text-lg border-none rounded-4xl cursor-pointer px-10 py-3 font-medium hover:bg-neutral-800 transition-colors'>
                        Submit a Resource
                    </button>
                </div>
            </section>

            {/* Popular Topics */}
            <section className='flex justify-center items-start flex-col mt-20 mb-20 px-50 w-full max-w-300'>
                <h2 className='text-4xl font-semibold tracking-tight mb-10'>Popular Topics</h2>
                <div className='flex flex-wrap gap-3'>
                    {[
                        'JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 
                        'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
                        'API Design', 'Testing', 'DevOps', 'UI/UX', 'Security'
                    ].map((topic, index) => (
                        <span 
                            key={index}
                            className='px-5 py-2 bg-white border border-neutral-300 rounded-4xl text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50 cursor-pointer transition-all'
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}

