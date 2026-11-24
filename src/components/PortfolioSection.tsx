import { useState } from 'react';
import { ArrowUpRight, Images, MapPin } from 'lucide-react';
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
} from '../data/projects';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Tous');

  const filteredProjects =
    activeCategory === 'Tous'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projets"
      className="relative border-b border-white/10 bg-[#050811] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
              02 · PORTFOLIO &amp; RÉALISATIONS
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Études urbaines, modélisations 3D et ouvrages suivis sur site
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Sélectionnez un dossier pour consulter le parti architectural, la répartition du
            zonage et l’ensemble des perspectives haute résolution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5"
          role="tablist"
          aria-label="Filtrer les projets par catégorie"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const count =
              category === 'Tous'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                    : 'border border-white/10 bg-[#0B132B]/50 text-slate-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-sky-200' : 'text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {filteredProjects.map((project, idx) => {
            const isSpotlight = project.featured && activeCategory === 'Tous' && idx === 0;

            return (
              <article
                key={project.id}
                className={`group overflow-hidden rounded-xl border border-white/10 glass-surface transition-all duration-200 hover:border-[#38BDF8]/45 ${
                  isSpotlight ? 'md:col-span-2 lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className={`block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#38BDF8] ${
                    isSpotlight ? 'grid grid-cols-1 lg:grid-cols-12' : 'flex flex-col'
                  }`}
                >
                  {/* Project Cover Image */}
                  <div
                    className={`relative overflow-hidden bg-[#0B132B] ${
                      isSpotlight
                        ? 'aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]'
                        : 'aspect-[16/10] w-full'
                    }`}
                  >
                    <ResilientImage
                      src={project.heroImage}
                      alt={project.title}
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(5,8,17,0.12) 0%, rgba(5,8,17,0.18) 55%, rgba(5,8,17,0.82) 100%)',
                      }}
                    />

                    {/* Bottom overlay technical indicator */}
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-4 text-xs text-slate-200">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-slate-200">
                        <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                        <span>{project.location}</span>
                        <span className="text-white/30" aria-hidden="true">
                          ·
                        </span>
                        <span className="tabular-nums">{project.area}</span>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#38BDF8] tabular-nums">
                        <Images className="h-3.5 w-3.5" />
                        <span>{project.gallery.length} visuels</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div
                    className={`flex flex-col justify-between p-6 sm:p-8 ${
                      isSpotlight ? 'lg:col-span-5' : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] tracking-wider text-[#38BDF8]">
                        <span>{project.code}</span>
                        <span className="text-white/25" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-slate-400">{project.category}</span>
                      </div>

                      <h3
                        className={`mt-3 font-display font-semibold tracking-tight text-white transition-colors group-hover:text-[#38BDF8] ${
                          isSpotlight ? 'text-2xl sm:text-3xl' : 'text-xl'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {project.summary}
                      </p>

                      {isSpotlight && (
                        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                          <div>
                            <p className="font-mono text-[11px] text-slate-400">EMPRISE</p>
                            <p className="mt-1 font-mono text-sm font-medium text-white tabular-nums">
                              {project.area}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-[11px] text-slate-400">STATUT</p>
                            <p className="mt-1 text-sm font-medium text-white">
                              {project.status}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                      <span className="font-mono text-slate-400 tabular-nums">
                        {project.year} · {project.status}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#38BDF8] transition-transform duration-200 group-hover:translate-x-0.5">
                        <span>Consulter le dossier</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
