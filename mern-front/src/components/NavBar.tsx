import { useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#stories", label: "Stories" },
    { href: "#community", label: "Community" },
    { href: "#resources", label: "Resources" },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-6 sm:px-12 lg:px-24 py-4 bg-white border-b border-neutral-100 sticky top-0 z-50'>
            <nav className='relative flex justify-between items-center w-full max-w-7xl mx-auto'>
                <div className="logo flex items-center cursor-pointer">
                    <img src={logo} alt="logo" className='h-9 w-auto'/>
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex justify-center items-center gap-8'>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className='text-sm font-medium text-neutral-700 hover:text-black transition-colors duration-200 cursor-pointer'>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-800 hover:text-black transition-colors cursor-pointer focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl border border-neutral-100 absolute left-4 right-4 top-16">
                    <div className='flex flex-col items-start p-6 gap-1'>
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className='text-sm font-medium text-neutral-700 hover:text-black w-full py-3 transition-colors cursor-pointer' onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <div className='w-full border-t border-neutral-100 my-2'></div>
                        <button className='w-full text-left py-3 text-sm font-medium text-neutral-700 hover:text-black transition-colors cursor-pointer'>
                            Sign In
                        </button>
                        <button className='w-full mt-2 px-6 py-3 text-sm font-medium bg-black text-white rounded-md hover:bg-neutral-800 transition-all cursor-pointer'>
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
