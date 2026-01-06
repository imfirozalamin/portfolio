import { notFound } from 'next/navigation';
import { getProjectById, getAllProjectIds } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Firuz Al Amin Gafarullah`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}