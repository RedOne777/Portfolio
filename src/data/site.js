// ---------------------------------------------------------------------------
// Données d'identité, profil, compétences techniques et contact.
// Centralisé ici pour être édité facilement sans toucher aux composants.
// ---------------------------------------------------------------------------

export const profil = {
  prenom: "Mohamed",
  nom: "Ridwan",
  nomComplet: "Mohamed Ridwan",
  initiales: "MR",
  titre: "Étudiant en BUT3 Informatique — Parcours AGED",
  sousTitre: "Alternant Data · RATP Infrastructure",
  localisation: "Île-de-France",
  accroche:
    "Spécialisé dans la gestion, l'exploitation et la valorisation des données. Je conçois des systèmes d'information décisionnels, du modèle de données jusqu'à la restitution, en alternance chez RATP Infrastructure.",
  // Présentation longue (page Profil)
  bio: [
    "Je suis en troisième année de BUT Informatique à l'IUT de Créteil-Vitry, parcours AGED — Administration, Gestion et Exploitation des Données — que je suis en alternance chez RATP Infrastructure.",
    "Mon fil conducteur est la donnée : la modéliser, la fiabiliser, l'interroger et la transformer en information utile à la décision. J'aime autant concevoir un schéma relationnel ou un entrepôt décisionnel que manipuler des bases plus récentes (graphe, spatial, vectoriel) pour répondre à des problèmes concrets.",
    "Au-delà de la technique, l'alternance m'a confronté à la réalité d'un système d'information d'entreprise : intégrer un projet dans l'existant, accompagner le changement auprès des équipes métier et communiquer avec des acteurs non informaticiens. Ce portfolio est la démonstration auto-réflexive de cette montée en compétences.",
  ],
  objectif:
    "Poursuivre en cycle d'ingénieur pour approfondir mon expertise en Informatique, Data et Intelligence Artificielle.",
};

export const contact = {
  email: "mohamed.ridwan@outlook.fr",
  // Téléphone présent sur le CV — décommentez si vous souhaitez l'afficher publiquement.
  telephone: "07 81 85 68 98",
  afficherTelephone: false,
  linkedin: "https://www.linkedin.com/in/mohamed-ridwan/",
  github: "https://github.com/RedOne777",
};

// Compétences techniques regroupées par familles
export const competencesTechniques = [
  {
    famille: "Langages",
    items: ["SQL", "Python", "C", "JavaScript"],
  },
  {
    famille: "Bases de données",
    items: ["PostgreSQL", "Oracle", "Neo4j", "Qdrant", "PostGIS"],
  },
  {
    famille: "Données & décisionnel",
    items: ["Power BI", "DAX", "Modélisation", "Data mining", "RAG / Vectoriel"],
  },
  {
    famille: "Développement & outils",
    items: ["React", "Docker", "Git", "MobaXterm", "GNS3", "Figma", "VS Code"],
  },
];

export const atouts = [
  "Communication claire et coordination efficace en équipe",
  "Analyse et résolution de problèmes complexes",
  "Gestion du stress et adaptabilité face aux contraintes techniques",
  "Autonomie sur des projets techniques de bout en bout",
];

export const langues = [
  { langue: "Tamoul", niveau: "Bilingue", valeur: 100 },
  { langue: "Anglais", niveau: "Courant", valeur: 80 },
  { langue: "Espagnol", niveau: "Intermédiaire", valeur: 50 },
];

// Navigation principale
export const navLinks = [
  { to: "/profil", label: "Profil" },
  { to: "/demarche", label: "Démarche" },
  { to: "/competences", label: "Compétences" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/parcours", label: "Parcours" },
];

// Quelques chiffres clés pour le hero
export const chiffresCles = [
  { valeur: "3", label: "compétences au niveau Confirmé" },
  { valeur: "AGED", label: "parcours Données" },
  { valeur: "2 ans", label: "d'alternance & stage chez RATP" },
  { valeur: "BUT3", label: "fin de parcours 2023 – 2026" },
];
