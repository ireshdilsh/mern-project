import Navbar from "../component/Navbar.tsx";
import '../styles/about.css';

export default function About() {
    return (
        <div className='flex justify-center items-center flex-col' id='about-page'>
            {/* Hero Section */}
            <section className='flex justify-center items-center flex-col mt-20 px-50 w-full'>
                <h1 className='text-6xl font-semibold tracking-tighter text-center'>
                    About <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>DevForum</span>
                </h1>
                <p className='text-neutral-500 text-center text-lg mt-6 max-w-200'>
                    A thriving community where developers share knowledge, inspire innovation, and grow together in the ever-evolving world of technology.
                </p>
            </section>

            {/* Mission Section */}
            <section className='flex justify-center items-start flex-col mt-25 px-50 w-full max-w-300'>
                <div className='w-full border-b border-b-neutral-200 pb-15'>
                    <h2 className='text-4xl font-semibold tracking-tight mb-6'>Our Mission</h2>
                    <p className='text-neutral-700 text-lg leading-relaxed'>
                        DevForum was created to empower developers and IT professionals worldwide. We believe that knowledge sharing is the cornerstone of technological advancement. Our platform provides a space where experienced developers can mentor others, beginners can learn from real-world experiences, and everyone can stay updated with the latest trends in technology.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className='flex justify-center items-start flex-col mt-20 px-50 w-full max-w-300'>
                <h2 className='text-4xl font-semibold tracking-tight mb-10'>What We Stand For</h2>
                <div className='grid grid-cols-3 gap-10 w-full'>
                    <div className='flex flex-col items-start p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow'>
                        <div className='h-15 w-15 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex justify-center items-center mb-5'>
                            <img src="https://img.icons8.com/?size=100&id=83162&format=png&color=ffffff" alt="Knowledge" className='h-8' />
                        </div>
                        <h3 className='text-2xl font-semibold tracking-tight mb-3'>Knowledge Sharing</h3>
                        <p className='text-neutral-600 leading-relaxed'>
                            We believe in the power of shared knowledge. Every article, tutorial, and discussion contributes to the collective growth of the developer community.
                        </p>
                    </div>

                    <div className='flex flex-col items-start p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow'>
                        <div className='h-15 w-15 bg-gradient-to-r from-purple-600 to-red-500 rounded-full flex justify-center items-center mb-5'>
                            <img src="https://img.icons8.com/?size=100&id=83324&format=png&color=ffffff" alt="Innovation" className='h-8' />
                        </div>
                        <h3 className='text-2xl font-semibold tracking-tight mb-3'>Innovation</h3>
                        <p className='text-neutral-600 leading-relaxed'>
                            We encourage creative thinking and innovative solutions. Our platform is where groundbreaking ideas are born and shared with the world.
                        </p>
                    </div>

                    <div className='flex flex-col items-start p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow'>
                        <div className='h-15 w-15 bg-gradient-to-r from-blue-600 to-red-500 rounded-full flex justify-center items-center mb-5'>
                            <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=ffffff" alt="Community" className='h-8' />
                        </div>
                        <h3 className='text-2xl font-semibold tracking-tight mb-3'>Community First</h3>
                        <p className='text-neutral-600 leading-relaxed'>
                            A supportive community is at the heart of DevForum. We foster an environment of respect, collaboration, and mutual growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='flex justify-center items-start flex-col mt-25 px-50 w-full max-w-300'>
                <h2 className='text-4xl font-semibold tracking-tight mb-10'>What You Can Do</h2>
                <div className='flex flex-col gap-8 w-full'>
                    <div className='flex items-start gap-6 p-6 border-l-4 border-l-blue-600 bg-neutral-50'>
                        <img src="https://img.icons8.com/?size=100&id=86387&format=png&color=000000" alt="Write" className='h-12 mt-2' />
                        <div>
                            <h3 className='text-2xl font-semibold tracking-tight mb-2'>Write & Publish</h3>
                            <p className='text-neutral-700 leading-relaxed'>
                                Share your expertise through well-crafted articles. Whether it's a tutorial, a case study, or insights on emerging technologies, your voice matters.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start gap-6 p-6 border-l-4 border-l-purple-600 bg-neutral-50'>
                        <img src="https://img.icons8.com/?size=100&id=85028&format=png&color=000000" alt="Read" className='h-12 mt-2' />
                        <div>
                            <h3 className='text-2xl font-semibold tracking-tight mb-2'>Read & Learn</h3>
                            <p className='text-neutral-700 leading-relaxed'>
                                Explore a vast library of articles covering various programming languages, frameworks, best practices, and industry trends.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start gap-6 p-6 border-l-4 border-l-red-500 bg-neutral-50'>
                        <img src="https://img.icons8.com/?size=100&id=37966&format=png&color=000000" alt="Connect" className='h-12 mt-2' />
                        <div>
                            <h3 className='text-2xl font-semibold tracking-tight mb-2'>Connect & Engage</h3>
                            <p className='text-neutral-700 leading-relaxed'>
                                Interact with fellow developers through likes, comments, and discussions. Build meaningful connections that last beyond the platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className='flex justify-center items-center flex-col mt-25 px-50 w-full bg-gradient-to-r from-blue-50 via-purple-50 to-red-50 py-20'>
                <h2 className='text-4xl font-semibold tracking-tight mb-15'>Growing Together</h2>
                <div className='flex justify-center items-center gap-20'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>10K+</h3>
                        <p className='text-neutral-600 mt-2 text-lg'>Active Developers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-5xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent'>50K+</h3>
                        <p className='text-neutral-600 mt-2 text-lg'>Articles Published</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent'>100K+</h3>
                        <p className='text-neutral-600 mt-2 text-lg'>Monthly Readers</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='flex justify-center items-center flex-col mt-25 mb-20 px-50'>
                <h2 className='text-4xl font-semibold tracking-tight mb-6 text-center'>Join Our Community</h2>
                <p className='text-neutral-600 text-lg text-center max-w-200 mb-8'>
                    Whether you're a seasoned developer or just starting your journey, DevForum welcomes you. Start sharing your knowledge today.
                </p>
                <div className='flex justify-center items-center gap-6'>
                    <button className='bg-black text-white text-lg border-none rounded-4xl cursor-pointer px-10 py-3 font-medium hover:bg-neutral-800 transition-colors'>
                        Get Started
                    </button>
                    <button className='border border-neutral-300 text-lg rounded-4xl cursor-pointer px-10 py-3 font-medium hover:bg-neutral-50 transition-colors'>
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
}

