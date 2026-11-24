import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { PortfolioSection } from './components/PortfolioSection';
import { ApproachSection } from './components/ApproachSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { ProjectDetailView } from './components/ProjectDetailView';
import { PROJECTS, type ProjectItem } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [referenceProjectTitle, setReferenceProjectTitle] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetHome = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (serviceLabel: string) => {
    setPreselectedService(serviceLabel);
    setReferenceProjectTitle(null);
    scrollToSection('contact');
  };

  const handleDiscussSimilar = (project: ProjectItem) => {
    setReferenceProjectTitle(project.title);
    if (project.category === 'Lotissements') {
      setPreselectedService('Lotissement');
    } else if (project.category === 'Cartographie SIG') {
      setPreselectedService('SIG & Cartographie');
    } else if (project.category === 'Urbanisme & Aménagement') {
      setPreselectedService('Lotissement');
    } else {
      setPreselectedService('Conception 3D');
    }
    setSelectedProject(null);
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const featuredProject = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#050811] text-white">
      <Navbar onNavigate={scrollToSection} onResetHome={handleResetHome} />

      {selectedProject ? (
        <main>
          <ProjectDetailView
            project={selectedProject}
            onBack={() => {
              setSelectedProject(null);
              window.setTimeout(() => {
                document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
              }, 60);
            }}
            onSelectProject={(project) => setSelectedProject(project)}
            onDiscussSimilar={handleDiscussSimilar}
          />
        </main>
      ) : (
        <main>
          <Hero
            onExploreProjects={() => scrollToSection('projets')}
            onRequestStudy={() => scrollToSection('contact')}
            onOpenFeatured={() => setSelectedProject(featuredProject)}
          />
          <ServicesBento onSelectServiceForQuote={handleSelectServiceForQuote} />
          <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
          <ApproachSection />
          <ConsultationSection
            preselectedService={preselectedService}
            referenceProjectTitle={referenceProjectTitle}
          />
        </main>
      )}

      <Footer onNavigate={scrollToSection} onResetHome={handleResetHome} />
    </div>
  );
}
