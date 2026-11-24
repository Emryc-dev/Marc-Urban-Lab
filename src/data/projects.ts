export type ProjectCategory =
  | 'Tous'
  | 'Urbanisme & Aménagement'
  | 'Architecture 3D'
  | 'Lotissements'
  | 'Cartographie SIG';

export interface ProjectImage {
  url: string;
  caption: string;
  angle: string;
  tag: string;
}

export interface ZoningSlice {
  label: string;
  percentage: number;
  surface: string;
  accent: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'Tous'>;
  location: string;
  area: string;
  year: string;
  status: string;
  featured?: boolean;
  hasInteractiveGis?: boolean;
  heroImage: string;
  summary: string;
  brief: string;
  challenge: string;
  solution: string;
  zoningBreakdown: ZoningSlice[];
  specs: ProjectSpec[];
  gallery: ProjectImage[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Tous',
  'Urbanisme & Aménagement',
  'Architecture 3D',
  'Lotissements',
  'Cartographie SIG',
];

/**
 * Catalogue modulaire des projets MARC URBAN LAB.
 * Chaque projet référence directement les rendus 3D et photographies de chantier locaux
 * situés dans /public/assets/aistudio/. Ajoutez simplement de nouvelles entrées dans `gallery`
 * pour étendre le portfolio.
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'esplanade-parc-exposition',
    code: 'PRJ-01 · MASTERPLAN 3D',
    title: 'Aménagement Esplanade & Parc d’Exposition',
    subtitle:
      'Conception urbaine 3D d’un pôle événementiel, commercial et récréatif à haute capacité d’accueil',
    category: 'Urbanisme & Aménagement',
    location: 'Douala, Cameroun',
    area: '2,4 Hectares',
    year: '2026',
    status: 'Étude 3D & Masterplan',
    featured: true,
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.46_411ed62c.jpeg',
    summary:
      'Masterplan complet d’un parc d’exposition polyvalent intégrant scène de concert, galeries marchandes modulaires, pôle restauration, espace annonceurs, aire de jeux sécurisée et stationnements hiérarchisés.',
    brief:
      'Conçu comme une nouvelle centralité événementielle et culturelle, le projet réorganise une vaste emprise foncière en un espace public lisible, fluide et rentable. La trame orthogonale structure les flux piétons autour d’une esplanade centrale fédératrice, connectant l’ensemble des pavillons d’exposition, la scène principale et les zones familiales.',
    challenge:
      'Concilier l’accueil simultané de plusieurs milliers de visiteurs, la séparation stricte des flux logistiques/véhicules et piétons, ainsi que la modularité des stands pour accueillir aussi bien des foires commerciales que des concerts nocturnes.',
    solution:
      'Un zonage clair en six pôles complémentaires : grande esplanade minérale perméable, galeries bois périphériques à double orientation, pôle scène & podium sonorisé, espace annonceurs dédié, aire ludique clôturée en retrait des flux motorisés et parkings différenciés véhicules / deux-roues.',
    zoningBreakdown: [
      { label: 'Esplanade Centrale & Circulations Piétonnes', percentage: 38, surface: '9 120 m²', accent: '#38BDF8' },
      { label: 'Galeries Marchandes & Pavillons d’Exposition', percentage: 24, surface: '5 760 m²', accent: '#2563EB' },
      { label: 'Pôle Scène, Podium & Espace Annonceurs', percentage: 15, surface: '3 600 m²', accent: '#60A5FA' },
      { label: 'Terrasses Restauration & Espaces Conviviaux', percentage: 11, surface: '2 640 m²', accent: '#818CF8' },
      { label: 'Aire de Jeux Enfants & Parkings Séparés', percentage: 12, surface: '2 880 m²', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Superficie globale', value: '24 000 m² (2,4 ha)' },
      { label: 'Capacité d’accueil', value: '6 500 visiteurs / jour' },
      { label: 'Stands modulaires', value: '64 unités équipées' },
      { label: 'Stationnement dédié', value: '180 VL · 120 deux-roues' },
      { label: 'Mission réalisée', value: 'Masterplan, 3D & Zonage' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.46_411ed62c.jpeg',
        caption: 'Vue aérienne générale du Masterplan : trame des circulations, galeries d’exposition, podium et accès stationnement.',
        angle: 'Vue Aérienne Globale',
        tag: 'MASTERPLAN',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.47_4b501452.jpeg',
        caption: 'Séquence événementielle Nord-Est : scène de concert, espace annonceurs couvert et zone de restauration sous chapiteaux.',
        angle: 'Perspective Aérienne Scène',
        tag: 'ÉVÉNEMENTIEL',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.45_2107ba02.jpeg',
        caption: 'Aménagement de l’aire de jeux familiale clôturée en connexion directe avec le parking organisé deux-roues.',
        angle: 'Vue Aérienne Zone Ludique',
        tag: 'LOISIRS & MOBILITÉ',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.48_c44179a0.jpeg',
        caption: 'Ambiance piétonne des terrasses de restauration ombragées par parasols architecturaux et mâts d’éclairage LED.',
        angle: 'Perspective Piétonne',
        tag: 'RESTAURATION',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.49__1__ed1f5934.jpeg',
        caption: 'Axe central vers le podium scénique et le pavillon d’accueil central lors des manifestations grand public.',
        angle: 'Axe Scénique',
        tag: 'PODIUM & FOULE',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.49_62090964.jpeg',
        caption: 'Parvis commercial face aux stands modulaires à ossature bois chaleureuse et galeries d’art éphémères.',
        angle: 'Parvis Exposants',
        tag: 'GALERIES',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.45__1__28d32f75.jpeg',
        caption: 'Allée des exposants et linéaires commerciaux conçus pour maximiser la visibilité de chaque enseigne.',
        angle: 'Linéaire Commercial',
        tag: 'STANDS 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.46__1__f9591bbb.jpeg',
        caption: 'Pavillons thématiques Accueil, Information, Tourisme durable et Artisanat avec signalétique intégrée.',
        angle: 'Pavillon Accueil',
        tag: 'SIGNALÉTIQUE',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.50_add5b739.jpeg',
        caption: 'Planche comparative d’ambiances crépusculaires : mise en lumière architecturale des stands, terrasses et du podium.',
        angle: 'Étude Lumière — 4 Vues',
        tag: 'NOCTURNE',
      },
    ],
  },
  {
    id: 'duplex-mbanga-japoma',
    code: 'PRJ-02 · ARCHITECTURE 3D',
    title: 'Duplex Contemporain sur Terrain en Pente',
    subtitle:
      'Villa duplex 4 chambres avec double sous-sol locatif exploitant la topographie naturelle',
    category: 'Architecture 3D',
    location: 'Mbanga-Japoma (Cité SAD), Douala',
    area: '620 m² SHON',
    year: '2025',
    status: 'Étude 3D & Exécution',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58__1__4464b06d.jpeg',
    summary:
      'Architecture résidentielle de haut standing tirant parti d’un fort dénivelé pour superposer un duplex familial lumineux en partie haute et deux appartements indépendants de 3 chambres en rez-de-jardin.',
    brief:
      'Implanté sur une parcelle en déclivité à Mbanga-Japoma, ce projet transforme une contrainte topographique majeure en levier de rentabilité immobilière. La façade sur rue présente une volumétrie contemporaine apaisée mêlant enduit blanc, parement bois chaleureux et brise-soleil métalliques anthracite.',
    challenge:
      'Assurer l’étanchéité, la stabilité des murs de soutènement et un éclairage naturel optimal pour les deux niveaux inférieurs tout en garantissant l’intimité acoustique et visuelle du duplex principal.',
    solution:
      'Décaissement en gradins avec cour basse privative, accès indépendants entre la rampe véhicules supérieure et les logements locatifs en contrebas, et larges débords de toiture protégeant les baies vitrées du rayonnement tropical.',
    zoningBreakdown: [
      { label: 'Duplex Familial Principal (4 Chambres)', percentage: 46, surface: '285 m²', accent: '#38BDF8' },
      { label: '2 Appartements Indépendants en Sous-Sol (3 Ch.)', percentage: 34, surface: '211 m²', accent: '#2563EB' },
      { label: 'Terrasses, Balcons & Cour Basse', percentage: 12, surface: '74 m²', accent: '#60A5FA' },
      { label: 'Parvis Pavé, Stationnements & Jardinières', percentage: 8, surface: '50 m²', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Typologie', value: 'Duplex + 2 Sous-Sols' },
      { label: 'Surface habitable', value: '620 m²' },
      { label: 'Localisation', value: 'Mbanga-Japoma, Douala' },
      { label: 'Matérialité', value: 'Béton, bois composite, verre' },
      { label: 'Mission réalisée', value: 'Conception 3D & Permis' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58__1__4464b06d.jpeg',
        caption: 'Perspective 3/4 avant : articulation des volumes, toitures multi-pentes et aménagement paysager d’entrée.',
        angle: 'Perspective Principale',
        tag: 'FAÇADE AVANT',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58__2__a27fdcd2.jpeg',
        caption: 'Cadrage rapproché sur les claustras verticaux, le balcon vitré et le parvis en pavés naturels.',
        angle: 'Détail Architectural',
        tag: 'BRISE-SOLEIL',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58__3__ab15b245.jpeg',
        caption: 'Façade latérale rythmée par le bardage bois horizontal, l’escalier minéral et le bosquet de bambous.',
        angle: 'Élévation Latérale',
        tag: 'MATÉRIALITÉ',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58_4359fff0.jpeg',
        caption: 'Variante chromatique anthracite soulignant le garde-corps en verre feuilleté et la profondeur des loggias.',
        angle: 'Variante Façade',
        tag: 'VARIANTE 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.57__2__d471e5a9.jpeg',
        caption: 'Vue arrière révélant l’exploitation complète du dénivelé sur deux niveaux de sous-sol avec terrasse panoramique.',
        angle: 'Façade Arrière',
        tag: 'DÉNIVELÉ',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.57__3__459e667d.jpeg',
        caption: 'Intégration topographique et ouvrage de soutènement assurant la transition entre l’accès haut et la cour basse.',
        angle: 'Coupe Topographique',
        tag: 'INGÉNIERIE SITE',
      },
    ],
  },
  {
    id: 'villa-prestige-ngaoundere',
    code: 'PRJ-03 · ARCHITECTURE & SUIVI',
    title: 'Villa Duplex Prestige 5 Chambres — Ngaoundéré',
    subtitle:
      'De la modélisation 3D néo-classique au suivi rigoureux du gros œuvre sur chantier',
    category: 'Architecture 3D',
    location: 'Ngaoundéré, Adamaoua',
    area: '480 m² SHON',
    year: '2025',
    status: 'Chantier en cours',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.55__3__0be209d7.jpeg',
    summary:
      'Conception architecturale complète et pilotage d’exécution d’une villa familiale de 5 chambres aux lignes néo-classiques affirmées : porche monumental en double hauteur, arcades colonnées et balcons parés de pierre naturelle.',
    brief:
      'Ce programme illustre la continuité maîtrisée entre nos études de conception 3D et la réalité du terrain. Chaque proportion d’arcade, de corniche et de baie cintrée modélisée en amont est vérifiée étape par étape lors du suivi de chantier à Ngaoundéré.',
    challenge:
      'Garantir la fidélité géométrique des voûtes, colonnes moulurées et débords de corniche face aux contraintes climatiques de l’Adamaoua tout en maîtrisant le budget gros œuvre.',
    solution:
      'Production de plans de coffrage détaillés, contrôle systématique des armatures et coffrages cintrés sur site, et utilisation de parements minéraux durables sur les allèges de balcons.',
    zoningBreakdown: [
      { label: 'Espaces de Réception, Séjour & Salle à Manger', percentage: 34, surface: '163 m²', accent: '#38BDF8' },
      { label: 'Suite Parentale & 4 Chambres avec Salles d’Eau', percentage: 44, surface: '211 m²', accent: '#2563EB' },
      { label: 'Porche Monumental, Galeries & Balcons', percentage: 14, surface: '67 m²', accent: '#60A5FA' },
      { label: 'Cuisine, Locaux Techniques & Circulations', percentage: 8, surface: '39 m²', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Programme', value: 'Duplex R+1 · 5 Chambres' },
      { label: 'Surface bâtie', value: '480 m²' },
      { label: 'Localisation', value: 'Ngaoundéré, Cameroun' },
      { label: 'Avancement', value: 'Gros œuvre & Enduits' },
      { label: 'Mission réalisée', value: 'Conception 3D & Suivi Travaux' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.55__3__0be209d7.jpeg',
        caption: 'Rendu 3D de la façade principale : symétrie axiale, porche en double hauteur et toiture tuiles terre cuite.',
        angle: 'Façade Principale 3D',
        tag: 'MODÉLISATION 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.56__2__bceae89c.jpeg',
        caption: 'Perspective 3/4 gauche mettant en valeur la véranda à colonnades et la volumétrie des pignons.',
        angle: 'Perspective Gauche 3D',
        tag: 'MODÉLISATION 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.56__3__0cd1dacd.jpeg',
        caption: 'Perspective 3/4 droite soulignant les balcons habillés de pierre naturelle et les menuiseries cintrées.',
        angle: 'Perspective Droite 3D',
        tag: 'MODÉLISATION 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.56__1__bf941733.jpeg',
        caption: 'Suivi de réalisation sur site : élévation fidèle des colonnades, arcades et corniches périphériques.',
        angle: 'Réalisation Chantier',
        tag: 'SUIVI TRAVAUX',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.56_cf837376.jpeg',
        caption: 'Contrôle d’exécution des enduits de façade, ferronneries sécurisées et géométrie des porches cintrés.',
        angle: 'Détail Gros Œuvre',
        tag: 'CONTRÔLE QUALITÉ',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.57__1__b3df2cb3.jpeg',
        caption: 'Phase initiale d’élévation de la maçonnerie porteuse et des poteaux raidisseurs en béton armé.',
        angle: 'Phase Implantation',
        tag: 'CHANTIER',
      },
    ],
  },
  {
    id: 'lotissement-residentiel-moderne',
    code: 'PRJ-04 · LOTISSEMENTS',
    title: 'Lotissement Résidentiel Contemporain — Villas & Bi-Familiales',
    subtitle:
      'Typologies architecturales reproductibles pour opération d’aménagement et promotion immobilière',
    category: 'Lotissements',
    location: 'Axe Douala — Yassa',
    area: '1,6 Hectare · 24 Lots',
    year: '2026',
    status: 'Étude Urbaine & Typologies',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.59__1__b36270a0.jpeg',
    summary:
      'Conception d’un cahier architectural et d’un plan de lotissement associant villas individuelles minimalistes et résidences bi-familiales R+1 autour de voiries apaisées, trottoirs plantés et stationnements intégrés.',
    brief:
      'Pour accompagner les promoteurs et aménageurs privés, MARC URBAN LAB développe des opérations de lotissement clés en main : découpage foncier optimisé, trame VRD, règlement d’aspect extérieur et catalogue de villas contemporaines adaptées aux parcelles de 300 à 500 m².',
    challenge:
      'Optimiser le ratio surface vendable / voiries tout en préservant une véritable qualité paysagère, des reculs réglementaires cohérents et une identité architecturale moderne valorisant chaque lot.',
    solution:
      'Création de deux modèles phares à forte identité — résidence bi-familiale à loggias en porte-à-faux et villa contemporaine R+1 à toiture-terrasse — articulés le long d’une voirie hiérarchisée avec éclairage public solaire.',
    zoningBreakdown: [
      { label: 'Parcelles Résidentielles Privatives (24 Lots)', percentage: 64, surface: '10 240 m²', accent: '#38BDF8' },
      { label: 'Voiries Structurantes, Trottoirs & Accès', percentage: 21, surface: '3 360 m²', accent: '#2563EB' },
      { label: 'Espaces Verts, Jardins & Noues Pluviales', percentage: 10, surface: '1 600 m²', accent: '#60A5FA' },
      { label: 'Équipements de Proximité & Locaux Techniques', percentage: 5, surface: '800 m²', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Emprise foncière', value: '16 000 m² (1,6 ha)' },
      { label: 'Nombre de parcelles', value: '24 lots viabilisés' },
      { label: 'Surface moyenne/lot', value: '425 m²' },
      { label: 'Typologies bâties', value: 'Villas R+1 & Bi-familiales' },
      { label: 'Mission réalisée', value: 'Lotissement, VRD & 3D' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.59__1__b36270a0.jpeg',
        caption: 'Modèle Résidence Bi-Familiale R+1 : composition symétrique, balcons vitrés en porte-à-faux et parvis engazonné.',
        angle: 'Typologie Bi-Familiale',
        tag: 'MODÈLE A',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.59__2__35147b6e.jpeg',
        caption: 'Insertion urbaine sur rue : cohérence des alignements, éclairage public, trottoirs pavés et stationnement résidentiel.',
        angle: 'Perspective Voirie',
        tag: 'INSERTION URBAINE',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.58__4__79be2efa.jpeg',
        caption: 'Modèle Villa Individuelle R+1 : écriture contemporaine sauge et béton minéral, auvent d’entrée et jardinières bois.',
        angle: 'Typologie Villa R+1',
        tag: 'MODÈLE B',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.59_252bb2df.jpeg',
        caption: 'Vue plongeante de la villa modèle : toiture-terrasse accessible, loggia couverte à l’étage et clôture paysagère.',
        angle: 'Perspective Plongeante',
        tag: 'VOLUMÉTRIE',
      },
    ],
  },
  {
    id: 'immeubles-urbains-douala',
    code: 'PRJ-05 · IMMOBILIER & RÉALISATION',
    title: 'Résidence Urbaine R+2 & Complexe Mixte Yassa Yatchika',
    subtitle:
      'Densification résidentielle maîtrisée, façades minérales contemporaines et bâtiments livrés',
    category: 'Architecture 3D',
    location: 'Yassa Yatchika, Douala',
    area: '940 m² SHON',
    year: '2025',
    status: 'Livré & En développement',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.51_8413b559.jpeg',
    summary:
      'Deux réponses urbaines à forte valeur patrimoniale : un immeuble résidentiel vertical R+2 en travertin et verre sur parcelle étroite, et le complexe mixte livré de Yassa Yatchika combinant salle de réception et appartements meublés.',
    brief:
      'Dans les quartiers en mutation rapide de Douala, la valorisation des parcelles d’angle et des emprises urbaines compactes exige une architecture rigoureuse. Nos conceptions privilégient la noblesse des matériaux pérennes (pierre sèche, travertin, menuiseries aluminium sombres) et l’optimisation de la rentabilité locative.',
    challenge:
      'Maximiser la luminosité naturelle et le confort thermique sur des parcelles urbaines contraintes tout en intégrant des programmes mixtes (accueil événementiel au rez-de-chaussée, logements calmes aux étages).',
    solution:
      'Traitement de la cage d’escalier en grande verrière verticale contemporaine, loggias plantées en encorbellement faisant office de filtre climatique et parements minéraux sans entretien lourd.',
    zoningBreakdown: [
      { label: 'Appartements Meublés & Logements Haut Standing', percentage: 56, surface: '526 m²', accent: '#38BDF8' },
      { label: 'Salle de Réception & Espace Polyvalent RDC', percentage: 26, surface: '244 m²', accent: '#2563EB' },
      { label: 'Circulations Verticales Vitrées & Balcons', percentage: 12, surface: '113 m²', accent: '#60A5FA' },
      { label: 'Accès Sécurisés & Locaux de Service', percentage: 6, surface: '57 m²', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Typologie', value: 'Immeubles R+2 & Mixte' },
      { label: 'Surface cumulée', value: '940 m²' },
      { label: 'Localisation', value: 'Yassa Yatchika, Douala' },
      { label: 'Finitions', value: 'Travertin, pierre naturelle, alu' },
      { label: 'Mission réalisée', value: 'Architecture & Gestion Projet' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.51_8413b559.jpeg',
        caption: 'Immeuble Résidentiel R+2 : façade contemporaine en enduit blanc, balcons en travertin éclairés et grande verrière verticale.',
        angle: 'Façade Urbaine R+2',
        tag: 'RENDU 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.56__4__34eb147d.jpeg',
        caption: 'Complexe mixte livré à Yassa Yatchika : salle de fête en niveau bas et appartements meublés aux étages.',
        angle: 'Bâtiment Livré — Angle',
        tag: 'RÉALISATION',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.57_ac2de53f.jpeg',
        caption: 'Détail de la façade d’angle réalisée : parements en pierre de taille, encadrements anthracite et aménagements paysagers.',
        angle: 'Façade Réalisée',
        tag: 'LIVRÉ',
      },
    ],
  },
  {
    id: 'cartographie-sig-schema-directeur',
    code: 'PRJ-06 · CARTOGRAPHIE SIG',
    title: 'Schéma Directeur & Base Géospatiale SIG — Pôle Douala-Est',
    subtitle:
      'Analyse spatiale multicritère, zonage réglementaire et aide à la décision foncière',
    category: 'Cartographie SIG',
    location: 'Corridor Douala-Est — Japoma',
    area: '420 Hectares',
    year: '2026',
    status: 'Atlas SIG & Diagnostic',
    hasInteractiveGis: true,
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.47_4b501452.jpeg',
    summary:
      'Élaboration d’une base de données géospatiales multi-couches pour orienter l’expansion urbaine : croisement topographie, zones inondables, accessibilité routière, équipements publics et potentiel foncier constructible.',
    brief:
      'Face à la croissance démographique accélérée du corridor Douala-Est, notre laboratoire SIG a structuré un observatoire cartographique complet permettant aux investisseurs et aménageurs d’identifier les secteurs à fort potentiel tout en préservant les corridors écologiques.',
    challenge:
      'Harmoniser des sources foncières hétérogènes, des relevés topographiques et des contraintes hydrographiques afin de produire des cartes fiables directement exploitables pour les permis et études de faisabilité.',
    solution:
      'Création d’un SIG normalisé en quatre couches clés (Parcellaires, Voiries & Réseaux, Zonage Urbain, Topographie & Hydrologie) accompagné d’un atlas thématique et de simulations d’implantation 3D.',
    zoningBreakdown: [
      { label: 'Zone Urbaine Mixte & Habitat Structuré (U1)', percentage: 42, surface: '176,4 ha', accent: '#38BDF8' },
      { label: 'Pôles Économiques, Activités & Équipements (U2)', percentage: 23, surface: '96,6 ha', accent: '#2563EB' },
      { label: 'Corridors Écologiques & Zones Tampons (N)', percentage: 21, surface: '88,2 ha', accent: '#34D399' },
      { label: 'Emprises Voiries Primaires & Réseaux (VRD)', percentage: 14, surface: '58,8 ha', accent: '#94A3B8' },
    ],
    specs: [
      { label: 'Périmètre étudié', value: '420 Hectares' },
      { label: 'Système de projection', value: 'WGS 84 / UTM Zone 32N' },
      { label: 'Couches vectorielles', value: '18 couches thématiques' },
      { label: 'Précision planimétrique', value: '± 15 cm (levé RTK)' },
      { label: 'Livrables', value: 'Atlas SIG, Shapefiles & 3D' },
    ],
    gallery: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.46_411ed62c.jpeg',
        caption: 'Traduction opérationnelle du zonage SIG en masterplan 3D d’équipement public structurant.',
        angle: 'Masterplan Opérationnel',
        tag: 'SIG VERS 3D',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.47_4b501452.jpeg',
        caption: 'Modélisation des flux d’accessibilité et implantation des pôles d’animation en entrée de secteur.',
        angle: 'Analyse des Flux',
        tag: 'AMÉNAGEMENT',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_15.32.45_2107ba02.jpeg',
        caption: 'Répartition spatiale des polarités familiales et des aires de stationnement en interface voirie.',
        angle: 'Interface Voirie',
        tag: 'MOBILITÉ',
      },
    ],
  },
];
