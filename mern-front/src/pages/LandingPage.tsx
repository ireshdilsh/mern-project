import { useState } from "react";
import NavBar from "../components/NavBar.tsx";
import About from "./About.tsx";
import Features from "./Features.tsx";
import HeroSection from "./HeroSection.tsx";

export default function LandingPage() {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    const openSigninModal = () => {
        setSignin(true);
        setSignup(false);
    };

    const openSignupModal = () => {
        setSignup(true);
        setSignin(false);
    };

    const closeModals = () => {
        setSignin(false);
        setSignup(false);
    };

    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <HeroSection 
                signin={signin}
                signup={signup}
                openSigninModal={openSigninModal}
                openSignupModal={openSignupModal}
                closeModals={closeModals}
            />
            <Features/>
            <About openSigninModal={openSigninModal} />
            
            {/* Stories Section */}
            <section id="stories" className="bg-neutral-50 py-20 lg:py-24">
                <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                            Featured Stories
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Discover inspiring content from our community of talented writers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <img 
                                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" 
                                alt="Writing and creativity" 
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" 
                                        alt="Author" 
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="text-sm text-neutral-600">Emily Carter</span>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                    The Art of Storytelling in Modern Times
                                </h3>
                                <p className="text-neutral-600 line-clamp-2">
                                    Explore how storytelling has evolved and why it remains one of humanity's most powerful tools for connection...
                                </p>
                                <div className="flex items-center gap-4 pt-2 text-sm text-neutral-500">
                                    <span>5 min read</span>
                                    <span>•</span>
                                    <span>Dec 18, 2025</span>
                                </div>
                            </div>
                        </article>

                        <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <img 
                                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80" 
                                alt="Writer at work" 
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" 
                                        alt="Author" 
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="text-sm text-neutral-600">James Mitchell</span>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                    Building a Successful Writing Career
                                </h3>
                                <p className="text-neutral-600 line-clamp-2">
                                    Learn the essential strategies and mindset shifts that can transform your passion into a thriving career...
                                </p>
                                <div className="flex items-center gap-4 pt-2 text-sm text-neutral-500">
                                    <span>8 min read</span>
                                    <span>•</span>
                                    <span>Dec 15, 2025</span>
                                </div>
                            </div>
                        </article>

                        <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                            <img 
                                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80" 
                                alt="Creative writing space" 
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" 
                                        alt="Author" 
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="text-sm text-neutral-600">Maya Patel</span>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                    Finding Your Unique Voice as a Writer
                                </h3>
                                <p className="text-neutral-600 line-clamp-2">
                                    Discover practical techniques to develop an authentic writing style that resonates with your audience...
                                </p>
                                <div className="flex items-center gap-4 pt-2 text-sm text-neutral-500">
                                    <span>6 min read</span>
                                    <span>•</span>
                                    <span>Dec 12, 2025</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="text-center mt-12">
                        <button onClick={()=>{setSignin(true)}} className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 cursor-pointer">
                            Explore All Stories
                        </button>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section id="community" className="bg-white py-20 lg:py-24">
                <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                            Join a Thriving Community
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Connect with fellow writers, share feedback, and grow together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4 p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:shadow-lg transition-all cursor-pointer">
                            <div className="text-5xl">💬</div>
                            <h3 className="text-xl font-semibold text-neutral-900">Active Discussions</h3>
                            <p className="text-neutral-600">
                                Engage in meaningful conversations and get feedback on your work.
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:shadow-lg transition-all cursor-pointer">
                            <div className="text-5xl">🏆</div>
                            <h3 className="text-xl font-semibold text-neutral-900">Writing Challenges</h3>
                            <p className="text-neutral-600">
                                Participate in monthly challenges and showcase your creativity.
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 bg-neutral-50 rounded-xl border border-neutral-200 hover:shadow-lg transition-all cursor-pointer">
                            <div className="text-5xl">📚</div>
                            <h3 className="text-xl font-semibold text-neutral-900">Learning Resources</h3>
                            <p className="text-neutral-600">
                                Access tutorials, guides, and tips from experienced writers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="bg-neutral-50 py-20 lg:py-24">
                <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                            Resources to Help You Grow
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Everything you need to become a better writer and reach more readers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl border border-neutral-200 p-8 space-y-4 hover:shadow-xl transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📖</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-900">Writing Guides</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Comprehensive guides covering everything from grammar basics to advanced storytelling techniques.
                            </p>
                            <button className="text-sm font-semibold text-black hover:underline cursor-pointer">
                                Browse Guides →
                            </button>
                        </div>

                        <div className="bg-white rounded-xl border border-neutral-200 p-8 space-y-4 hover:shadow-xl transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-900">Video Tutorials</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Step-by-step video courses to master writing, editing, and publishing on our platform.
                            </p>
                            <button className="text-sm font-semibold text-black hover:underline cursor-pointer">
                                Watch Tutorials →
                            </button>
                        </div>

                        <div className="bg-white rounded-xl border border-neutral-200 p-8 space-y-4 hover:shadow-xl transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-900">Writing Prompts</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Daily prompts and creative exercises to spark inspiration and overcome writer's block.
                            </p>
                            <button className="text-sm font-semibold text-black hover:underline cursor-pointer">
                                Get Inspired →
                            </button>
                        </div>

                        <div className="bg-white rounded-xl border border-neutral-200 p-8 space-y-4 hover:shadow-xl transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-900">Growth Strategies</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Learn proven strategies to grow your audience and maximize your content's reach.
                            </p>
                            <button className="text-sm font-semibold text-black hover:underline cursor-pointer">
                                Learn More →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black text-white py-20 lg:py-24">
                <div className="px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Ready to Share Your Story?
                    </h2>
                    <p className="text-xl text-neutral-300">
                        Join thousands of writers who are already sharing their voices with the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={()=>{setSignup(true)}} className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-100 transition-all duration-200 cursor-pointer">
                            Get Started Free
                        </button>
                        <button onClick={()=>{setSignin(true)}} className="px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
                <div className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-neutral-900">Product</h4>
                            <ul className="space-y-2 text-sm text-neutral-600">
                                <li><a href="#" className="hover:text-black cursor-pointer">Features</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Templates</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-neutral-900">Company</h4>
                            <ul className="space-y-2 text-sm text-neutral-600">
                                <li><a href="#" className="hover:text-black cursor-pointer">About Us</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Careers</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Blog</a></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-neutral-900">Resources</h4>
                            <ul className="space-y-2 text-sm text-neutral-600">
                                <li><a href="#" className="hover:text-black cursor-pointer">Help Center</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Community</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Guides</a></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-semibold text-neutral-900">Legal</h4>
                            <ul className="space-y-2 text-sm text-neutral-600">
                                <li><a href="#" className="hover:text-black cursor-pointer">Privacy</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Terms</a></li>
                                <li><a href="#" className="hover:text-black cursor-pointer">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-neutral-600">© 2025 BlogSpace. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-neutral-600 hover:text-black cursor-pointer">
                                <span className="text-xl">𝕏</span>
                            </a>
                            <a href="#" className="text-neutral-600 hover:text-black cursor-pointer">
                                <span className="text-xl">in</span>
                            </a>
                            <a href="#" className="text-neutral-600 hover:text-black cursor-pointer">
                                <span className="text-xl">f</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
