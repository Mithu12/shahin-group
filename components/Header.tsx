import React from 'react';

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="bg-background-light dark:bg-background-dark py-4 px-6 shrink-0">
                    <h1 className="font-display text-2xl font-bold tracking-widest text-text-light dark:text-text-dark">SHAHIN GROUP</h1>
                </div>
                <button className="bg-black/50 backdrop-blur-sm p-4 text-white md:bg-transparent md:backdrop-blur-none md:p-0 md:text-text-light md:dark:text-text-dark">
                    <span className="material-icons-outlined text-3xl">menu</span>
                </button>
            </div>
        </header>
    );
}
