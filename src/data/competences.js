// ---------------------------------------------------------------------------
// LES 3 COMPÉTENCES DE BUT3 — Parcours AGED — Niveau « Confirmé »
//
// Contenu fondé sur le Programme National (référentiel V31AC) et sur les
// expériences réelles (alternance/stage RATP + projets universitaires).
//
// ⚠️ À COMPLÉTER PAR MOHAMED :
//   - Remplacer les liens "preuves" génériques (profil GitHub) par les URL
//     exactes des dépôts / rapports SAÉ / slides de soutenance.
//   - Les traces RATP sont marquées "confidentielles" : adaptez selon ce que
//     vous êtes autorisé à publier.
//   - Affinez chaque champ "analyse" avec vos chiffres et anecdotes précises.
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const competences = [
  // =========================================================================
  // COMPÉTENCE 4 — GÉRER LES DONNÉES
  // =========================================================================
  {
    id: "c4",
    code: "C4",
    slug: "gerer-les-donnees",
    color: "#38bdf8",
    colorClass: "c4",
    verbe: "Gérer",
    titre: "Gérer les données de l'information",
    niveau3:
      "Administrer une base de données, concevoir et réaliser des systèmes d'information décisionnels",
    tagline:
      "De la modélisation à la décision : capturer, fiabiliser, exploiter et valoriser des données hétérogènes.",
    definition:
      "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
    situationsPro: [
      "Lancer un nouveau projet",
      "Sécuriser des données",
      "Exploiter des données pour la prise de décisions",
    ],
    composantesEssentielles: [
      { code: "CE1", texte: "En respectant les réglementations sur la vie privée et la protection des données personnelles" },
      { code: "CE2", texte: "En respectant les enjeux économiques, sociétaux et écologiques du stockage de données et des infrastructures (data centers, cloud…)" },
      { code: "CE3", texte: "En s'appuyant sur des bases mathématiques" },
      { code: "CE4", texte: "En assurant la cohérence et la qualité" },
    ],
    apprentissagesCritiques: [
      { code: "AC1", texte: "Capturer et stocker des ensembles volumineux et complexes de données hétérogènes" },
      { code: "AC2", texte: "Préparer et extraire les données pour l'exploitation" },
      { code: "AC3", texte: "Appliquer des méthodes d'exploration et d'exploitation des données (apprentissage, informatique décisionnelle ou fouille de données)" },
      { code: "AC4", texte: "Mettre en production et optimiser le système de gestion de données de l'entreprise" },
    ],
    ressources: [
      "Nouvelles bases de données",
      "Exploitation des bases de données",
      "Données massives (Big Data)",
      "Techniques d'intelligence artificielle",
      "Statistiques",
      "Optimisation des données",
      "Administration des bases de données",
      "Aide à la décision",
    ],
    saes: ["Projet de data mining", "Organisation & protection des données", "Stage & apprentissage (RATP)"],
    autoPositionnement: {
      plage: "13 – 16",
      vers: "17 – 20",
      intitule: "Confirmé",
      argument:
        "C'est ma compétence la plus aboutie. Mes traces ne se contentent pas d'illustrer chaque composante isolément : elles montrent des liens forts entre la nature des données, le choix de stockage et la finalité décisionnelle. Sur AeroWise et l'alternance RATP, j'analyse aussi les résultats de mes choix (cohérence multi-bases, contraintes de production), ce qui m'amène vers la régulation continue propre au plus haut niveau de l'échelle.",
    },
    traces: [
      {
        titre: "AeroWise — Assistant intelligent sur données hétérogènes",
        contexte: "Projet universitaire — Gestion de la biodiversité aéroportuaire",
        type: "Projet universitaire",
        ac: ["AC1", "AC2", "AC3"],
        ce: ["CE3", "CE4"],
        stack: ["PostGIS", "Neo4j", "Qdrant", "Python", "RAG"],
        analyse:
          "Ce projet est ma démonstration la plus forte de l'AC1 : j'ai dû stocker des données complexes et hétérogènes en mobilisant trois paradigmes complémentaires — spatial avec PostGIS (zones aéroportuaires), graphe avec Neo4j (relations espèces / incidents) et vectoriel avec Qdrant (recherche sémantique). Le choix de chaque moteur découle de la nature de la donnée et du type de requête, ce qui illustre une « persistance polyglotte » assumée. Le chatbot s'appuie sur une approche RAG : préparation et vectorisation des contenus (AC2) puis exploration par recherche de similarité (AC3, fouille de données). La principale tension a été la cohérence entre les trois bases (CE4) ; j'y répondrais aujourd'hui par une couche d'ingestion unifiée et un suivi de fraîcheur des données.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Analyse démographique de la France (2019) — Tableau de bord décisionnel",
        contexte: "Projet universitaire — Informatique décisionnelle",
        type: "Projet universitaire",
        ac: ["AC2", "AC3"],
        ce: ["CE3", "CE4"],
        stack: ["Power BI", "DAX", "Modèle en étoile", "Web"],
        analyse:
          "Trace centrale pour l'AC3 (informatique décisionnelle) : j'ai construit un rapport Power BI à partir de données dénormalisées et de mesures DAX, complété par un tableau de bord web interactif (pyramide des âges, carte de France). La dénormalisation en modèle en étoile relève de l'AC2 (préparation/extraction pour l'exploitation) et matérialise un arbitrage assumé entre intégrité (OLTP) et performance analytique (OLAP). Les indicateurs démographiques mobilisent des bases mathématiques et statistiques (CE3) et un travail de nettoyage garantissant la qualité (CE4). Piste : automatiser le rafraîchissement incrémental et formaliser la sécurité au niveau ligne.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "RATP — Exploitation SQL en production & modélisation de la signalisation",
        contexte: "Alternance / Stage — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        ac: ["AC1", "AC2", "AC4"],
        ce: ["CE1", "CE2", "CE4"],
        stack: ["PostgreSQL (prod)", "MobaXterm", "ORM"],
        analyse:
          "En entreprise, j'ai requêté une base PostgreSQL de production (via MobaXterm) et modélisé des données de signalisation ferroviaire — un jeu de données complexe et critique (AC1, AC2). La découverte de l'architecture entre l'ORM et la base m'a fait toucher du doigt l'AC4 : ce qui sépare une base d'école d'un système en production (volume, criticité, habilitations, plans d'exécution). La sensibilité des données impose le respect strict des accès et des réglementations (CE1) et une conscience des contraintes d'infrastructure (CE2). La tension majeure : interroger la production sans dégrader le service, ce qui m'a imposé prudence, requêtes en lecture et fenêtres adaptées. Cette trace m'a fait progresser de l'« exécution » vers la responsabilité.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "MétéoVision — Restitution de données dynamiques",
        contexte: "Projet universitaire — Tableau de bord météorologique",
        type: "Projet universitaire",
        ac: ["AC2", "AC3"],
        ce: ["CE4"],
        stack: ["Web", "Base de données", "Auth", "Data-viz"],
        analyse:
          "Ce site exploite des données dynamiques restituées via des graphiques interactifs et une carte thermique (AC2, AC3 : organisation de la restitution par la programmation et la visualisation). La gestion de l'authentification et de la base de données complète la dimension administration (AC4 au niveau précédent), et la cohérence des données affichées relève de la CE4. Piste d'amélioration identifiée : mise en cache et indicateur de fraîcheur de la donnée.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Cryptographie & sécurité des données — AES et codes correcteurs",
        contexte: "Projet universitaire — Sécurité",
        type: "Projet universitaire",
        ac: ["AC4"],
        ce: ["CE1"],
        stack: ["Python", "AES", "Codes détecteurs/correcteurs"],
        analyse:
          "J'ai implémenté l'intégralité du protocole de chiffrement AES en Python ainsi que des codes détecteurs et correcteurs d'erreurs. Cette trace ancre la CE1 (confidentialité) et la notion d'intégrité des données : je considère la sécurité non comme une option mais comme une propriété intrinsèque de la gestion de données. Piste : intégrer une vraie gestion de clés et raisonner sur des modèles de menace réalistes.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
    ],
    bilan:
      "Sur deux ans, je suis passé de la conception d'une base relationnelle simple à l'administration de données massives et hétérogènes orientées décision. Je sais désormais choisir le bon moteur selon la donnée, préparer la donnée pour l'analyse et la restituer pour la décision, le tout sous contrainte de sécurité et de qualité.",
    pistes: [
      "Approfondir l'optimisation fine (plans d'exécution, indexation avancée, partitionnement).",
      "Industrialiser les pipelines de données (orchestration, tests de qualité automatisés, observabilité).",
      "Monter en compétence sur le ML appliqué à l'exploitation de données massives.",
    ],
  },

  // =========================================================================
  // COMPÉTENCE 5 — CONDUIRE UN PROJET
  // =========================================================================
  {
    id: "c5",
    code: "C5",
    slug: "conduire-un-projet",
    color: "#a78bfa",
    colorClass: "c5",
    verbe: "Conduire",
    titre: "Conduire un projet",
    niveau3:
      "Participer à la conception et à la mise en œuvre d'un projet système d'information",
    tagline:
      "Faire entrer un projet dans la réalité d'un système d'information : intégrer, adapter, mesurer les impacts.",
    definition:
      "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
    situationsPro: [
      "Lancer un nouveau projet",
      "Piloter le maintien d'un projet en condition opérationnelle",
      "Faire évoluer un système d'information",
    ],
    composantesEssentielles: [
      { code: "CE1", texte: "En communiquant efficacement avec les différents acteurs d'un projet" },
      { code: "CE2", texte: "En respectant les règles juridiques et les normes en vigueur" },
      { code: "CE3", texte: "En sensibilisant à une gestion éthique, responsable, durable et interculturelle" },
      { code: "CE4", texte: "En adoptant une démarche proactive, créative et critique" },
    ],
    apprentissagesCritiques: [
      { code: "AC1", texte: "Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique" },
      { code: "AC2", texte: "Savoir intégrer un projet informatique dans le système d'information d'une organisation" },
      { code: "AC3", texte: "Savoir adapter un système d'information" },
    ],
    ressources: [
      "Web & bases de données",
      "Optimisation des données dans le système d'information",
      "Aide à la décision",
    ],
    saes: ["Projet de data mining", "Organisation & protection des données", "Stage & apprentissage (RATP)"],
    autoPositionnement: {
      plage: "13 – 16",
      vers: null,
      intitule: "Confirmé",
      argument:
        "L'alternance chez RATP m'a placé au cœur d'un vrai projet SI : la modernisation d'un système d'archivage. Je ne décris pas seulement des tâches, je relie l'adaptation technique aux besoins métier, aux contraintes de l'existant et aux impacts (dette technique, continuité de service). Les liens entre action et apprentissages sont explicites ; ma marge de progression porte sur la recette et le pilotage formel des risques.",
    },
    traces: [
      {
        titre: "RATP — Modernisation d'un système d'archivage : du legacy Solaris au web",
        contexte: "Alternance / Stage — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        ac: ["AC1", "AC2", "AC3"],
        ce: ["CE1", "CE4"],
        stack: ["Architecture web", "Solaris (legacy)", "Spécifications", "UI/UX"],
        analyse:
          "Trace phare de cette compétence. J'ai participé au portage d'un système d'archivage de Solaris vers une architecture web moderne : c'est une adaptation profonde d'un système d'information existant (AC3). Le travail a impliqué la rédaction des spécifications fonctionnelles et des controllers, la conception de l'architecture applicative et des maquettes UI/UX — autant d'éléments qui doivent s'intégrer dans le SI existant de RATP (AC2). J'ai aussi mesuré les impacts (AC1) : obsolescence et dette technique du legacy, coût de maintenance, exigence de continuité de service sur un système critique. La rédaction de specs et la validation des maquettes auprès des utilisateurs métier matérialisent la communication entre acteurs (CE1) et une démarche proactive et critique (CE4). Ma piste : structurer davantage la phase de recette et la gestion des risques.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "AeroWise — Conception et mise en œuvre d'un SI de suivi des incidents",
        contexte: "Projet universitaire — Biodiversité aéroportuaire",
        type: "Projet universitaire",
        ac: ["AC2", "AC3"],
        ce: ["CE1", "CE3", "CE4"],
        stack: ["React", "Dashboard", "Cartographie", "Multi-bases"],
        analyse:
          "Mené comme un projet SI complet : recueil des besoins, conception de l'architecture, puis réalisation d'une application React avec carte interactive et tableau de bord de suivi des incidents. La mise en œuvre d'un SI cohérent (de la donnée à l'interface de pilotage) illustre les AC2 et AC3. Le sujet — la biodiversité aéroportuaire — porte une dimension sociétale et environnementale (CE3), et le travail d'équipe a exigé une communication continue avec les parties prenantes (CE1). La démarche, créative dans le choix d'un assistant intelligent, relève de la CE4.",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Projet Data mining — De la donnée brute à l'aide à la décision",
        contexte: "Projet de 3ᵉ année",
        type: "Projet",
        ac: ["AC1", "AC3"],
        ce: ["CE2", "CE3"],
        stack: ["Data mining", "Aide à la décision"],
        analyse:
          "Ce projet relie l'exploitation décisionnelle des données à un projet SI : adapter le SI pour y intégrer une brique d'aide à la décision (AC3) et mesurer les impacts d'un tel projet (AC1). Elle mobilise le respect des règles juridiques sur les données exploitées (CE2, RGPD) et une réflexion éthique sur leur usage (CE3). [À compléter avec le sujet précis, le jeu de données et les livrables de votre projet.]",
        preuves: [{ label: "Rapport — à relier", url: null }],
      },
    ],
    bilan:
      "J'ai compris qu'un projet informatique n'existe pas hors-sol : il s'intègre dans un système d'information vivant, avec un existant, des utilisateurs et des contraintes. Je sais aujourd'hui formaliser des besoins, proposer une cible et accompagner une évolution en tenant compte de ses impacts.",
    pistes: [
      "Renforcer la gestion formelle des risques et la planification (jalons, recette, plan de tests).",
      "Approfondir les méthodes agiles à l'échelle d'une organisation.",
      "Quantifier davantage les impacts (coûts, ROI, empreinte) pour objectiver les décisions.",
    ],
  },

  // =========================================================================
  // COMPÉTENCE 6 — COLLABORER / MANAGER
  // =========================================================================
  {
    id: "c6",
    code: "C6",
    slug: "collaborer-manager",
    color: "#34d399",
    colorClass: "c6",
    verbe: "Collaborer",
    titre: "Collaborer au sein d'une équipe informatique",
    niveau3: "Manager une équipe informatique",
    tagline:
      "Faire équipe et faire évoluer : veille, conduite du changement et communication au service du collectif.",
    definition:
      "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
    situationsPro: [
      "Lancer un nouveau projet",
      "Organiser son travail en relation avec celui de son équipe",
      "Élaborer, gérer et transmettre de l'information",
    ],
    composantesEssentielles: [
      { code: "CE1", texte: "En inscrivant sa démarche au sein d'une équipe pluridisciplinaire" },
      { code: "CE2", texte: "En accompagnant la mise en œuvre des évolutions informatiques" },
      { code: "CE3", texte: "En veillant au respect des contraintes juridiques" },
      { code: "CE4", texte: "En développant une communication efficace et collaborative" },
    ],
    apprentissagesCritiques: [
      { code: "AC1", texte: "Organiser et partager une veille numérique" },
      { code: "AC2", texte: "Identifier les enjeux de l'économie de l'innovation numérique" },
      { code: "AC3", texte: "Guider la conduite du changement informatique au sein d'une organisation" },
      { code: "AC4", texte: "Accompagner le management de projet informatique" },
    ],
    ressources: [
      "Initiation au management",
      "Communication",
      "Économie durable et numérique",
      "Entrepreneuriat",
      "Droit du numérique et propriété intellectuelle",
      "Communication : information et transmission",
    ],
    saes: ["Projet de data mining", "Organisation & protection des données", "Stage & apprentissage (RATP)"],
    autoPositionnement: {
      plage: "13 – 16",
      vers: null,
      intitule: "Confirmé",
      argument:
        "L'alternance m'a fait vivre la conduite du changement « de l'intérieur » : accompagner le passage d'un système legacy vers une solution moderne auprès d'équipes métier. Je relie cette expérience à ma pratique du travail d'équipe en projet et à une veille active réinvestie concrètement. Je vise le niveau supérieur en formalisant davantage mes démarches de veille et de communication.",
    },
    traces: [
      {
        titre: "RATP — Accompagner la conduite du changement d'un système critique",
        contexte: "Alternance — RATP Infrastructure",
        type: "Expérience professionnelle",
        confidentiel: true,
        ac: ["AC3", "AC4"],
        ce: ["CE1", "CE2"],
        stack: ["Conduite du changement", "Équipe pluridisciplinaire"],
        analyse:
          "La modernisation du système d'archivage n'est pas qu'un défi technique : c'est une conduite du changement (AC3). J'ai travaillé au sein d'une équipe pluridisciplinaire (métier ferroviaire de la signalisation, IT, encadrement) où il faut accompagner les utilisateurs vers de nouveaux outils (CE1, CE2). Participer aux échanges et au suivi du projet relève de l'accompagnement du management de projet (AC4). J'y ai appris que faire adopter une évolution compte autant que la livrer. Piste : formaliser un plan de communication et de formation des utilisateurs.",
        preuves: [{ label: "Démonstration sur demande (données internes RATP)", url: null }],
      },
      {
        titre: "Projets en équipe — Organisation, Git et communication collaborative",
        contexte: "Projets universitaires (AeroWise, MétéoVision…)",
        type: "Projet universitaire",
        ac: ["AC4"],
        ce: ["CE1", "CE4"],
        stack: ["Git", "Gestion de projet", "Communication"],
        analyse:
          "Sur mes projets universitaires, j'ai organisé le travail collectif : répartition des rôles, utilisation de Git (branches, intégration), suivi de l'avancement et communication régulière (AC4, CE4). La pluridisciplinarité des sujets (données, cartographie, IA, interface) m'a appris à articuler des expertises différentes au sein d'une même équipe (CE1). Piste : standardiser nos rituels (revues de code, rétrospectives).",
        preuves: [{ label: "Dépôt GitHub", url: GITHUB }],
      },
      {
        titre: "Veille technologique — Bases de données nouvelle génération & IA",
        contexte: "Démarche personnelle",
        type: "Veille",
        ac: ["AC1", "AC2"],
        ce: [],
        stack: ["Vector DB", "Graphes", "RAG / LLM"],
        analyse:
          "J'organise une veille sur les bases de données nouvelle génération (vectoriel avec Qdrant, graphe avec Neo4j) et l'IA générative, que je réinvestis directement dans mes projets — AeroWise en est la preuve (AC1 : veille organisée et partagée à l'équipe). Cette veille nourrit ma compréhension des enjeux de l'économie de l'innovation numérique (AC2) : valeur de la donnée, souveraineté, coûts d'infrastructure. Piste : formaliser cette veille (partage écrit régulier à l'équipe).",
        preuves: [{ label: "Profil GitHub & projets", url: GITHUB }],
      },
      {
        titre: "Cadre juridique, économique et durable du numérique",
        contexte: "Cours (Droit, Entrepreneuriat, Économie durable)",
        type: "Apports théoriques",
        ac: ["AC2"],
        ce: ["CE3"],
        stack: ["RGPD", "Droit & PI", "Numérique responsable"],
        analyse:
          "Les ressources de droit du numérique et de propriété intellectuelle, d'entrepreneuriat et d'économie durable structurent ma prise en compte des contraintes juridiques (CE3) et des enjeux économiques de l'innovation (AC2). Je relie l'empreinte environnementale des données (data centers, cloud) à mes choix techniques — un pont direct avec la compétence Gérer les données.",
        preuves: [{ label: "Synthèses de cours — à relier", url: null }],
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
// VUE D'ENSEMBLE — les 6 compétences acquises sur les 3 ans, en langage simple.
// niveauNum : 1 = Novice, 2 = Intermédiaire, 3 = Confirmé (le plus avancé).
// Les 3 compétences "focus" (niveau Confirmé) ont une page détaillée.
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
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#38bdf8",
    focus: true,
    slug: "gerer-les-donnees",
  },
  {
    code: "C5",
    titre: "Conduire un projet",
    plain: "Organiser un projet informatique et l'intégrer dans une entreprise.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#a78bfa",
    focus: true,
    slug: "conduire-un-projet",
  },
  {
    code: "C6",
    titre: "Collaborer en équipe",
    plain: "Travailler en équipe, communiquer et accompagner le changement.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#34d399",
    focus: true,
    slug: "collaborer-manager",
  },
];

