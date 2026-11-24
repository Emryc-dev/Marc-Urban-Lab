import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/projects';
import { ResilientImage } from './ResilientImage';
import { InteractiveGisMap } from './InteractiveGisMap';

interface ProjectDetailViewProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onDiscussSimilar: (project: ProjectItem) => void;
}

export function ProjectDetailView({
  project,
  onBack,
  onSelectProject,
  onDiscussSimilar,
}: ProjectDetailViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setLightboxIndex(null);
    setIsZoomed(false);
  }, [project.id]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
        setIsZoomed(false);
      } else if (event.key === 'ArrowRight') {
        setIsZoomed(false);
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % project.gallery.length
        );
      } else if (event.key === 'ArrowLeft') {
        setIsZoomed(false);
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + project.gallery.length) % project.gallery.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  const activeLightboxImage =
    lightboxIndex !== null ? project.gallery[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#050811] text-white">
      {/* Contextual Top Sub-Header */}
      <div className="border-b border-white/10 bg-[#0B132B]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-[#38BDF8] whitespace-nowrap focus-visible:outline-none focus-visible:text-[#38BDF8]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour au portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-[#38BDF8]">{project.code}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.gallery.length} visuels</span>
          </div>

          <button
            type="button"
            onClick={() => onDiscussSimilar(project)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-colors hover:bg-[#1D4ED8] whitespace-nowrap"
          >
            <span>Discuter d’un projet similaire</span>
            <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
          </button>
        </div>
      </div>

      {/* Full-Bleed Architectural Hero Render */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative aspect-[16/9] max-h-[680px] w-full bg-[#0B132B]">
          <ResilientImage
            src={project.heroImage}
            alt={project.title}
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,8,17,0.25) 0%, rgba(5,8,17,0.45) 45%, rgba(5,8,17,0.95) 100%)',
            }}
          />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[#38BDF8]">
                <span>{project.code}</span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="inline-flex items-center gap-1 text-slate-200">
                  <MapPin className="h-3.5 w-3.5 text-[#38BDF8]" />
                  {project.location}
                </span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="tabular-nums text-slate-200">{project.area}</span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="tabular-nums text-slate-300">{project.year}</span>
              </div>

              <h1
                className="mt-3 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
                style={{ textWrap: 'balance' }}
              >
                {project.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-300 sm:text-lg">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Brief & Specifications */}
      <section className="border-b border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Narrative Columns */}
          <div className="space-y-10 lg:col-span-7">
            <div>
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                01 · PARTI ARCHITECTURAL &amp; URBAIN
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200">{project.brief}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  Enjeux du territoire &amp; contraintes
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  Réponse technique MARC URBAN LAB
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Fiche Technique Table */}
          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-white/10 glass-surface p-6 sm:p-7">
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                FICHE TECHNIQUE
              </p>
              <dl className="mt-5 divide-y divide-white/10">
                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 py-3.5 text-sm"
                  >
                    <dt className="text-slate-400">{spec.label}</dt>
                    <dd className="text-right font-medium text-white tabular-nums">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={() => onDiscussSimilar(project)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-colors hover:bg-[#1D4ED8]"
              >
                <span>Discuter d’un projet similaire</span>
                <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Interactive GIS Module (when applicable) */}
      {project.hasInteractiveGis && (
        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
              EXPLORATION GÉOSPATIALE INTERACTIVE
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white">
              Couches vectorielles SIG &amp; lecture parcellaire
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Activez ou désactivez les strates cartographiques et cliquez sur un îlot pour
              consulter son règlement de zonage.
            </p>
            <div className="mt-8">
              <InteractiveGisMap />
            </div>
          </div>
        </section>
      )}

      {/* Zoning Breakdown */}
      <section className="border-b border-white/10 bg-[#0B132B]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                02 · RÉPARTITION PROGRAMMATIQUE &amp; ZONAGE
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Ventilation des surfaces et affectations
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-400 tabular-nums">
              EMPRISE TOTALE : {project.area}
            </span>
          </div>

          {/* Stacked Proportion Bar */}
          <div
            className="mt-8 flex h-3.5 w-full overflow-hidden rounded-full bg-white/5"
            aria-label="Répartition proportionnelle des surfaces"
          >
            {project.zoningBreakdown.map((slice) => (
              <div
                key={slice.label}
                style={{ width: `${slice.percentage}%`, backgroundColor: slice.accent }}
                title={`${slice.label} : ${slice.percentage}% (${slice.surface})`}
                className="h-full border-r border-[#050811] last:border-r-0"
              />
            ))}
          </div>

          {/* Tabular Zoning Breakdown */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.zoningBreakdown.map((slice) => (
              <div
                key={slice.label}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 glass-surface p-5"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: slice.accent }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-200">{slice.label}</span>
                </div>
                <div className="shrink-0 text-right font-mono tabular-nums">
                  <span className="text-sm font-semibold text-white">{slice.percentage}%</span>
                  <span className="ml-2.5 text-xs text-slate-400">{slice.surface}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Angle High-Resolution Gallery */}
      <section className="border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                03 · GALERIE MULTI-ANGLES &amp; RENDUS 3D
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Vues architecturales haute résolution ({project.gallery.length})
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Cliquez sur n’importe quel visuel pour ouvrir la visionneuse plein écran.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((item, idx) => (
              <button
                key={`${item.url}-${idx}`}
                type="button"
                onClick={() => {
                  setLightboxIndex(idx);
                  setIsZoomed(false);
                }}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 glass-surface text-left transition-all duration-200 hover:border-[#38BDF8]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B132B]">
                  <ResilientImage
                    src={item.url}
                    alt={`${project.title} — ${item.angle}`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#050811]/75 text-white opacity-85 backdrop-blur-md transition-all group-hover:border-[#38BDF8]/60 group-hover:text-[#38BDF8]">
                    <Expand className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[#38BDF8]">
                      <span>
                        {String(idx + 1).padStart(2, '0')} · {item.tag}
                      </span>
                      <span className="text-slate-400">{item.angle}</span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project-to-Project Footer Navigation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#38BDF8]/25 glass-surface p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="font-mono text-xs tracking-wider text-[#38BDF8]">
                ACCOMPAGNEMENT SUR MESURE
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                Vous envisagez un projet d’envergure similaire ?
              </h2>
              <p className="mt-1.5 text-sm text-slate-300">
                Transmettez les caractéristiques de votre terrain et recevez un premier retour
                d’étude via notre conciergerie WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDiscussSimilar(project)}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(56,189,248,0.3)] transition-colors hover:bg-[#1D4ED8] whitespace-nowrap"
            >
              <span>Discuter d’un projet similaire</span>
              <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0B132B]/40 p-5 text-left transition-colors hover:border-[#38BDF8]/40"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <ArrowLeft className="h-3.5 w-3.5 text-[#38BDF8]" />
                  PROJET PRÉCÉDENT
                </span>
                <p className="mt-1.5 font-display text-base font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center justify-end gap-4 rounded-xl border border-white/10 bg-[#0B132B]/40 p-5 text-right transition-colors hover:border-[#38BDF8]/40"
            >
              <div>
                <span className="inline-flex items-center justify-end gap-1.5 font-mono text-[11px] text-slate-400">
                  PROJET SUIVANT
                  <ArrowRight className="h-3.5 w-3.5 text-[#38BDF8]" />
                </span>
                <p className="mt-1.5 font-display text-base font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Viewer */}
      {activeLightboxImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#050811]/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Visionneuse : ${activeLightboxImage.angle}`}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3.5 sm:px-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#38BDF8] tabular-nums">
                <span>
                  {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                  {String(project.gallery.length).padStart(2, '0')}
                </span>
                <span className="text-white/30" aria-hidden="true">
                  ·
                </span>
                <span className="truncate text-white">{activeLightboxImage.angle}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsZoomed((z) => !z)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B132B] text-slate-200 transition-colors hover:border-[#38BDF8]/50 hover:text-white"
                aria-label={isZoomed ? 'Réduire le zoom' : 'Agrandir le rendu'}
              >
                {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  setIsZoomed(false);
                }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0B132B] text-slate-200 transition-colors hover:border-[#38BDF8]/50 hover:text-white"
                aria-label="Fermer la visionneuse"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Image Viewport */}
          <div className="relative flex flex-1 items-center justify-center overflow-auto p-4 sm:p-8">
            <button
              type="button"
              onClick={() => {
                setIsZoomed(false);
                setLightboxIndex(
                  (lightboxIndex - 1 + project.gallery.length) % project.gallery.length
                );
              }}
              className="fixed left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0B132B]/90 text-white transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8] sm:left-6"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              className={`transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'max-h-full max-w-6xl cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed((z) => !z)}
            >
              <ResilientImage
                src={activeLightboxImage.url}
                alt={activeLightboxImage.caption}
                loading="eager"
                className="max-h-[70vh] w-auto rounded-lg border border-white/10 object-contain shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setIsZoomed(false);
                setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
              }}
              className="fixed right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0B132B]/90 text-white transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8] sm:right-6"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Caption & Thumbnail Strip */}
          <div className="border-t border-white/10 bg-[#050811]/95 px-4 py-4 sm:px-6">
            <p className="mx-auto max-w-3xl text-center text-xs sm:text-sm text-slate-300">
              {activeLightboxImage.caption}
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 overflow-x-auto pb-1">
              {project.gallery.map((thumb, idx) => (
                <button
                  key={`thumb-${idx}`}
                  type="button"
                  onClick={() => {
                    setIsZoomed(false);
                    setLightboxIndex(idx);
                  }}
                  className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-all ${
                    idx === lightboxIndex
                      ? 'border-[#38BDF8] ring-1 ring-[#38BDF8]'
                      : 'border-white/10 opacity-55 hover:opacity-100'
                  }`}
                  aria-label={`Afficher la vue ${idx + 1} : ${thumb.angle}`}
                >
                  <ResilientImage
                    src={thumb.url}
                    alt={thumb.angle}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
