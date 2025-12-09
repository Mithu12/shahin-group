'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";
import ChairmanPage from "@/components/ChairmanPage";

export default function Chairman() {
    return (
        <LoadingProvider>
            <PageLoader />
            <main className="min-h-screen bg-background text-foreground">
                <Header />
                <ChairmanPage />
                <Footer />
            </main>
        </LoadingProvider>
    );
}
