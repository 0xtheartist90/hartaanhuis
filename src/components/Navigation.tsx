'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/registry/new-york-v4/ui/button';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#diensten', label: 'Diensten' },
        { href: '#over-mij', label: 'Over Mij' },
        { href: '#locaties', label: 'Locaties' },
        { href: '#faq', label: 'Veelgestelde vragen' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/Logotopnavhartaanhuis.png"
                            alt="Hart aan Huis Logo"
                            width={180}
                            height={60}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-[#B47038] hover:text-[#E89355] transition-colors font-medium">
                                {link.label}
                            </a>
                        ))}
                        <Button
                            asChild
                            className="bg-[#E89355] hover:bg-[#B47038] text-white">
                            <a
                                href="https://wa.me/31612345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-[#B47038] p-2">
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block text-[#B47038] hover:text-[#E89355] transition-colors font-medium py-2">
                                {link.label}
                            </a>
                        ))}
                        <Button
                            asChild
                            className="w-full bg-[#E89355] hover:bg-[#B47038] text-white">
                            <a
                                href="https://wa.me/31612345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
