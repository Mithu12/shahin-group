import React from 'react';

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-subtext-light dark:text-subtext-dark">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0">
                    <nav className="flex gap-6 font-body">
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">About</a>
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">Projects</a>
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">News</a>
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">Contact</a>
                    </nav>
                    <div className="flex gap-4">
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">
                            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg>
                        </a>
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">
                            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                        <a className="hover:text-text-light dark:hover:text-text-dark transition-colors" href="#">
                            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                        </a>
                    </div>
                </div>
                <p className="font-body">© 2024 Shahin Group. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
