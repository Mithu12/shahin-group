'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";
import ContactPage from "@/components/ContactPage";

export default function Contact() {
    return (
        <LoadingProvider>
            <PageLoader />
            <main className="min-h-screen bg-background text-foreground">
                <Header />
                <ContactPage />
                <Footer />
            </main>
        </LoadingProvider>
    );
}
