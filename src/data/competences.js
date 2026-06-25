// ---------------------------------------------------------------------------
// COMPÉTENCES CLÉS — présentation professionnelle.
// Pour chacune : ce qu'elle recouvre, les savoir-faire concrets, et les
// projets/expériences qui le prouvent (avec une courte analyse).
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const competences = [
  // =========================================================================
  // GÉRER LES DONNÉES
  // =========================================================================
  {
    id: "c4",
    code: "C4",
    slug: "gerer-les-donnees",
    color: "#38bdf8",
    colorClass: "c4",
    verbe: "Gérer",
    titre: "Gérer les données",
    niveau: "Avancé",
    resume:
      "De la modélisation à la décision : administrer, fiabiliser et exploiter des données hétérogènes.",
    tagline:
      "De la donnée à la décision : capturer, fiabiliser, exploiter et valoriser des données hétérogènes.",
    definition:
      "Concevoir, administrer et exploiter les données d'une organisation, et mettre à disposition l'information nécessaire au pilotage.",
    casUsage: [
      "Lancer un nouveau projet de données",
      "Sécuriser et fiabiliser des données",
      "Exploiter des données pour la prise de décision",
    ],
    savoirFaire: [
      "Modéliser et administrer des bases relationnelles et nouvelle génération (spatial, graphe, vectoriel)",
      "Préparer, fiabiliser et intégrer des données hétérogènes",
      "Construire des systèmes décisionnels : entrepôts, modèles en étoile, tableaux de bord",
      "Interroger et optimiser des bases en production",
      "Garantir la sécurité et la qualité des données (confidentialité, intégrité, RGPD)",
    ],
    traces: [
      {
        titre: "AeroWise — Assistant intelligent sur données hétérogènes",
        contexte: "Projet universitaire — Gestion de la biodiversité aéroportuaire",
        type: "Projet universitaire",
        stack: ["PostGIS", "Neo4j", "Qdrant", "Python", "RAG"],
        analyse:
          "Ma réalisation la plus aboutie côté données : j'ai stocké des données complexes et hétérogènes en combinant trois moteurs complémentaires — spatial avec PostGIS (zones aéroportuaires), graphe avec Neo4j (relations espèces / incidents) et vectoriel avec Qdrant (recherche sémantique). Le choix de chaque moteur découle de la nature de la donnée et du type de requête : une persistance polyglotte assumée. Le chatbot repose sur une approche RAG : préparation et vectorisation des contenus, puis recherche par similarité. La principale difficulté a été la cohérence entre les trois bases ; j'y répondrais aujourd'hui par une couche d'ingestion unifiée et un suivi de la fraîcheur des données.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Analyse démographique de la France (2019) — Tableau de bord décisionnel",
        contexte: "Projet universitaire — Informatique décisionnelle",
        type: "Projet universitaire",
        stack: ["Power BI", "DAX", "Modèle en étoile", "Web"],
        analyse:
          "Une chaîne décisionnelle complète : un rapport Power BI bâti sur des données dénormalisées et des mesures DAX, complété d'un tableau de bord web interactif (pyramide des âges, carte de France). La dénormalisation en modèle en étoile matérialise un arbitrage assumé entre intégrité transactionnelle et performance analytique. Les indicateurs s'appuient sur des bases statistiques et un travail de nettoyage garantissant la qualité. Piste : automatiser le rafraîchissement incrémental et formaliser la sécurité au niveau ligne.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "RATP — Exploitation SQL en production & modélisation de la signalisation",
        contexte: "Expérience professionnelle — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        stack: ["PostgreSQL (prod)", "MobaXterm", "ORM"],
        analyse:
          "En entreprise, j'ai interrogé une base PostgreSQL de production (via MobaXterm) et modélisé des données de signalisation ferroviaire — un jeu de données complexe et critique. Découvrir l'architecture entre l'ORM et la base m'a fait toucher ce qui sépare une base d'école d'un système en production : volume, criticité, habilitations, plans d'exécution. La sensibilité des données impose le respect strict des accès et des réglementations. La principale tension : interroger la production sans dégrader le service, ce qui m'a imposé prudence, requêtes en lecture seule et fenêtres adaptées.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "MétéoVision — Restitution de données dynamiques",
        contexte: "Projet universitaire — Tableau de bord météorologique",
        type: "Projet universitaire",
        stack: ["Web", "Base de données", "Auth", "Data-viz"],
        analyse:
          "Ce site exploite des données dynamiques restituées via des graphiques interactifs et une carte thermique. La gestion de l'authentification et de la base complète la dimension administration, et la cohérence des données affichées reste un point de vigilance. Piste : mise en cache et indicateur de fraîcheur de la donnée.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Cryptographie & sécurité des données — AES et codes correcteurs",
        contexte: "Projet universitaire — Sécurité",
        type: "Projet universitaire",
        stack: ["Python", "AES", "Codes détecteurs/correcteurs"],
        analyse:
          "J'ai implémenté l'intégralité du protocole de chiffrement AES en Python ainsi que des codes détecteurs et correcteurs d'erreurs. Cette réalisation ancre les notions de confidentialité et d'intégrité : je considère la sécurité non comme une option mais comme une propriété intrinsèque de la gestion des données. Piste : intégrer une vraie gestion de clés et raisonner sur des modèles de menace réalistes.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
    ],
    bilan:
      "Sur deux ans, je suis passé de la conception d'une base relationnelle simple à l'administration de données massives et hétérogènes orientées décision. Je sais désormais choisir le bon moteur selon la donnée, la préparer pour l'analyse et la restituer pour la décision, sous contrainte de sécurité et de qualité.",
    pistes: [
      "Approfondir l'optimisation fine (plans d'exécution, indexation avancée, partitionnement).",
      "Industrialiser les pipelines de données (orchestration, tests de qualité automatisés, observabilité).",
      "Monter en compétence sur le ML appliqué à l'exploitation de données massives.",
    ],
  },

  // =========================================================================
  // CONDUIRE UN PROJET
  // =========================================================================
  {
    id: "c5",
    code: "C5",
    slug: "conduire-un-projet",
    color: "#a78bfa",
    colorClass: "c5",
    verbe: "Conduire",
    titre: "Conduire un projet",
    niveau: "Avancé",
    resume:
      "Concevoir, intégrer et faire évoluer un système d'information au service du métier.",
    tagline:
      "Faire entrer un projet dans la réalité d'un système d'information : intégrer, adapter, mesurer les impacts.",
    definition:
      "Répondre aux besoins des utilisateurs, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
    casUsage: [
      "Lancer un nouveau projet",
      "Maintenir un système en condition opérationnelle",
      "Faire évoluer un système d'information",
    ],
    savoirFaire: [
      "Recueillir les besoins et rédiger des spécifications fonctionnelles",
      "Concevoir une architecture applicative et des maquettes UI/UX",
      "Intégrer un projet dans un système d'information existant",
      "Faire évoluer un système : modernisation, reprise de l'existant",
      "Mesurer les impacts d'un projet (dette technique, continuité de service)",
    ],
    traces: [
      {
        titre: "RATP — Modernisation d'un système d'archivage : du legacy Solaris au web",
        contexte: "Expérience professionnelle — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        stack: ["Architecture web", "Solaris (legacy)", "Spécifications", "UI/UX"],
        analyse:
          "Ma réalisation phare sur ce sujet. J'ai participé au portage d'un système d'archivage de Solaris vers une architecture web moderne : une adaptation profonde d'un système d'information existant. Le travail a impliqué la rédaction des spécifications fonctionnelles et des controllers, la conception de l'architecture applicative et des maquettes UI/UX — autant d'éléments qui doivent s'intégrer dans le SI existant de RATP. J'ai aussi mesuré les impacts : obsolescence et dette technique du legacy, coût de maintenance, exigence de continuité de service sur un système critique. La rédaction des specs et la validation des maquettes auprès des utilisateurs métier ont demandé une communication continue et une posture critique. Ma piste : structurer davantage la phase de recette et la gestion des risques.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "AeroWise — Conception et mise en œuvre d'un SI de suivi des incidents",
        contexte: "Projet universitaire — Biodiversité aéroportuaire",
        type: "Projet universitaire",
        stack: ["React", "Dashboard", "Cartographie", "Multi-bases"],
        analyse:
          "Mené comme un projet SI complet : recueil des besoins, conception de l'architecture, puis réalisation d'une application React avec carte interactive et tableau de bord de suivi des incidents — de la donnée à l'interface de pilotage. Le sujet, la biodiversité aéroportuaire, porte une forte dimension environnementale, et le travail d'équipe a exigé une communication continue avec les parties prenantes. Le choix d'un assistant intelligent témoigne d'une démarche créative.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Projet data mining — De la donnée brute à l'aide à la décision",
        contexte: "Projet universitaire — 3ᵉ année",
        type: "Projet universitaire",
        stack: ["Data mining", "Aide à la décision"],
        analyse:
          "Ce projet relie l'exploitation décisionnelle des données à un projet SI : intégrer une brique d'aide à la décision dans le système et en mesurer les impacts. Il m'a amené à raisonner sur le respect des règles encadrant les données exploitées (RGPD) et sur leur usage responsable.",
        preuves: [{ label: "Rapport — sur demande", url: null }],
      },
    ],
    bilan:
      "J'ai compris qu'un projet informatique ne vit pas hors-sol : il s'intègre dans un système d'information existant, avec des utilisateurs et des contraintes. Je sais aujourd'hui formaliser des besoins, proposer une cible et accompagner une évolution en tenant compte de ses impacts.",
    pistes: [
      "Renforcer la gestion formelle des risques et la planification (jalons, recette, plan de tests).",
      "Approfondir les méthodes agiles à l'échelle d'une organisation.",
      "Quantifier davantage les impacts (coûts, ROI, empreinte) pour objectiver les décisions.",
    ],
  },

  // =========================================================================
  // COLLABORER EN ÉQUIPE
  // =========================================================================
  {
    id: "c6",
    code: "C6",
    slug: "collaborer-manager",
    color: "#34d399",
    colorClass: "c6",
    verbe: "Collaborer",
    titre: "Collaborer en équipe",
    niveau: "Avancé",
    resume:
      "Faire équipe et accompagner le changement au sein d'une organisation.",
    tagline:
      "Faire équipe et faire évoluer : veille, conduite du changement et communication au service du collectif.",
    definition:
      "Développer les aptitudes nécessaires pour travailler efficacement au sein d'une équipe informatique pluridisciplinaire.",
    casUsage: [
      "Lancer un nouveau projet en équipe",
      "Organiser son travail avec celui de l'équipe",
      "Élaborer, gérer et transmettre de l'information",
    ],
    savoirFaire: [
      "Travailler en équipe pluridisciplinaire (métier, IT, encadrement)",
      "Organiser le travail collectif avec Git et un suivi d'avancement",
      "Accompagner la conduite du changement auprès des utilisateurs",
      "Mener une veille technologique et la réinvestir dans les projets",
      "Communiquer avec des interlocuteurs non techniques",
    ],
    traces: [
      {
        titre: "RATP — Accompagner la conduite du changement d'un système critique",
        contexte: "Expérience professionnelle — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        stack: ["Conduite du changement", "Équipe pluridisciplinaire"],
        analyse:
          "La modernisation du système d'archivage n'est pas qu'un défi technique : c'est une conduite du changement. J'ai travaillé au sein d'une équipe pluridisciplinaire (métier ferroviaire de la signalisation, IT, encadrement) où il faut accompagner les utilisateurs vers de nouveaux outils. Participer aux échanges et au suivi du projet m'a fait toucher l'accompagnement du management de projet. J'y ai appris que faire adopter une évolution compte autant que la livrer. Piste : formaliser un plan de communication et de formation des utilisateurs.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "Projets en équipe — Organisation, Git et communication",
        contexte: "Projets universitaires (AeroWise, MétéoVision…)",
        type: "Projet universitaire",
        stack: ["Git", "Gestion de projet", "Communication"],
        analyse:
          "Sur mes projets, j'ai organisé le travail collectif : répartition des rôles, utilisation de Git (branches, intégration), suivi de l'avancement et communication régulière. La pluridisciplinarité des sujets (données, cartographie, IA, interface) m'a appris à articuler des expertises différentes au sein d'une même équipe. Piste : standardiser nos rituels (revues de code, rétrospectives).",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Veille technologique — Bases de données nouvelle génération & IA",
        contexte: "Démarche personnelle",
        type: "Veille",
        stack: ["Vector DB", "Graphes", "RAG / LLM"],
        analyse:
          "J'organise une veille sur les bases de données nouvelle génération (vectoriel avec Qdrant, graphe avec Neo4j) et l'IA générative, que je réinvestis directement dans mes projets — AeroWise en est la preuve. Cette veille nourrit ma compréhension des enjeux de la donnée : valeur, souveraineté, coûts d'infrastructure. Piste : formaliser ce partage (synthèses régulières à l'équipe).",
        preuves: [{ label: "Profil GitHub & projets", url: GITHUB }],
      },
      {
        titre: "Numérique responsable & cadre juridique",
        contexte: "Veille & pratique",
        type: "Compétence transverse",
        stack: ["RGPD", "Droit & PI", "Numérique responsable"],
        analyse:
          "Je prends en compte les contraintes juridiques (RGPD, propriété intellectuelle) et l'empreinte environnementale des données (data centers, cloud) dans mes choix techniques — un pont direct avec la gestion des données et la valeur de la donnée.",
        preuves: [],
      },
    ],
    bilan:
      "Je suis passé du simple « travail en groupe » à une posture de membre actif d'une équipe pluridisciplinaire capable d'accompagner une évolution informatique. La veille et la communication sont devenues des réflexes au service du collectif.",
    pistes: [
      "Formaliser et partager ma veille de manière régulière et structurée.",
      "Prendre un rôle de coordination plus affirmé sur un projet d'équipe.",
      "Approfondir les méthodes d'accompagnement du changement (formation, documentation).",
    ],
  },
];

// Accès rapide par slug (utilisé par la page de détail)
export const competenceBySlug = (slug) => competences.find((c) => c.slug === slug);

// ---------------------------------------------------------------------------
// VUE D'ENSEMBLE — l'ensemble des compétences, en langage simple.
// niveauNum : 1 = Notions, 2 = Intermédiaire, 3 = Avancé.
// Les 3 compétences "focus" ont une page détaillée.
// ---------------------------------------------------------------------------
export const toutesLesCompetences = [
  {
    code: "C1",
    titre: "Réaliser une application",
    plain: "Concevoir et programmer une application qui répond à un besoin précis.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C2",
    titre: "Optimiser une application",
    plain: "Rendre un programme plus rapide, plus fiable et moins gourmand en ressources.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C3",
    titre: "Administrer systèmes & réseaux",
    plain: "Installer, sécuriser et maintenir des serveurs et des réseaux informatiques.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C4",
    titre: "Gérer les données",
    plain: "Modéliser, fiabiliser et exploiter les données pour aider à la décision.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#38bdf8",
    focus: true,
    slug: "gerer-les-donnees",
  },
  {
    code: "C5",
    titre: "Conduire un projet",
    plain: "Organiser un projet informatique et l'intégrer dans une entreprise.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#a78bfa",
    focus: true,
    slug: "conduire-un-projet",
  },
  {
    code: "C6",
    titre: "Collaborer en équipe",
    plain: "Travailler en équipe, communiquer et accompagner le changement.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#34d399",
    focus: true,
    slug: "collaborer-manager",
  },
];
