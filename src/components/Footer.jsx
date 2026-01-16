import React from 'react';
import { Flame, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 mb-6 group">
                        <Flame className="w-6 h-6 text-fire-ember" />
                        <span className="text-xl font-serif font-bold text-cream-white">MAGORI</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Modern Spanish Gastrobar in the heart of Pamplona. Where fire meets flavor and tradition meets innovation.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-fire-ember hover:text-white transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-fire-ember hover:text-white transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-fire-ember hover:text-white transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-cream-white font-bold uppercase tracking-wider mb-6">Explore</h4>
                    <ul className="space-y-3">
                        <li><Link to="/menu" className="text-gray-400 hover:text-fire-ember transition-colors">Our Menu</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-fire-ember transition-colors">The Story</Link></li>
                        <li><Link to="/gallery" className="text-gray-400 hover:text-fire-ember transition-colors">Gallery</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-fire-ember transition-colors">Reservations</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-cream-white font-bold uppercase tracking-wider mb-6">Visit Us</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>Calle Estafeta, 12</li>
                        <li>31001 Pamplona, Spain</li>
                        <li className="pt-2">+34 948 00 00 00</li>
                        <li>hola@magorigastrobar.es</li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-cream-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex justify-between"><span>Mon - Thu</span> <span>13:00 - 23:30</span></li>
                        <li className="flex justify-between"><span>Fri - Sat</span> <span>13:00 - 01:00</span></li>
                        <li className="flex justify-between"><span>Sunday</span> <span>13:00 - 23:00</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Magori Gastrobar. All rights reserved. | <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
