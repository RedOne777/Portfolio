// ---------------------------------------------------------------------------
// Réalisations — projets universitaires et missions professionnelles.
// Les compétences renvoient aux pages détaillées (c4, c5, c6).
// ⚠️ Remplacez les liens GitHub génériques par les URL exactes des dépôts.
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const projets = [
  {
    id: "aerowise",
    titre: "AeroWise",
    sousTitre: "Gestion de la biodiversité aéroportuaire",
    categorie: "Projet universitaire",
    periode: "BUT3",
    vedette: true,
    description:
      "Plateforme de suivi de la biodiversité sur les emprises aéroportuaires, couplée à un assistant intelligent capable d'interroger des données hétérogènes.",
    points: [
      "Application React avec carte interactive et tableau de bord de suivi des incidents",
      "Chatbot intelligent (RAG) s'appuyant sur PostGIS, Neo4j et Qdrant",
      "Architecture de persistance polyglotte (spatial, graphe, vectoriel)",
    ],
    stack: ["React", "PostGIS", "Neo4j", "Qdrant", "Python"],
    competences: ["c4", "c5", "c6"],
    lien: { github: GITHUB },
  },
  {
    id: "ratp",
    titre: "Modernisation d'un système d'archivage",
    sousTitre: "RATP Infrastructure",
    categorie: "Alternance / Stage",
    periode: "2025 – Présent",
    vedette: true,
    confidentiel: true,
    description:
      "Participation au portage d'un système d'archivage de signalisation ferroviaire, d'une architecture Solaris vers une architecture web moderne.",
    points: [
      "Portage d'un système legacy Solaris vers une architecture web",
      "Rédaction des spécifications fonctionnelles et des controllers",
      "Conception de l'architecture applicative et des maquettes UI/UX",
      "Modélisation des données de signalisation ferroviaire",
      "Requêtage SQL sur base PostgreSQL de production (MobaXterm)",
    ],
    stack: ["PostgreSQL", "Architecture web", "ORM", "MobaXterm", "Figma"],
    competences: ["c4", "c5", "c6"],
    lien: null,
  },
  {
    id: "demographie",
    titre: "Analyse démographique de la France (2019)",
    sousTitre: "Informatique décisionnelle",
    categorie: "Projet universitaire",
    periode: "BUT",
    description:
      "Chaîne décisionnelle complète : de la préparation des données à la restitution sous forme de tableaux de bord.",
    points: [
      "Tableau de bord web interactif (pyramide des âges, carte de France)",
      "Rapport Power BI sur données dénormalisées (modèle en étoile)",
      "Mesures et indicateurs calculés en DAX",
    ],
    stack: ["Power BI", "DAX", "Web", "Data-viz"],
    competences: ["c4", "c5"],
    lien: { github: GITHUB },
  },
  {
    id: "meteovision",
    titre: "MétéoVision",
    sousTitre: "Tableau de bord météorologique",
    categorie: "Projet universitaire",
    periode: "BUT",
    description:
      "Site web de visualisation météo s'appuyant sur des données dynamiques et une base sécurisée.",
    points: [
      "Données dynamiques, graphiques interactifs et carte thermique",
      "Système d'authentification et gestion de base de données",
    ],
    stack: ["Web", "Base de données", "Data-viz", "Auth"],
    competences: ["c4"],
    lien: { github: GITHUB },
  },
  {
    id: "crypto",
    titre: "Cryptographie & sécurité des données",
    sousTitre: "AES et codes correcteurs",
    categorie: "Projet universitaire",
    periode: "BUT",
    description:
      "Implémentation bas niveau des mécanismes garantissant confidentialité et intégrité des données.",
    points: [
      "Implémentation complète du protocole de chiffrement AES en Python",
      "Développement de codes détecteurs et correcteurs d'erreurs",
    ],
    stack: ["Python", "AES", "Théorie de l'information"],
    competences: ["c4"],
    lien: { github: GITHUB },
  },
  {
    id: "reseau",
    titre: "Maquette réseau multi-routeurs",
    sousTitre: "Administration & réseaux",
    categorie: "Projet universitaire",
    periode: "BUT",
    description:
      "Conception et configuration d'une infrastructure réseau d'entreprise simulée.",
    points: [
      "Maquette réseau multi-routeurs Cisco sous GNS3",
      "Mise en place du protocole OSPF, tests de convergence",
      "Analyse de trafic avec Wireshark, configuration de machines virtuelles",
    ],
    stack: ["Cisco", "GNS3", "OSPF", "Wireshark"],
    competences: [],
    lien: null,
  },
];
