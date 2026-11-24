import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  Copy,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

interface ConsultationSectionProps {
  preselectedService: string | null;
  referenceProjectTitle: string | null;
}

const SERVICE_OPTIONS = [
  'Permis de bâtir',
  'Lotissement',
  'Conception 3D',
  'Étude de faisabilité',
  'SIG & Cartographie',
  'Gestion immobilière',
];

const WHATSAPP_NUMBER = '237651763753';
const WHATSAPP_DISPLAY = '+237 651 763 753';

function normalizeServiceOption(incoming: string | null): string {
  if (!incoming) return 'Conception 3D';
  const lower = incoming.toLowerCase();
  if (lower.includes('permis') || lower.includes('admin')) return 'Permis de bâtir';
  if (lower.includes('lotissement') || lower.includes('urbaine')) return 'Lotissement';
  if (lower.includes('faisabilit')) return 'Étude de faisabilité';
  if (lower.includes('sig') || lower.includes('carto')) return 'SIG & Cartographie';
  if (lower.includes('gestion') || lower.includes('immo')) return 'Gestion immobilière';
  return 'Conception 3D';
}

export function ConsultationSection({
  preselectedService,
  referenceProjectTitle,
}: ConsultationSectionProps) {
  const [selectedService, setSelectedService] = useState<string>('Conception 3D');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [surface, setSurface] = useState('');
  const [details, setDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(normalizeServiceOption(preselectedService));
      setIsReadyToSend(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (referenceProjectTitle) {
      setDetails(
        `Bonjour MARC URBAN LAB, je souhaite discuter d’un projet similaire à « ${referenceProjectTitle} ». Voici les premiers éléments de mon terrain :`
      );
      setIsReadyToSend(false);
    }
  }, [referenceProjectTitle]);

  const buildFormattedMessage = () => {
    const lines = [
      'Bonjour MARC URBAN LAB,',
      '',
      `Demande d’étude : ${selectedService}`,
      fullName.trim() ? `Client : ${fullName.trim()}` : null,
      phone.trim() ? `Contact : ${phone.trim()}` : null,
      location.trim() ? `Localisation du site : ${location.trim()}` : null,
      surface.trim() ? `Superficie approximative : ${surface.trim()}` : null,
      '',
      'Détails du projet :',
      details.trim() || 'Souhaite planifier un échange technique initial.',
    ].filter((line): line is string => line !== null);

    return lines.join('\n');
  };

  const formattedMessage = buildFormattedMessage();
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    formattedMessage
  )}`;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Veuillez indiquer votre nom ou votre organisation.');
      return;
    }
    if (!location.trim()) {
      setErrorMessage('Veuillez préciser la ville ou le quartier du terrain.');
      return;
    }
    setErrorMessage(null);
    setIsReadyToSend(true);
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-b border-white/10 bg-[#050811] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 arch-grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Executive Concierge Overview */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
              04 · CONSULTATION &amp; CONCIERGERIE WHATSAPP
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Initiez votre étude territoriale ou architecturale
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Sélectionnez la nature de votre besoin et décrivez votre parcelle. Votre brief est
              structuré automatiquement pour une prise en charge directe par notre équipe
              technique sur WhatsApp.
            </p>

            {/* Direct Contact Coordinates */}
            <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
              <div className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#38BDF8]" />
                <div>
                  <p className="font-mono text-[11px] text-slate-400">
                    LIGNE DIRECTE &amp; WHATSAPP
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block font-mono text-base font-medium text-white tabular-nums transition-colors hover:text-[#38BDF8]"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#38BDF8]" />
                <div>
                  <p className="font-mono text-[11px] text-slate-400">ZONE D’INTERVENTION</p>
                  <p className="mt-0.5 text-sm text-slate-200">
                    Douala, Yaoundé, Ngaoundéré &amp; projets sur l’ensemble du Cameroun et de la
                    sous-région CEMAC.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#38BDF8]" />
                <div>
                  <p className="font-mono text-[11px] text-slate-400">
                    DÉLAI DE PREMIÈRE RÉPONSE
                  </p>
                  <p className="mt-0.5 text-sm text-slate-200">
                    Sous 24h ouvrées avec orientation méthodologique et estimation d’étude.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Brief Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/10 glass-surface p-6 sm:p-8"
              noValidate
            >
              {/* Service Selector */}
              <div>
                <label className="block font-mono text-[11px] tracking-wider text-[#38BDF8]">
                  NATURE DE LA PRESTATION
                </label>
                <div
                  className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
                  role="radiogroup"
                  aria-label="Sélectionner un service"
                >
                  {SERVICE_OPTIONS.map((option) => {
                    const isSelected = selectedService === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setSelectedService(option);
                          setIsReadyToSend(false);
                        }}
                        className={`rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                          isSelected
                            ? 'border-[#38BDF8] bg-[#2563EB]/25 text-white'
                            : 'border-white/10 bg-[#050811]/60 text-slate-300 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client & Terrain Inputs */}
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Nom complet ou Société <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setIsReadyToSend(false);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Ex. M. Jean-Paul Ndiaye / SCI Horizon"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#050811]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setIsReadyToSend(false);
                    }}
                    placeholder="Ex. +237 6XX XXX XXX"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#050811]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="site-location"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Ville &amp; Quartier du site <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="site-location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setIsReadyToSend(false);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Ex. Douala, Japoma / Yaoundé, Bastos"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#050811]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="site-surface"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Superficie estimée (m² ou ha)
                  </label>
                  <input
                    id="site-surface"
                    type="text"
                    value={surface}
                    onChange={(e) => {
                      setSurface(e.target.value);
                      setIsReadyToSend(false);
                    }}
                    placeholder="Ex. 500 m² ou 2,5 hectares"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#050811]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="project-details"
                  className="block text-xs font-medium text-slate-300"
                >
                  Objectifs, contraintes topographiques ou programme souhaité
                </label>
                <textarea
                  id="project-details"
                  rows={4}
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                    setIsReadyToSend(false);
                  }}
                  placeholder="Précisez le type d’ouvrage (duplex, immeuble R+3, lotissement, esplanade, permis de bâtir...), l’état du titre foncier ou votre calendrier."
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#050811]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              {errorMessage && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-rose-500/35 bg-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-200"
                >
                  {errorMessage}
                </p>
              )}

              {/* Actions */}
              {!isReadyToSend ? (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="font-mono text-[11px] text-slate-400">
                    DESTINATAIRE : WHATSAPP {WHATSAPP_DISPLAY}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(56,189,248,0.28)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_0_30px_rgba(56,189,248,0.42)] whitespace-nowrap"
                  >
                    <MessageSquare className="h-4 w-4 text-[#38BDF8]" />
                    <span>Préparer l’envoi WhatsApp</span>
                  </button>
                </div>
              ) : (
                <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                  <div className="rounded-lg border border-[#38BDF8]/30 bg-[#050811]/85 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-[#38BDF8]">
                        BRIEF PRÊT À TRANSMETTRE
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 transition-colors hover:text-[#38BDF8]"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copié</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copier le texte</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-200">
                      {formattedMessage}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setIsReadyToSend(false)}
                      className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
                    >
                      Modifier les informations
                    </button>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white shadow-[0_0_26px_rgba(56,189,248,0.35)] transition-colors hover:bg-[#1D4ED8] whitespace-nowrap"
                    >
                      <MessageSquare className="h-4 w-4 text-[#38BDF8]" />
                      <span>Ouvrir WhatsApp ({WHATSAPP_DISPLAY})</span>
                      <ArrowUpRight className="h-4 w-4 text-[#38BDF8]" />
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
