import { projects } from '@/app/data/projects';
import ProjectDetails from '@/components/ProjectDetails';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { LoadingProvider } from '@/context/LoadingContext';
import { PageLoader } from '@/components/PageLoader';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <LoadingProvider>
      <PageLoader />
      <Header />
      <ProjectDetails project={project} />
      <Footer />
    </LoadingProvider>
  );
}
