import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { href: '#diensten', label: 'Diensten' },
        { href: '#over-mij', label: 'Over mij' },
        { href: '#locaties', label: 'Locaties' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#B47038] text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Image
                            src="/images/Logofooterhartaanhuis.png"
                            alt="Hart aan Huis Logo"
                            width={200}
                            height={70}
                            className="h-14 w-auto mb-4 object-contain"
                        />
                        <p className="text-white/90">
                            Persoonlijke thuiszorg en begeleiding met aandacht, vertrouwen en warmte.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading text-xl mb-4">Snelle Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-white/90 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-xl mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <a
                                    href="mailto:info@hartaanhuis.nl"
                                    className="text-white/90 hover:text-white transition-colors">
                                    info@hartaanhuis.nl
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                <a
                                    href="tel:+31612345678"
                                    className="text-white/90 hover:text-white transition-colors">
                                    +31 6 1234 5678
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                <a
                                    href="https://wa.me/31612345678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 text-center text-white/80 text-sm">
                    <p>&copy; {new Date().getFullYear()} Hart aan Huis. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
