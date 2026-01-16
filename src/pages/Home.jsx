import React from 'react';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import { Flame, Utensils, Wine, MapPin } from 'lucide-react';
import historyLarge from '../assets/history/Large_pik.png';
import historySmall from '../assets/history/small_pik.png';
import welcomeWaffle from '../assets/wellcome/toasted-waffles-5681988_1920.jpg';
import welcomeSteak from '../assets/wellcome/steak-2210465_1920.jpg';
import welcomeBread from '../assets/wellcome/pan-de-jamon-5941368_1920.jpg';
import heroMobile from '../assets/hero_only for mobail.png';

const Home = () => {
    return (
        <>
            <SEOHead title="Home" />

            {/* HERO SECTION */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Mobile Hero Image */}
                    <img
                        src={heroMobile}
                        alt="Fire Cooking"
                        className="w-full h-full object-cover object-top md:hidden"
                    />
                    {/* Desktop Hero Image */}
                    <img
                        src="/hero-bg.png"
                        alt="Fire Cooking"
                        className="hidden md:block w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-charcoal md:bg-gradient-to-t md:from-charcoal md:via-charcoal/60 md:to-charcoal/30"></div>
                </div>

                <div className="absolute top-[45%] md:top-1/2 left-0 right-0 md:transform md:-translate-y-1/2 z-10 text-center px-4 max-w-4xl mx-auto">
                    <p className="text-amber-450 font-medium tracking-[0.2em] mb-4 animate-fade-in-up">WELCOME TO MAGORI</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Fire. Flavor. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fire-ember">Spain.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 font-light tracking-wide animate-fade-in-up delay-200">
                        Modern Spanish Gastrobar · Tapas · A la Brasa
                    </p>
                    <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
                        <Button to="/menu" variant="primary" className="px-6 py-2 text-sm md:text-base">View Menu</Button>
                        <Button to="/contact" variant="outline" className="px-6 py-2 text-sm md:text-base">Reserve Table</Button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50"></div>
                </div>
            </section>

            {/* HISTORY & GOALS SECTION */}
            <section className="py-20 md:py-32 bg-charcoal overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Large Image */}
                    {/* Left Column: Large Image */}
                    <div className="relative h-full h-[450px] flex items-center">
                        <img
                            src={historyLarge}
                            alt="Interior Atmosphere"
                            className="w-[85%] h-full object-cover rounded-tl-[150px] shadow-2xl"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center gap-16">
                        {/* Top Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-wide text-cream-white mb-6 uppercase">
                                Our Goals & History
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                                Magori is where haute cuisine meets the casual atmosphere of a traditional tavern. We believe in the power of social dining—sharing plates, raising glasses, and enjoying the moment. Our kitchen centers around <span className="text-fire-ember font-serif italic">fire</span>. From our charcoal grilled meats to our flame-cooked rice dishes, everything is touched by smoke and ember.
                            </p>
                            <Button to="/about" variant="outline" className="text-xs px-8 py-3 border-cream-white/30 hover:bg-white hover:text-charcoal transition-all">
                                READ MORE
                            </Button>
                        </div>

                        {/* Bottom Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <img
                                src={historySmall}
                                alt="Culinary Detail"
                                className="w-full h-full object-cover shadow-lg aspect-square rounded-tl-[80px]"
                            />
                            <div className="flex flex-col justify-between h-full py-2">
                                <div>
                                    <h3 className="text-xs font-bold tracking-[0.2em] text-blue-200/80 uppercase mb-4">Opening Hours</h3>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>Mon - Thu: 10 am - 01 am</p>
                                        <p>Fri - Sun: 10 am - 02 am</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WELCOME SECTION */}
            <section className="py-24 bg-charcoal">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-wide text-cream-white mb-6 uppercase">
                            Welcome to Magori
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Magori Gastrobar continues to innovate and perfect its traditions, making tapas, grilled meats, and rice dishes with passion. We are committed to providing our customers with fresh experiences that are made with high quality seasonal ingredients.
                        </p>
                        <div className="flex justify-center">
                            <Button to="/about" variant="ghost" className="text-fire-ember font-bold text-xs tracking-widest uppercase border-b-2 border-fire-ember pb-1 hover:text-white hover:border-white transition-all">
                                Discover More
                            </Button>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-[75%] aspect-[3/4] overflow-hidden rounded-t-[45%] mb-8 relative">
                                <img
                                    src={welcomeWaffle}
                                    alt="Creative Tapas"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <h3 className="text-2xl font-serif  group-hover:text-white transition-colors uppercase tracking-wider">
                                Creative Tapas
                            </h3>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center group cursor-pointer mt-0 md:mt-12">
                            <div className="w-[75%] aspect-[3/4] overflow-hidden rounded-t-[45%] mb-8 relative">
                                <img
                                    src={welcomeSteak}
                                    alt="Coal Grill"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <h3 className="text-2xl font-serif  group-hover:text-white transition-colors uppercase tracking-wider">
                                Coal Grill
                            </h3>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-[75%] aspect-[3/4] overflow-hidden rounded-t-[45%] mb-8 relative">
                                <img
                                    src={welcomeBread}
                                    alt="Tradition"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <h3 className="text-2xl font-serif  group-hover:text-white transition-colors uppercase tracking-wider">
                                Tradition
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIGNATURE EXPERIENCES */}
            <section className="py-24 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-olive-green uppercase tracking-widest text-sm font-bold">Discover</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-cream-white">Signature Experiences</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "A la Brasa", icon: Flame, desc: "Premium meats & seafood grilled over oak charcoal." },
                            { title: "A la Llama", icon: Utensils, desc: "Rice dishes cooked with intensity and precision." },
                            { title: "Tapas to Share", icon: Wine, desc: "Small plates designed for social enjoyment." },
                            { title: "Mar y Tierra", icon: MapPin, desc: "The best produce from the Spanish land and sea." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 border border-white/5 hover:bg-white/10 hover:border-fire-ember/30 transition-all duration-300 group">
                                <item.icon className="w-10 h-10 text-fire-ember mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED DISHES */}
            <section className="py-24 bg-charcoal overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-cream-white">On The Menu</h2>
                        <div className="w-20 h-1 bg-fire-ember mt-4"></div>
                    </div>
                    <Button to="/menu" variant="ghost" className="hidden md:flex">View Full Menu →</Button>
                </div>

                {/* Scrollable / Grid of images */}
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x mx-6 no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
                    {[
                        { name: "Pulpo a la Brasa", img: "https://plus.unsplash.com/premium_photo-1719530305924-74a0118c0b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHVscG8lMjBhJTIwbGElMjBCcmFzYXxlbnwwfHwwfHx8MA%3D%3D" },
                        { name: "Chuletón de Vaca", img: "https://plus.unsplash.com/premium_photo-1668616815106-2fb55768587c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2h1bGV0JUMzJUIzbiUyMGRlJTIwVmFjYXxlbnwwfHwwfHx8MA%3D%3D" },
                        { name: "Arroz Negro", img: "https://plus.unsplash.com/premium_photo-1702388327741-c8d3a6647af6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXJyb3olMjBOZWdyb3xlbnwwfHwwfHx8MA%3D%3D" },
                    ].map((dish, idx) => (
                        <div key={idx} className="min-w-[300px] md:min-w-0 bg-neutral-900 group snap-center">
                            <div className="overflow-hidden h-64 md:h-80 relative">
                                <img
                                    src={dish.img}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-serif italic text-white">{dish.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button to="/menu" variant="outline">View Full Menu</Button>
                </div>
            </section>

            {/* LOCATION CTA */}
            <section className="py-24 relative">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20 grayscale" alt="Restaurant interior" />
                    <div className="absolute inset-0 bg-charcoal/80"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Join Us Tonight</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Calle Estafeta, 12, Pamplona. <br />
                        Open daily from 13:00.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button to="/contact" variant="primary">Reserve Your Table</Button>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-charcoal transition-colors uppercase tracking-wide font-medium"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
