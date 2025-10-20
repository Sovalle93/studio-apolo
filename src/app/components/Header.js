    'use client';

    import { useState } from 'react';
    import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
    import Link from 'next/link';
    import Navbar from './Navbar';
    import Image from 'next/image';

    export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const baseUrl = "https://res.cloudinary.com/dmivjpb65/image/upload";
    const logoTransformations = "f_auto,q_auto,w_120";
    const logoUrl = `${baseUrl}/${logoTransformations}/v1745007297/Screenshot_2025-04-18_161258_zuv9xb.png`;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            {/* Enhanced Logo with Cloudinary optimizations */}
            <Link href="/" className="flex items-center group">
                <Image 
                src={logoUrl}
                alt="Studio Apolo Logo"
                className="h-12 w-auto transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.02]"
                width={120}
                height={48}
                loading="eager"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
                ) : (
                <Bars3Icon className="h-6 w-6" />
                )}
            </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
                <Navbar isMobile />
            </div>
            )}
        </div>
        </header>
    );
    }