'use client';

    import { usePathname } from 'next/navigation';
    import Link from 'next/link';

    export default function Navbar({ isMobile = false }) {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'Sobre Nosotros' },
        { href: '/services', label: 'Servicios' },
        { href: '/contact', label: 'Contacto' },
    ];

    return (
        <nav className={isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-8'}>
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#0184c5] transition-colors ${
                pathname === link.href ? 'text-[#313a9d]' : 'text-gray-700'
            }`}
            >
            {link.label}
            </Link>
        ))}
        </nav>
    );
    }