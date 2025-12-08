'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { LoadingProvider } from "@/context/LoadingContext";
import ProjectsPage from "@/components/ProjectsPage";

export default function Projects() {
    return (
        <LoadingProvider>
            <PageLoader />
            <main className="min-h-screen bg-background text-foreground">
                <Header />
                <ProjectsPage />
                <Footer />
            </main>
        </LoadingProvider>
    );
}
