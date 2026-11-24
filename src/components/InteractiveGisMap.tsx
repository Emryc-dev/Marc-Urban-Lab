import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ParcelInfo {
  id: string;
  zone: string;
  label: string;
  surface: string;
  ces: string;
}

const PARCELS: ParcelInfo[] = [
  {
    id: 'Z-01',
    zone: 'Zone U1 · Mixte',
    label: 'Îlot Esplanade & Équipements',
    surface: '2,40 ha',
    ces: 'CES 0,55 · R+2 max',
  },
  {
    id: 'Z-02',
    zone: 'Zone U2 · Résidentiel',
    label: 'Lotissement Résidentiel Nord',
    surface: '1,60 ha',
    ces: 'CES 0,45 · 24 Lots',
  },
  {
    id: 'Z-03',
    zone: 'Zone N · Corridor Vert',
    label: 'Bassin Paysager & Rétention',
    surface: '0,88 ha',
    ces: 'Non aedificandi',
  },
];

export function InteractiveGisMap() {
  const [layers, setLayers] = useState({
    zoning: true,
    parcels: true,
    roads: true,
    topo: true,
  });
  const [selectedParcel, setSelectedParcel] = useState<ParcelInfo>(PARCELS[0]);

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 glass-surface">
      {/* Header & Layer Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Layers className="h-4 w-4 text-[#38BDF8]" />
          <span className="font-mono text-xs tracking-wider text-white">
            MODÈLE SIG · WGS 84 / UTM 32N
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Couches SIG">
          {(
            [
              { key: 'zoning', label: 'Zonage' },
              { key: 'parcels', label: 'Parcelles' },
              { key: 'roads', label: 'Voiries' },
              { key: 'topo', label: 'Topographie' },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleLayer(item.key)}
              aria-pressed={layers[item.key]}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                layers[item.key]
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-[#050811]/80 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Architectural Vector Canvas */}
      <div className="relative aspect-[16/10] w-full bg-[#050811] arch-grid-fine">
        <svg
          viewBox="0 0 800 500"
          className="h-full w-full"
          role="img"
          aria-label="Carte vectorielle interactive de zonage urbain et topographie SIG"
        >
          <defs>
            <linearGradient id="zoneU1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="zoneU2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zoneN" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Topographic Contour Lines */}
          {layers.topo && (
            <g stroke="#38BDF8" strokeOpacity="0.18" fill="none" strokeWidth="1">
              <path d="M -20 420 Q 180 350 340 390 T 820 310" strokeDasharray="4 4" />
              <path d="M -20 360 Q 210 290 380 330 T 820 240" />
              <path d="M -20 290 Q 230 210 420 260 T 820 175" strokeDasharray="4 4" />
              <path d="M -20 210 Q 260 140 460 185 T 820 110" />
              <path d="M -20 130 Q 280 75 500 115 T 820 55" strokeDasharray="4 4" />
              <text x="24" y="352" fill="#38BDF8" fillOpacity="0.45" fontSize="10" fontFamily="monospace">
                +24.0m
              </text>
              <text x="24" y="202" fill="#38BDF8" fillOpacity="0.45" fontSize="10" fontFamily="monospace">
                +32.5m
              </text>
              <text x="720" y="102" fill="#38BDF8" fillOpacity="0.45" fontSize="10" fontFamily="monospace">
                +41.0m
              </text>
            </g>
          )}

          {/* Zoning Polygons (Clickable) */}
          {layers.zoning && (
            <g>
              {/* Z-01: Esplanade */}
              <polygon
                points="90,95 415,80 435,275 110,295"
                fill="url(#zoneU1)"
                stroke={selectedParcel.id === 'Z-01' ? '#38BDF8' : 'rgba(56,189,248,0.45)'}
                strokeWidth={selectedParcel.id === 'Z-01' ? '2.2' : '1.2'}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedParcel(PARCELS[0])}
              />
              {/* Z-02: Lotissement */}
              <polygon
                points="460,90 725,115 705,305 465,280"
                fill="url(#zoneU2)"
                stroke={selectedParcel.id === 'Z-02' ? '#60A5FA' : 'rgba(96,165,250,0.45)'}
                strokeWidth={selectedParcel.id === 'Z-02' ? '2.2' : '1.2'}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedParcel(PARCELS[1])}
              />
              {/* Z-03: Corridor écologique */}
              <polygon
                points="125,335 450,315 695,340 670,445 145,440"
                fill="url(#zoneN)"
                stroke={selectedParcel.id === 'Z-03' ? '#34D399' : 'rgba(52,211,153,0.45)'}
                strokeWidth={selectedParcel.id === 'Z-03' ? '2.2' : '1.2'}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedParcel(PARCELS[2])}
              />
            </g>
          )}

          {/* Cadastral Parcel Subdivisions */}
          {layers.parcels && (
            <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.9" fill="none">
              {/* Esplanade modular stands grid */}
              <rect x="130" y="120" width="85" height="60" />
              <rect x="225" y="120" width="170" height="130" strokeDasharray="3 3" />
              <rect x="130" y="190" width="85" height="75" />
              {/* Lotissement parcels */}
              <line x1="525" y1="97" x2="520" y2="285" />
              <line x1="590" y1="103" x2="585" y2="292" />
              <line x1="655" y1="109" x2="650" y2="299" />
              <line x1="462" y1="190" x2="716" y2="208" />
            </g>
          )}

          {/* Primary Roads & VRD Corridors */}
          {layers.roads && (
            <g fill="none">
              <path
                d="M 40 315 L 445 295 L 770 322"
                stroke="#F8FAFC"
                strokeOpacity="0.65"
                strokeWidth="3.5"
              />
              <path
                d="M 438 35 L 452 470"
                stroke="#F8FAFC"
                strokeOpacity="0.65"
                strokeWidth="3.5"
              />
              <path
                d="M 40 315 L 445 295 L 770 322"
                stroke="#38BDF8"
                strokeOpacity="0.9"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
            </g>
          )}

          {/* Zone Labels */}
          <g fontFamily="monospace" fontSize="11" fill="#F8FAFC">
            <g className="cursor-pointer" onClick={() => setSelectedParcel(PARCELS[0])}>
              <circle cx="265" cy="185" r="4" fill="#38BDF8" />
              <text x="277" y="182" fontWeight="600">
                Z-01 · U1
              </text>
              <text x="277" y="197" fill="#94A3B8" fontSize="10">
                2,40 ha
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setSelectedParcel(PARCELS[1])}>
              <circle cx="585" cy="195" r="4" fill="#60A5FA" />
              <text x="597" y="192" fontWeight="600">
                Z-02 · U2
              </text>
              <text x="597" y="207" fill="#94A3B8" fontSize="10">
                1,60 ha
              </text>
            </g>
            <g className="cursor-pointer" onClick={() => setSelectedParcel(PARCELS[2])}>
              <circle cx="385" cy="385" r="4" fill="#34D399" />
              <text x="397" y="382" fontWeight="600">
                Z-03 · N
              </text>
              <text x="397" y="397" fill="#94A3B8" fontSize="10">
                0,88 ha
              </text>
            </g>
          </g>

          {/* Compass & Scale Bar */}
          <g transform="translate(725, 45)" stroke="#94A3B8" fill="none" strokeWidth="1.2">
            <circle cx="0" cy="0" r="16" strokeOpacity="0.35" />
            <path d="M 0 -12 L 4 4 L 0 1 L -4 4 Z" fill="#38BDF8" stroke="none" />
            <text
              x="0"
              y="-20"
              textAnchor="middle"
              fill="#94A3B8"
              stroke="none"
              fontSize="9"
              fontFamily="monospace"
            >
              N
            </text>
          </g>
          <g transform="translate(28, 470)">
            <line x1="0" y1="0" x2="80" y2="0" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="80" y1="-4" x2="80" y2="4" stroke="#94A3B8" strokeWidth="1.5" />
            <text x="90" y="3" fill="#94A3B8" fontSize="10" fontFamily="monospace">
              0 — 100 m
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Parcel Readout Footer */}
      <div className="grid grid-cols-1 gap-3 border-t border-white/10 bg-[#050811]/70 px-5 py-4 sm:grid-cols-3">
        <div>
          <p className="font-mono text-[11px] text-[#38BDF8]">{selectedParcel.id} · SÉLECTION</p>
          <p className="mt-0.5 text-sm font-medium text-white">{selectedParcel.label}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-slate-400">CLASSIFICATION</p>
          <p className="mt-0.5 text-sm text-slate-200">{selectedParcel.zone}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-slate-400">EMPRISE &amp; RÈGLEMENT</p>
          <p className="mt-0.5 text-sm font-medium text-white tabular-nums">
            {selectedParcel.surface} · {selectedParcel.ces}
          </p>
        </div>
      </div>
    </div>
  );
}
