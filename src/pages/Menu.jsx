import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';
import classNames from 'classnames';

import menuHeroBg from '../assets/menu_hero.jpg';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('entrantes');

    const categories = [
        { id: 'entrantes', label: 'Entrantes' },
        { id: 'delMar', label: 'Del Mar a la Brasa' },
        { id: 'carnes', label: 'Carnes' },
        { id: 'arroces', label: 'Arroces a la Llama' },
    ];

    return (
        <>
            <SEOHead title="Menu" description="Explore our menu of tapas, grilled meats, and flame-cooked rice dishes." />

            <div className="bg-charcoal min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] flex items-center justify-center mb-16">
                    <div className="absolute inset-0">
                        <img
                            src={menuHeroBg}
                            alt="Menu Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                    </div>

                    <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
                        <span className="text-fire-ember uppercase tracking-[0.2em] text-sm font-bold block mb-4">Our Kitchen</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream-white mb-6">Menu</h1>
                        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            A culinary journey through Spain, from the freshness of the sea to the intensity of the grill.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pb-24">

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/10 pb-8 sticky top-24 bg-charcoal/95 backdrop-blur z-30 py-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={classNames(
                                    'px-6 py-2 text-sm md:text-base uppercase tracking-wider transition-all duration-300 border border-transparent rounded-full',
                                    {
                                        'bg-fire-ember text-white shadow-lg shadow-fire-ember/20': activeCategory === cat.id,
                                        'text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5': activeCategory !== cat.id
                                    }
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                        {menuData[activeCategory]?.map((item) => (
                            <MenuCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        ))}
                    </div>

                    {/* Special Notices */}
                    {activeCategory === 'arroces' && (
                        <div className="mt-12 p-6 bg-warm-wood/20 border border-warm-wood/30 text-center rounded">
                            <p className="text-orange-200 italic font-serif text-lg">
                                * Rice dishes require a minimum of 2 people. Price is per person.
                                <br />
                                Please allow 20 minutes for preparation as we cook each rice to order over open flame.
                            </p>
                        </div>
                    )}

                    {/* Allergens Note */}
                    <div className="mt-16 text-center text-xs text-gray-500">
                        Please inform our staff of any food allergies or intolerances.
                    </div>

                </div>
            </div>
        </>
    );
};

export default Menu;
