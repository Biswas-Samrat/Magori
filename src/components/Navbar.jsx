import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import Button from './Button';
import classNames from 'classnames';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={classNames(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                {
                    'bg-charcoal/95 backdrop-blur-md border-white/10 py-3': isScrolled,
                    'bg-transparent py-5': !isScrolled,
                }
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <Flame className="w-8 h-8 text-fire-ember group-hover:text-amber-500 transition-colors" />
                    <span className="text-2xl font-serif tracking-tight font-bold text-cream-white">
                        MAGORI
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={classNames(
                                    'text-sm uppercase tracking-wider font-medium transition-all pb-1 border-b-2',
                                    location.pathname === link.path
                                        ? 'text-white border-white'
                                        : 'text-gray-300 border-transparent hover:text-fire-ember hover:border-fire-ember/50'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Button variant="primary" to="/contact">
                        Reserve
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cream-white hover:text-fire-ember transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={classNames(
                    'md:hidden fixed inset-0 z-40 bg-charcoal transform transition-transform duration-300 ease-in-out pt-24 px-6 flex flex-col gap-6',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-2xl font-serif text-cream-white hover:text-fire-ember transition-colors border-b border-white/10 pb-4"
                    >
                        {link.name}
                    </Link>
                ))}
                <Button variant="primary" to="/contact" className="w-full mt-4">
                    Reserve Table
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
