import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <SEOHead title="Contact" description="Get in touch for reservations or events." />

            <div className="pt-32 pb-24 bg-charcoal min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-olive-green uppercase tracking-widest text-sm font-bold">Reservations</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-cream-white mt-4">Contact Us</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-6">Come Visit</h3>
                                <div className="flex gap-4 items-start text-gray-400 mb-4">
                                    <MapPin className="text-fire-ember shrink-0" />
                                    <p>Calle Estafeta, 12<br />31001 Pamplona, Navarra, Spain</p>
                                </div>
                                <div className="flex gap-4 items-center text-gray-400 mb-4">
                                    <Phone className="text-fire-ember shrink-0" />
                                    <p>+34 948 00 00 00</p>
                                </div>
                                <div className="flex gap-4 items-center text-gray-400">
                                    <Mail className="text-fire-ember shrink-0" />
                                    <p>hola@magorigastrobar.es</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-6">Opening Hours</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="flex items-center gap-2"><Clock size={16} /> Mon - Thu</span>
                                        <span>13:00 - 23:30</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="flex items-center gap-2"><Clock size={16} /> Fri - Sat</span>
                                        <span>13:00 - 01:00</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="flex items-center gap-2"><Clock size={16} /> Sunday</span>
                                        <span>13:00 - 23:00</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Map */}
                            <div className="w-full h-64 bg-white/5 rounded-sm overflow-hidden relative">
                                <iframe
                                    title="Map"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?q=Pamplona%20Spain&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    style={{ filter: 'grayscale(100%) invert(90%)' }}
                                ></iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-neutral-900 p-8 md:p-12 border border-white/5 rounded-sm">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Send us a message</h3>
                            <p className="text-gray-400 mb-8">For large groups or private events, please contact us directly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-charcoal border border-white/10 p-3 text-white focus:border-fire-ember focus:outline-none transition-colors"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-charcoal border border-white/10 p-3 text-white focus:border-fire-ember focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="w-full bg-charcoal border border-white/10 p-3 text-white focus:border-fire-ember focus:outline-none transition-colors"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <Button variant="primary" type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
