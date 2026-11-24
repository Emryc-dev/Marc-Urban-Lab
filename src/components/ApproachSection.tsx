import { InteractiveGisMap } from './InteractiveGisMap';

const APPROACH_PHASES = [
  {
    step: '01',
    title: 'Diagnostic foncier & Cartographie SIG',
    description:
      'Levés géoréférencés, analyse topographique, contraintes réglementaires et structuration de la donnée territoriale avant toute esquisse.',
  },
  {
    step: '02',
    title: 'Conception urbaine & Modélisation 3D',
    description:
      'Traduction du programme en volumes lisibles, simulations solaires et perspectives photoréalistes pour valider chaque choix spatial.',
  },
  {
    step: '03',
    title: 'Faisabilité & Dossiers administratifs',
    description:
      'Montage des permis de bâtir, autorisations de lotir et études environnementales en partenariat avec un cabinet agréé.',
  },
  {
    step: '04',
    title: 'Pilotage & Suivi de réalisation',
    description:
      'Contrôle de conformité sur chantier, coordination technique et valorisation durable de votre actif immobilier jusqu’à la livraison.',
  },
];

export function ApproachSection() {
  return (
    <section
      id="approche"
      className="relative border-b border-white/10 bg-[#0B132B]/35 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 arch-grid-bg opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
            03 · NOTRE APPROCHE
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            De la donnée géospatiale à l’ouvrage bâti, une chaîne d’ingénierie intégrée
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* 4-Step Architectural Methodology */}
          <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-5">
            {APPROACH_PHASES.map((phase) => (
              <div key={phase.step} className="flex gap-5 py-6">
                <span className="font-mono text-sm font-medium text-[#38BDF8] tabular-nums pt-0.5">
                  {phase.step}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive GIS / Zoning Demonstrator */}
          <div className="lg:col-span-7">
            <InteractiveGisMap />
          </div>
        </div>
      </div>
    </section>
  );
}
