export type ServiceKey =
  | 'sig'
  | 'etude-urbaine'
  | 'gestion-immo'
  | 'documents-admin'
  | 'faisabilite'
  | 'architecture';

export interface ServiceItem {
  id: ServiceKey;
  index: string;
  tag: string;
  title: string;
  shortDescription: string;
  consultationLabel: string;
  gridSpan: string;
  deliverables: string[];
  methodology: string;
  typicalTimeline: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'sig',
    index: '01',
    tag: 'CARTOGRAPHIE & SIG',
    title: 'Cartographie et Systèmes d’Information Géographique',
    shortDescription:
      'Cartographie thématique haute précision, bases de données géospatiales, analyse spatiale multicritère et production de cartes décisionnelles sur mesure.',
    consultationLabel: 'Cartographie & SIG',
    gridSpan: 'md:col-span-6 lg:col-span-7',
    deliverables: [
      'Cartographie thématique & occupation des sols',
      'Structuration de bases de données géospatiales (QGIS / PostGIS)',
      'Analyses spatiales, topographie & modèles numériques de terrain',
      'Atlas cartographiques sur mesure pour collectivités et promoteurs',
    ],
    methodology:
      'Acquisition de données géoréférencées, levés terrain, traitement vectoriel/raster et édition de planches cartographiques normalisées.',
    typicalTimeline: '1 à 3 semaines selon l’emprise territoriale',
  },
  {
    id: 'etude-urbaine',
    index: '02',
    tag: 'URBANISME & AMÉNAGEMENT',
    title: 'Étude Urbaine & Conception de Lotissement',
    shortDescription:
      'Conception de lotissements structurés, suivi opérationnel d’aménagements et études environnementales conduites en partenariat avec un cabinet agréé.',
    consultationLabel: 'Lotissement & Étude Urbaine',
    gridSpan: 'md:col-span-6 lg:col-span-5',
    deliverables: [
      'Plans de lotissement, découpage parcellaire & VRD',
      'Schémas d’aménagement d’esplanades et zones d’activités',
      'Suivi technique et coordination des chantiers d’aménagement',
      'Étude d’impact environnemental et social (cabinet agréé)',
    ],
    methodology:
      'Diagnostic foncier et réglementaire, élaboration de scénarios d’aménagement durable et accompagnement jusqu’à la réception.',
    typicalTimeline: '3 à 8 semaines selon la superficie',
  },
  {
    id: 'architecture',
    index: '03',
    tag: 'ARCHITECTURE 2D / 3D',
    title: 'Étude Architecturale & Modélisation 3D',
    shortDescription:
      'Plans d’exécution, conceptions 2D/3D photoréalistes, modélisation volumétrique et accompagnement architectural rigoureux jusqu’à la réalisation.',
    consultationLabel: 'Conception 3D & Architecture',
    gridSpan: 'md:col-span-6 lg:col-span-5',
    deliverables: [
      'Avant-Projet Sommaire (APS) & Avant-Projet Détaillé (APD)',
      'Rendus 3D photoréalistes intérieurs, extérieurs et aériens',
      'Plans d’exécution 2D, coupes, façades et détails techniques',
      'Direction artistique et contrôle de conformité sur chantier',
    ],
    methodology:
      'Esquisses programmatiques, modélisation BIM/3D itérative et validation technique pour une construction maîtrisée.',
    typicalTimeline: '2 à 6 semaines par phase de conception',
  },
  {
    id: 'gestion-immo',
    index: '04',
    tag: 'PILOTAGE IMMOBILIER',
    title: 'Gestion des Projets Immobiliers',
    shortDescription:
      'Accompagnement complet de la conception initiale à la livraison clé en main, maîtrise des coûts, coordination des intervenants et valorisation immobilière.',
    consultationLabel: 'Gestion de Projet Immobilier',
    gridSpan: 'md:col-span-6 lg:col-span-7',
    deliverables: [
      'Assistance à Maîtrise d’Ouvrage (AMO) & pilotage global',
      'Planification phasée, suivi budgétaire et contrôle qualité',
      'Coordination des bureaux d’études et entreprises de travaux',
      'Stratégie de valorisation patrimoniale et réception d’ouvrage',
    ],
    methodology:
      'Gouvernance transparente par jalons vérifiables, comptes rendus d’avancement documentés et contrôle permanent des délais.',
    typicalTimeline: 'Accompagnement continu sur toute la durée du programme',
  },
  {
    id: 'documents-admin',
    index: '05',
    tag: 'DOSSIERS RÉGLEMENTAIRES',
    title: 'Documents Administratifs & Permis',
    shortDescription:
      'Constitution intégrale, montage technique et suivi administratif pour l’obtention de vos autorisations d’urbanisme et de construction en toute conformité.',
    consultationLabel: 'Permis de Bâtir & Autorisations',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    deliverables: [
      'Dossier complet et suivi du Permis de Bâtir',
      'Montage et obtention du Permis d’Implanter',
      'Dossier réglementaire de Permis de Démolir',
      'Instruction technique pour Autorisation de Lotir',
    ],
    methodology:
      'Audit foncier préalable, mise en conformité réglementaire des pièces graphiques et suivi direct auprès des administrations compétentes.',
    typicalTimeline: 'Constitution technique en 10 à 15 jours ouvrés',
  },
  {
    id: 'faisabilite',
    index: '06',
    tag: 'AIDE À LA DÉCISION',
    title: 'Étude de Faisabilité Multicritère',
    shortDescription:
      'Évaluation approfondie de la viabilité technique, économique, environnementale et sociale afin de sécuriser vos investissements fonciers et immobiliers.',
    consultationLabel: 'Étude de Faisabilité',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    deliverables: [
      'Analyse technique du site, contraintes du sol et constructibilité',
      'Modélisation économique, estimations prévisionnelles & rentabilité',
      'Évaluation environnementale, intégration urbaine et acceptabilité sociale',
      'Scénarios comparatifs et recommandations d’investissement',
    ],
    methodology:
      'Croisement de données terrain, benchmarks de coûts de construction et simulations de rendement pour éclairer chaque décision.',
    typicalTimeline: '2 à 4 semaines pour le rapport exécutif',
  },
];
