'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";
import InquiriesPage from "@/components/InquiriesPage";

export default function Inquiries() {
    return (
        <LoadingProvider>
            <PageLoader />
            <main className="min-h-screen bg-background text-foreground">
                <Header />
                <InquiriesPage />
                <Footer />
            </main>
        </LoadingProvider>
    );
}
