import React from 'react';
import SEOHead from '../components/SEOHead';

const About = () => {
    return (
        <>
            <SEOHead title="About Us" description="The story of Magori Gastrobar, where tradition meets modern innovation." />

            <div className="pt-32 pb-24 bg-charcoal min-h-screen">
                {/* Header */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-20">
                    <span className="text-olive-green uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-cream-white mt-4 mb-8">Fire & Origin</h1>
                </div>

                {/* Content Section 1 */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1">
                        <p className="text-xl text-fire-ember font-serif italic mb-6">
                            "Cooking is a language through which you can express harmony, creativity, happiness, beauty, and love."
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Magori Gastrobar was born from a desire to reclaim the primal essence of cooking: fire. Located in the heart of Pamplona, we blend the rich culinary heritage of Navarra with modern techniques and global inspiration.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We define ourselves not just as a restaurant, but as a meeting place. A gastrobar is inherently social—it's about the noise of the bar, the clinking of glasses, and dishes designed to be shared.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative group">
                        <div className="absolute inset-0 bg-fire-ember/10 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                        <img
                            src="/chef-cooking.png"
                            alt="Chef cooking"
                            className="relative z-10 w-full shadow-2xl  group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Timeline / Values Section */}
                <div className="bg-neutral-900 py-24 mb-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">🔥</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif">The Fire</h3>
                                <p className="text-gray-400 text-sm">Everything passes through the embers. Oak charcoal gives our dishes that unmistakable smoky seal of authenticity.</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">🌿</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif">The Produce</h3>
                                <p className="text-gray-400 text-sm">We strictly follow the seasons. From local artichokes to Atlantic wild fish, we respect the ingredient above all.</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">🍷</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif">The Cellar</h3>
                                <p className="text-gray-400 text-sm">A curated selection of wines that tell a story. Local Navarrese favorites mixed with bold new world discoveries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
