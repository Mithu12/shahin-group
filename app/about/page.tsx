'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";
import AboutPage from "@/components/AboutPage";

export default function About() {
    return (
        <LoadingProvider>
            <PageLoader />
            <main className="min-h-screen bg-background text-foreground">
                <Header />
                <AboutPage />
                <Footer />
            </main>
        </LoadingProvider>
    );
}
