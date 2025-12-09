import { useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#pricing", label: "Pricing" },
    { href: "#terms", label: "Terms & Conditions" },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-15 sm:px-25 lg:px-25 pt-5'>
            <nav className='relative flex justify-between items-center w-full'>
                <div className="logo">
                    <img src={logo} alt="logo" className='h-8'/>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex justify-center items-center gap-5'>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className='text-sm font-normal hover:text-gray-700'>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
                    <div className='flex flex-col items-start p-5 gap-4'>
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className='text-sm font-normal w-full pb-2 border-b border-gray-100' onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
