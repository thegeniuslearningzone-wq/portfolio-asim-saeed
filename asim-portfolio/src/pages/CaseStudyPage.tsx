import { Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import { getProjectBySlug } from "@/data/projects";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <CaseStudy project={project} />
      <Footer />
    </div>
  );
}
