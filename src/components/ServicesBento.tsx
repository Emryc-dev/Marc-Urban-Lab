import { useState } from 'react';
import {
  Map,
  Compass,
  Building2,
  FileCheck2,
  BarChart3,
  DraftingCompass,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { SERVICES, type ServiceKey } from '../data/services';

interface ServicesBentoProps {
  onSelectServiceForQuote: (consultationLabel: string) => void;
}

const SERVICE_ICONS: Record<ServiceKey, typeof Map> = {
  sig: Map,
  'etude-urbaine': Compass,
  'gestion-immo': Building2,
  'documents-admin': FileCheck2,
  faisabilite: BarChart3,
  architecture: DraftingCompass,
};

export function ServicesBento({ onSelectServiceForQuote }: ServicesBentoProps) {
  const [expandedId, setExpandedId] = useState<ServiceKey | null>('sig');

  const toggleExpand = (id: ServiceKey) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="expertise"
      className="relative border-b border-white/10 bg-[#050811] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 arch-grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
              01 · NOS EXPERTISES
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Six pôles d’ingénierie urbaine, architecturale et géospatiale
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            De l’analyse cartographique initiale à l’obtention des permis et à la livraison
            d’ouvrages, chaque mission s’appuie sur des livrables techniques normés.
          </p>
        </div>

        {/* Asymmetric Futuristic Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id];
            const isExpanded = expandedId === service.id;

            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between rounded-xl border transition-all duration-200 glass-surface p-6 sm:p-7 ${
                  service.gridSpan
                } ${
                  isExpanded
                    ? 'border-[#38BDF8]/45 shadow-[0_0_32px_rgba(56,189,248,0.1)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Editorial Index/Tag */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#050811]/80 text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.16)] transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>

                    <div className="text-right font-mono text-[11px] tracking-wider text-slate-400">
                      <span className="text-[#38BDF8] tabular-nums">{service.index}</span>
                      <span className="mx-2 text-white/20" aria-hidden="true">
                        ·
                      </span>
                      <span>{service.tag}</span>
                    </div>
                  </div>

                  {/* Title & Executive Description */}
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Technical Details */}
                  {isExpanded && (
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="font-mono text-[11px] tracking-wider text-[#38BDF8]">
                        LIVRABLES TECHNIQUES
                      </p>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-200"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
                        <div>
                          <p className="font-mono text-[11px] text-slate-400">MÉTHODOLOGIE</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-300">
                            {service.methodology}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] text-slate-400">DÉLAI INDICATIF</p>
                          <p className="mt-1 text-xs font-medium text-white">
                            {service.typicalTimeline}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors hover:text-[#38BDF8] focus-visible:outline-none focus-visible:text-[#38BDF8]"
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded ? 'Masquer les détails techniques' : 'Voir les livrables techniques'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.consultationLabel)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#38BDF8] transition-colors hover:text-white whitespace-nowrap focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Demander cette étude</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
