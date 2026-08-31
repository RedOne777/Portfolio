// ---------------------------------------------------------------------------
// COMPÉTENCES — BUT Informatique, parcours C « Administration, gestion et
// exploitation des données ». Libellés, niveaux et apprentissages critiques
// repris du référentiel national (V31AC). En 3ᵉ année, trois compétences
// atteignent le niveau 3 : Gérer les données, Conduire un projet, Collaborer.
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const competences = [
  // =========================================================================
  // C4 — GÉRER DES DONNÉES DE L'INFORMATION
  // =========================================================================
  {
    id: "c4",
    code: "C4",
    slug: "gerer-les-donnees",
    color: "#2f6f9f",
    colorClass: "c4",
    verbe: "Gérer",
    titre: "Gérer les données",
    titreOfficiel: "Gérer des données de l'information",
    niveauNum: 3,
    niveau: "Avancé",
    niveauTitre:
      "Administrer une base de données, concevoir et réaliser des systèmes d'informations décisionnels",
    tagline:
      "De la donnée à la décision : capturer, fiabiliser, exploiter et valoriser des données hétérogènes.",
    definition:
      "Concevoir, administrer et exploiter les données d'une organisation, et mettre à disposition l'information nécessaire au pilotage.",
    casUsage: [
      "Lancer un nouveau projet de données",
      "Sécuriser et fiabiliser des données",
      "Exploiter des données pour la prise de décision",
    ],
    // Apprentissages critiques — niveau 3, parcours C (référentiel)
    apprentissages: [
      "Capturer et stocker des ensembles volumineux et complexes de données hétérogènes",
      "Préparer et extraire les données pour l'exploitation",
      "Appliquer des méthodes d'exploration et d'exploitation des données (apprentissage, informatique décisionnelle, fouille de données)",
      "Mettre en production et optimiser le système de gestion de données de l'entreprise",
    ],
    // Composantes essentielles — le cadre dans lequel la compétence s'exerce
    composantes: [
      "Réglementation vie privée & protection des données (RGPD)",
      "Enjeux économiques, sociétaux et écologiques du stockage (data centers, cloud)",
      "En s'appuyant sur des bases mathématiques",
      "En assurant la cohérence et la qualité des données",
    ],
    traces: [
      {
        titre: "AeroWise — Chaîne de données complète & base unique consolidée",
        contexte: "SAÉ Datamining (3ᵉ année) — Analyse du risque animalier aéroportuaire",
        type: "Projet universitaire",
        stack: ["PostgreSQL 16", "PostGIS", "pgvector", "Python ETL", "FastAPI"],
        analyse:
          "Ma réalisation la plus aboutie côté données. Une première version reposait sur trois bases (PostgreSQL, Neo4j, Qdrant) et un RAG documentaire ; l'analyse critique m'a conduit à une refonte assumée vers une base unique — PostgreSQL équipé de PostGIS (géométries) et pgvector (recherche sémantique) — qui autorise des jointures directes impossibles proprement avec trois bases séparées. Le pipeline capture et stocke des données hétérogènes et volumineuses (observations GBIF, référentiels TAXREF / AVONET) via 11 scripts idempotents, puis les prépare pour l'exploitation décisionnelle (carte de chaleur, tableau de bord, score de risque). Le choix structurant : matérialiser les distances observation × aéroport (ST_DWithin / ST_Distance) pour que le « rayon d'analyse » ne soit plus qu'un filtre indexé. Un rôle en lecture seule et des garde-fous SQL sécurisent l'accès de l'agent IA. Piste : calibrer le score de risque sur la base FAA (corrélation de Spearman).",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/aerowise" }],
      },
      {
        titre: "Analyse démographique de la France (2019) — Système décisionnel",
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
  // C5 — CONDUIRE UN PROJET
  // =========================================================================
  {
    id: "c5",
    code: "C5",
    slug: "conduire-un-projet",
    color: "#6b5aa0",
    colorClass: "c5",
    verbe: "Conduire",
    titre: "Conduire un projet",
    titreOfficiel: "Conduire un projet",
    niveauNum: 3,
    niveau: "Avancé",
    niveauTitre:
      "Participer à la conception et à la mise en œuvre d'un projet système d'information",
    tagline:
      "Faire entrer un projet dans la réalité d'un système d'information : intégrer, adapter, mesurer les impacts.",
    definition:
      "Répondre aux besoins des utilisateurs, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
    casUsage: [
      "Lancer un nouveau projet",
      "Maintenir un système en condition opérationnelle",
      "Faire évoluer un système d'information",
    ],
    apprentissages: [
      "Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique",
      "Intégrer un projet informatique dans le système d'information d'une organisation",
      "Adapter un système d'information",
    ],
    composantes: [
      "En communiquant efficacement avec les acteurs du projet",
      "En respectant les règles juridiques et les normes en vigueur",
      "En sensibilisant à une gestion éthique, responsable et durable",
      "En adoptant une démarche proactive, créative et critique",
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
        titre: "AeroWise — Conduite d'un projet SI de bout en bout",
        contexte: "SAÉ Datamining (3ᵉ année) — Biodiversité aéroportuaire",
        type: "Projet universitaire",
        stack: ["React", "FastAPI", "Docker", "Multi-sources"],
        analyse:
          "Mené comme un projet SI complet : recueil des besoins, conception de l'architecture, puis réalisation d'une application (carte, tableau de bord, agent IA) — de la donnée à l'interface de pilotage. J'y ai mesuré des impacts concrets : réduction de l'infrastructure (d'une architecture 3 bases vers une seule), portabilité du fournisseur d'IA, et déploiement en une commande via Docker. Le sujet, le risque animalier, porte une dimension sécurité et environnementale forte, et le travail d'équipe a exigé une communication continue.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/aerowise" }],
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
  // C6 — COLLABORER AU SEIN D'UNE ÉQUIPE INFORMATIQUE
  // =========================================================================
  {
    id: "c6",
    code: "C6",
    slug: "collaborer-manager",
    color: "#2e8b6b",
    colorClass: "c6",
    verbe: "Collaborer",
    titre: "Collaborer en équipe",
    titreOfficiel: "Collaborer au sein d'une équipe informatique",
    niveauNum: 3,
    niveau: "Avancé",
    niveauTitre: "Manager une équipe informatique",
    tagline:
      "Faire équipe et faire évoluer : veille, conduite du changement et communication au service du collectif.",
    definition:
      "Développer les aptitudes nécessaires pour travailler efficacement au sein d'une équipe informatique pluridisciplinaire.",
    casUsage: [
      "Lancer un nouveau projet en équipe",
      "Organiser son travail avec celui de l'équipe",
      "Élaborer, gérer et transmettre de l'information",
    ],
    apprentissages: [
      "Organiser et partager une veille numérique",
      "Identifier les enjeux de l'économie de l'innovation numérique",
      "Guider la conduite du changement informatique au sein d'une organisation",
      "Accompagner le management de projet informatique",
    ],
    composantes: [
      "Au sein d'une équipe pluridisciplinaire",
      "En accompagnant la mise en œuvre des évolutions informatiques",
      "En veillant au respect des contraintes juridiques",
      "En développant une communication efficace et collaborative",
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
          "Sur mes projets, j'ai organisé le travail collectif : répartition des rôles, utilisation de Git (branches, intégration), suivi de l'avancement et communication régulière. Sur AeroWise, à trois, la découpe en phases démontrables (données, API, carte, agent) a structuré la collaboration. La pluridisciplinarité des sujets m'a appris à articuler des expertises différentes. Piste : standardiser nos rituels (revues de code, rétrospectives).",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Veille technologique — Bases nouvelle génération & IA",
        contexte: "Démarche personnelle",
        type: "Veille",
        stack: ["Spatial / Vectoriel", "RAG / LLM", "Agents à outils"],
        analyse:
          "J'organise une veille sur les bases de données nouvelle génération (spatial, vectoriel) et l'IA générative, que je réinvestis directement dans mes projets — la refonte d'AeroWise vers PostGIS + pgvector et son agent à outils en sont la preuve. Cette veille nourrit ma compréhension des enjeux de la donnée : valeur, souveraineté, coûts d'infrastructure. Piste : formaliser ce partage (synthèses régulières à l'équipe).",
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
// VUE D'ENSEMBLE — les 6 compétences du référentiel (parcours C).
// niveauNum : 2 = niveau atteint en fin de 2ᵉ année, 3 = niveau atteint en 3ᵉ.
// En parcours C, C4/C5/C6 sont poussées au niveau 3 (« cœur d'expertise »).
// ---------------------------------------------------------------------------
export const toutesLesCompetences = [
  {
    code: "C1",
    titre: "Réaliser un développement d'application",
    plain: "Niveau 2 — partir des exigences et aller jusqu'à une application complète.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C2",
    titre: "Optimiser des applications",
    plain: "Niveau 2 — sélectionner les algorithmes adéquats pour un problème donné.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C3",
    titre: "Administrer des systèmes communicants",
    plain: "Niveau 2 — déployer des services dans une architecture réseau.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C4",
    titre: "Gérer des données de l'information",
    plain: "Niveau 3 — administrer une base et concevoir des systèmes décisionnels.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#2f6f9f",
    focus: true,
    slug: "gerer-les-donnees",
  },
  {
    code: "C5",
    titre: "Conduire un projet",
    plain: "Niveau 3 — concevoir et mettre en œuvre un projet système d'information.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#6b5aa0",
    focus: true,
    slug: "conduire-un-projet",
  },
  {
    code: "C6",
    titre: "Collaborer dans une équipe",
    plain: "Niveau 3 — manager une équipe informatique.",
    niveau: "Avancé",
    niveauNum: 3,
    color: "#2e8b6b",
    focus: true,
    slug: "collaborer-manager",
  },
];
