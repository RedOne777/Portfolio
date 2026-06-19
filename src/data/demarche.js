// ---------------------------------------------------------------------------
// Contenu pédagogique : l'Approche Par Compétences (APC) et la démarche
// portfolio, tels que définis dans le Programme National du BUT Informatique.
// ---------------------------------------------------------------------------

export const definitionCompetence = {
  citation:
    "Savoir-agir complexe prenant appui sur la mobilisation et la combinaison efficaces d'une variété de ressources internes et externes à l'intérieur d'une famille de situations.",
  auteur: "Tardif, 2006",
};

export const definitionPortfolio = {
  citation:
    "Dossier (ou classeur, blog, site) qui permet de collectionner puis de sélectionner des traces qui témoignent d'un apprentissage et surtout d'un développement de compétence.",
  auteur: "Tardif",
};

// Les trois ressources combinées dans une compétence
export const ressourcesCompetence = [
  {
    titre: "Savoirs",
    description:
      "Les connaissances théoriques : modèles de données, algèbre relationnelle, statistiques, droit du numérique…",
  },
  {
    titre: "Savoir-faire",
    description:
      "Les habiletés pratiques : modéliser, requêter, construire un entrepôt, industrialiser un traitement…",
  },
  {
    titre: "Savoir-être",
    description:
      "Les attitudes professionnelles : rigueur, communication avec le métier, posture critique, esprit d'équipe…",
  },
];

// Les niveaux d'acquisition (un par année)
export const niveaux = [
  {
    numero: 1,
    nom: "Novice",
    annee: "BUT1",
    description: "Découverte et application encadrée des fondamentaux.",
  },
  {
    numero: 2,
    nom: "Intermédiaire",
    annee: "BUT2",
    description: "Mise en œuvre autonome dans des situations plus complexes.",
  },
  {
    numero: 3,
    nom: "Confirmé",
    annee: "BUT3",
    description:
      "Maîtrise dans des situations professionnelles réelles, avec recul critique et régulation.",
    actuel: true,
  },
];

// La chaîne structurante du référentiel
export const chaineStructurante = [
  { cle: "La compétence", valeur: "un savoir-agir complexe" },
  { cle: "Les composantes essentielles", valeur: "ses critères qualité, exigences observables" },
  { cle: "Les familles de situations", valeur: "les contextes de mise en œuvre" },
  { cle: "Les niveaux de compétence", valeur: "des postures de plus en plus complexes" },
  { cle: "Les apprentissages critiques", valeur: "les seuils d'apprentissage transformationnels" },
  { cle: "Les SAÉ", valeur: "les mises en situation d'apprentissage et d'évaluation" },
  { cle: "Les ressources", valeur: "savoirs, savoir-faire et savoir-êtres mobilisés" },
];

// L'échelle descriptive analytique d'évaluation de la démonstration (sur 20)
export const echelleEvaluation = [
  {
    plage: "0 – 9",
    titre: "Compétence non validée",
    resume: "Traces manquantes ou problèmes de validité / d'authenticité.",
    detail:
      "Les preuves sont peu valides, ne couvrent pas l'ensemble des composantes, et l'explicitation est partielle.",
    couleur: "#c2410c",
  },
  {
    plage: "10 – 12",
    titre: "Composantes démontrées, même isolément",
    resume: "Chaque composante essentielle est démontrée séparément.",
    detail:
      "L'étudiant apporte des preuves valides, illustrant chaque composante isolément, et explique comment il a agi.",
    couleur: "#a3a510",
  },
  {
    plage: "13 – 16",
    titre: "Composantes liées entre elles",
    resume: "Liens explicites entre l'action et les apprentissages.",
    detail:
      "Les composantes sont intégrées : traces plus pertinentes, tensions et dilemmes mis en évidence, ressources combinées nommées.",
    couleur: "#65a30d",
  },
  {
    plage: "17 – 20",
    titre: "Système dynamique régulé en continu",
    resume: "Préoccupation des résultats, vision systémique et régulation.",
    detail:
      "L'étudiant analyse les résultats de son action, propose des régulations, explicite ses jugements et anticipe d'autres situations.",
    couleur: "#15803d",
  },
];

// Le questionnement systématique appliqué à chaque trace (ADIUT)
export const questionnementReflexif = [
  "Que dit ma trace, qu'y voit-on ? Quelle analyse, quelle interprétation apporter ?",
  "Quelles compétences et quelles composantes essentielles ma démonstration vise-t-elle ?",
  "Quel niveau de développement traduit ma démonstration ? Quels apprentissages critiques ont été réalisés ?",
  "En quoi ma démonstration répond-elle aux critères et indicateurs annoncés ?",
  "Que manque-t-il à mon savoir-agir ? Que dois-je approfondir pour progresser ?",
  "Si je devais refaire le même travail, qu'est-ce que je changerais et pourquoi ?",
];

// Le cercle vertueux de l'analyse auto-réflexive
export const cercleReflexif = [
  "Analyser l'expérience",
  "Identifier les apprentissages réalisés",
  "Identifier les domaines d'amélioration",
  "Se fixer de nouveaux objectifs",
  "Poursuivre dans de nouvelles expériences",
];
