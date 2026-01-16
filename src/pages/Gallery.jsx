import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import classNames from 'classnames';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Use import.meta.glob to load all images from the gallery folder
    const galleryImages = import.meta.glob('../assets/gallery/*.png', { eager: true });

    // Transform the imported object into an array of image objects
    const images = Object.values(galleryImages).map((module, index) => ({
        src: module.default,
        alt: `Gallery Image ${index + 1}`
    }));

    return (
        <>
            <SEOHead title="Gallery" description="Visual journey through our dishes and atmosphere." />

            <div className="pt-32 pb-24 bg-charcoal min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-olive-green uppercase tracking-widest text-sm font-bold">Visuals</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-cream-white mt-4">The Experience</h1>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative group overflow-hidden break-inside-avoid cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto rounded-sm transform group-hover:scale-105 transition-transform duration-700 hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white w-8 h-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                </div>
            )}
        </>
    );
};

export default Gallery;
