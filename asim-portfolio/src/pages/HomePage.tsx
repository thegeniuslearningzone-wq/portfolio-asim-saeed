import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
