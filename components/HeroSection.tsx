import React from 'react';

export function HeroSection() {
    return (
        <section className="relative h-[80vh] min-h-[600px] md:h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <video autoPlay className="hero-video" loop muted playsInline>
                <source src="https://image-b2b.s3.us-east-2.amazonaws.com/videos/pexels-tima-miroshnichenko-6694511+(2160p).mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay absolute inset-0"></div>
            <div className="relative z-10 p-6">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    Shahin Group: Visionary Architecture,<br />Luxury Development, Global Media.
                </h2>
                <p className="font-body text-base md:text-lg mt-4 max-w-2xl mx-auto">
                    Crafting the Future Through a Legacy of Excellence.
                </p>
                <button className="mt-10 bg-primary text-white font-body py-3 px-8 rounded-md text-sm uppercase tracking-wider hover:opacity-90 transition-opacity duration-300">
                    Explore Our Portfolio
                </button>
            </div>
        </section>
    );
}
