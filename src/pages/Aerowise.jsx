import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Database, GitBranch, Bot, Map,
  Server, ShieldCheck, Rocket, Layers, Gauge, Users, Wrench,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionNav from '../components/SectionNav'

const ACCENT = '#2f6f9f' // teinte C4 (données)

const SECTIONS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'refonte', label: 'Refonte' },
  { id: 'donnees', label: 'Données' },
  { id: 'base', label: 'Base' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'agent', label: 'Agent IA' },
  { id: 'competences', label: 'Compétences' },
]

const SOURCES = [
  ['GBIF', 'Observations géolocalisées mondiales', 'Les points de la carte'],
  ['TAXREF v17 (INPN/MNHN)', 'Référentiel taxonomique français', 'Pivot : identifiant cd_nom'],
  ['AVONET', 'Traits morphologiques des oiseaux', 'Masses corporelles → score'],
  ['BDC Statuts (INPN)', 'Statuts réglementaires', 'Espèces protégées'],
  ['OurAirports / OpenStreetMap', 'Données aéroportuaires', 'Coordonnées, emprises (polygones)'],
]

const TABLES = [
  ['app.aeroports', 'Plateformes étudiées — Point 4326, emprise MultiPolygon (OSM), index GIST'],
  ['app.especes', '~200 000 espèces — cd_nom (PK TAXREF), score_risque, embedding vector(384), index trigrammes'],
  ['app.occurrences', 'Observations GBIF — Point 4326, date, incertitude, index GIST'],
  ['app.occurrences_aeroport', 'Matérialisation spatiale — distance précalculée, index (aéroport, distance)'],
]

const OUTILS = [
  'rechercher_espece', 'fiche_espece', 'especes_autour',
  'recherche_semantique (pgvector)', 'executer_sql (SELECT sécurisé)',
]

const DIFFICULTES = [
  ['Heatmap invisible à fort zoom', 'Rayon en pixels fixe : points trop écartés', 'Rayon adaptatif au zoom + bascule automatique en points individuels'],
  ['401 sur l’API GBIF Download', 'L’API exige le nom d’utilisateur, pas l’e-mail', 'Correction des identifiants + test des credentials'],
  ['Filigrane « API KEY REQUIRED » sur la carte', 'Les tuiles raster Carto sont devenues payantes', 'Bascule sur le style vectoriel Voyager (libre) — rendu plus net'],
  ['Erreur 500 opaque de l’agent', 'Exceptions du fournisseur LLM non interceptées', 'Messages lisibles dans le chat + passage au streaming SSE'],
]

const COMPETENCES = [
  {
    code: 'C4', titre: 'Gérer les données', slug: 'gerer-les-donnees', color: '#2f6f9f',
    points: [
      'Capturer et stocker des données hétérogènes et volumineuses (GBIF, TAXREF, AVONET)',
      'Préparer et extraire via un pipeline de 11 scripts idempotents',
      'Exploiter pour la décision : score, tableau de bord, fouille de données',
      'Mettre en production et optimiser : matérialisation des distances, index, rôle en lecture seule',
    ],
  },
  {
    code: 'C5', titre: 'Conduire un projet', slug: 'conduire-un-projet', color: '#6b5aa0',
    points: [
      'Projet SI de bout en bout : besoins → architecture → livraison',
      'Mesure des impacts : infrastructure réduite (3 bases → 1), portabilité, déploiement en une commande',
      'Intégration et adaptation d’un système cohérent (ETL → base → API → client)',
    ],
  },
  {
    code: 'C6', titre: 'Collaborer en équipe', slug: 'collaborer-manager', color: '#2e8b6b',
    points: [
      'Équipe de trois, découpe en phases démontrables (données, API, carte, agent)',
      'Git, répartition des rôles et communication continue',
      'Veille (bases nouvelle génération, IA générative) réinvestie dans les choix techniques',
    ],
  },
]

function Block({ id, icon: Icon, kicker, title, children }) {
  return (
    <section id={id} className="mt-16 scroll-mt-28">
      <Reveal>
        <p className="eyebrow" style={{ color: ACCENT }}>{kicker}</p>
        <h2 className="mt-3 flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-[2rem]">
          <Icon size={24} style={{ color: ACCENT }} /> {title}
        </h2>
      </Reveal>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default function Aerowise() {
  return (
    <div className="container-px pt-28 pb-10">
      {/* teinte douce */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80"
        style={{ background: `linear-gradient(180deg, ${ACCENT}14 0%, transparent 100%)` }}
      />

      <Link to="/realisations" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
        <ArrowLeft size={16} /> Toutes les réalisations
      </Link>

      {/* En-tête */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <p className="eyebrow" style={{ color: ACCENT }}>Étude de cas · SAÉ Datamining</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-6xl">AeroWise</h1>
        <p className="mt-4 max-w-3xl text-xl text-muted">
          Analyse du risque animalier autour des aéroports — une chaîne de données complète,
          d'une extraction citable jusqu'à un agent IA qui interroge la base en langage naturel.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span>Équipe : Ridwan Mohamed, Ilyes Daabak, Loïc Bouvil</span>
          <span aria-hidden className="text-line">/</span>
          <span>BUT Informatique — parcours Data</span>
          <span aria-hidden className="text-line">/</span>
          <span>2026</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {COMPETENCES.map((c) => (
            <span key={c.code} className="rounded-md px-2 py-1 text-xs font-semibold" style={{ color: c.color, background: `${c.color}16` }}>
              {c.code} · {c.titre}
            </span>
          ))}
        </div>
      </motion.header>

      <SectionNav sections={SECTIONS} accent={ACCENT} />

      {/* Contexte */}
      <Block id="contexte" icon={Map} kicker="01 · Le problème" title="Contexte & objectifs">
        <div className="prose-block space-y-4 text-muted">
          <p>
            Les collisions entre la faune et les aéronefs (« péril animalier ») sont un enjeu de sécurité
            aérienne : l'OACI recommande la surveillance de la faune dans un rayon de 13 km autour des
            plateformes. <strong className="text-ink">AeroWise</strong> croise des observations naturalistes
            réelles (GBIF) avec un score de dangerosité calculé par espèce.
          </p>
          <p>
            L'application propose une <strong className="text-ink">carte de chaleur du risque</strong> à rayon
            réglable (5 à 50 km), une recherche d'espèces avec fiches détaillées, un tableau de bord statistique
            filtrable, un export Excel, et un <strong className="text-ink">assistant IA</strong> capable
            d'interroger la base en langage naturel.
          </p>
          <p className="text-ink-soft">
            Objectif technique : construire un pipeline complet (extraction → modélisation → exposition →
            visualisation), <em>justifier chaque choix d'architecture</em>, et livrer une application
            démontrable de bout en bout.
          </p>
        </div>
      </Block>

      {/* Refonte — le point réflexif */}
      <Block id="refonte" icon={GitBranch} kicker="02 · La décision clé" title="Une refonte assumée">
        <Reveal>
          <div className="card p-6 sm:p-7" style={{ borderColor: `${ACCENT}44` }}>
            <p className="text-muted">
              Une <strong className="text-ink">première version</strong> reposait sur trois bases
              (PostgreSQL, Neo4j pour les relations, Qdrant pour les vecteurs) et un RAG documentaire.
              L'analyse critique de cette V1 a conduit à une <strong className="text-ink">refonte complète</strong>
              autour de trois constats :
            </p>
            <ol className="mt-5 space-y-4">
              {[
                'Les trois usages (relationnel, spatial, vectoriel) tiennent dans un seul PostgreSQL équipé de PostGIS et pgvector — moins d’infrastructure, et des jointures directes impossibles proprement avec trois bases séparées.',
                'Les questions utiles à un agent sont majoritairement structurées (« top 10 des espèces dangereuses autour de LFPG ») : la bonne réponse est une requête SQL, pas une similarité de texte. L’agent devient un agent à outils, le RAG n’étant qu’un outil parmi d’autres.',
                'Chaque phase devait être démontrable seule : données d’abord, puis API et recherche, puis carte, puis agent — l’agent en dernier, précisément parce que ses outils sont l’API.',
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-sm font-bold" style={{ color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-ink-soft">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Block>

      {/* Données */}
      <Block id="donnees" icon={Database} kicker="03 · La matière" title="Les données">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left text-muted">
                <th className="py-2 pr-4 font-semibold">Source</th>
                <th className="py-2 pr-4 font-semibold">Contenu</th>
                <th className="py-2 font-semibold">Rôle</th>
              </tr>
            </thead>
            <tbody>
              {SOURCES.map(([s, c, r]) => (
                <tr key={s} className="border-b border-line/70">
                  <td className="py-2.5 pr-4 font-medium text-ink">{s}</td>
                  <td className="py-2.5 pr-4 text-muted">{c}</td>
                  <td className="py-2.5 text-muted">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-ink">Pipeline d'extraction</h3>
            <p className="mt-2 text-sm text-muted">
              Extraction GBIF via l'API asynchrone « Occurrence Download » (cercle géodésique de 50 km,
              filtres de qualité, oiseaux & mammifères), rattachement à TAXREF, puis enrichissements
              (masses AVONET, statuts, embeddings). <strong className="text-ink">11 scripts Python
              idempotents</strong> (upsert, ON CONFLICT) : chaque étape est rejouable sans corrompre les données.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-ink">Une limite assumée</h3>
            <p className="mt-2 text-sm text-muted">
              Les données naturalistes sont <em>opportunistes</em> : l'absence d'observation ne signifie pas
              l'absence de l'espèce. Ce biais d'échantillonnage est <strong className="text-ink">affiché dans
              l'application</strong> et constitue un point de discussion central — pas un défaut caché.
            </p>
          </div>
        </div>
      </Block>

      {/* Base */}
      <Block id="base" icon={Layers} kicker="04 · La fondation" title="Une base unique consolidée">
        <p className="text-muted">
          <strong className="text-ink">PostgreSQL 16</strong>, quatre extensions : PostGIS (géométries),
          pgvector (similarité vectorielle), pg_trgm (recherche floue) et unaccent.
        </p>
        <div className="mt-5 space-y-2.5">
          {TABLES.map(([t, d]) => (
            <div key={t} className="flex flex-col gap-1 rounded-lg border border-line bg-surface p-4 sm:flex-row sm:items-baseline sm:gap-4">
              <code className="shrink-0 font-mono text-sm font-semibold" style={{ color: ACCENT }}>{t}</code>
              <span className="text-sm text-muted">{d}</span>
            </div>
          ))}
        </div>
        <Reveal>
          <div className="card-soft mt-5 p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Gauge size={16} style={{ color: ACCENT }} /> Le choix structurant : matérialiser les distances</h3>
            <p className="mt-2 text-sm text-muted">
              Pour chaque couple observation × aéroport à moins de 50 km, la distance géodésique exacte est
              <strong className="text-ink"> précalculée</strong> (ST_DWithin puis ST_Distance). Le « rayon d'analyse »
              de l'interface n'est alors qu'un <strong className="text-ink">filtre sur une colonne indexée</strong> :
              aucun calcul géométrique au moment des requêtes.
            </p>
          </div>
        </Reveal>
      </Block>

      {/* Architecture */}
      <Block id="architecture" icon={Server} kicker="05 · L'assemblage" title="Architecture logicielle">
        <p className="font-mono text-sm text-ink-soft">sources → ETL → PostgreSQL → API (FastAPI) → client React / agent IA</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-ink">API — FastAPI</h3>
            <p className="mt-2 text-sm text-muted">
              Recherche floue d'espèces, fiches, occurrences par rayon, agrégats serveur, export Excel,
              séries filtrables et endpoint agent (streaming SSE).
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-ink">Client — React + MapLibre + deck.gl</h3>
            <p className="mt-2 text-sm text-muted">
              Le dashboard charge une seule fois les occurrences (format colonnaire compact, GZip) : tout le
              filtrage se fait ensuite <strong className="text-ink">dans le navigateur</strong>, curseurs instantanés.
              Heatmap pondérée par le risque, rayon adaptatif au zoom, bascule automatique en points individuels.
            </p>
          </div>
        </div>
      </Block>

      {/* Agent IA */}
      <Block id="agent" icon={Bot} kicker="06 · L'interface intelligente" title="L'agent IA à outils">
        <p className="text-muted">
          L'agent est une <strong className="text-ink">interface en langage naturel vers la base</strong> — pas
          un RAG documentaire. Il dispose de cinq outils, dont un <code className="font-mono text-[13px]">executer_sql</code>
          qui lui permet d'écrire ses propres requêtes SELECT pour les questions hors cadre.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {OUTILS.map((o) => (
            <span key={o} className="rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-ink-soft">{o}</span>
          ))}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="card flex items-start gap-3 p-5">
            <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
            <p className="text-sm text-muted">
              <strong className="text-ink">Garde-fous SQL</strong> : rôle en lecture seule imposé côté serveur,
              délai max 5 s, 200 lignes, une seule instruction, SELECT/WITH uniquement.
            </p>
          </div>
          <div className="card flex items-start gap-3 p-5">
            <Bot size={18} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
            <p className="text-sm text-muted">
              <strong className="text-ink">Vérifiable & portable</strong> : les requêtes exécutées sont affichées,
              la réponse arrive en streaming, et le fournisseur d'IA est interchangeable (OpenAI, Mistral, Groq, Ollama).
            </p>
          </div>
        </div>
      </Block>

      {/* Score + interface + déploiement condensés */}
      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Gauge size={16} style={{ color: ACCENT }} /> Le score de risque</h3>
            <p className="mt-2 text-sm text-muted">
              Oiseaux : masse (log), grégarisme et attirance de l'habitat, d'après les classements de
              dangerosité publiés (Dolbeer). Présenté comme un <strong className="text-ink">indice relatif</strong> ;
              validation prévue par corrélation avec la base FAA (Spearman).
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Wrench size={16} style={{ color: ACCENT }} /> Direction artistique</h3>
            <p className="mt-2 text-sm text-muted">
              Un thème « <strong className="text-ink">carnet de terrain</strong> » (papier crème, vert pin, serif
              éditoriale, noms scientifiques en italique) ancre l'application dans son sujet et la démarque des
              interfaces sombres génériques.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Rocket size={16} style={{ color: ACCENT }} /> Déploiement</h3>
            <p className="mt-2 text-sm text-muted">
              Trois Dockerfile orchestrés par docker-compose, application complète en une commande.
              Partage par dump PostgreSQL : le destinataire n'a ni compte GBIF ni ETL à exécuter.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Difficultés */}
      <Block id="difficultes" icon={Wrench} kicker="07 · Le réel" title="Difficultés & résolutions">
        <div className="space-y-3">
          {DIFFICULTES.map(([p, d, r]) => (
            <Reveal key={p}>
              <div className="grid gap-2 rounded-lg border border-line bg-surface p-4 sm:grid-cols-[1fr_1fr_1.2fr] sm:gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Problème</p>
                  <p className="mt-0.5 text-sm text-ink">{p}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Diagnostic</p>
                  <p className="mt-0.5 text-sm text-muted">{d}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Résolution</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{r}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* Compétences mobilisées */}
      <Block id="competences" icon={Users} kicker="08 · Ce que ça démontre" title="Compétences mobilisées">
        <div className="grid gap-5 md:grid-cols-3">
          {COMPETENCES.map((c) => (
            <Reveal key={c.code}>
              <Link
                to={`/competences/${c.slug}`}
                data-cursor="Explorer"
                className="card group flex h-full flex-col p-6 transition-all hover:-translate-y-1"
              >
                <span className="text-sm font-bold" style={{ color: c.color }}>{c.code}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{c.titre}</h3>
                <ul className="mt-3 flex-1 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: c.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: c.color }}>
                  Voir la compétence <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* Conclusion */}
      <Reveal className="mt-16">
        <div className="card-soft p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">En une phrase</h2>
          <p className="mt-3 text-muted">
            Une chaîne complète et démontrable — extraction citable, base unique indexée, API documentée,
            visualisation instantanée, agent IA vérifiable et sécurisé, déploiement en une commande. Les
            choix structurants sont argumentés et vérifiés à l'usage ; les limites sont identifiées, chacune
            avec une piste concrète.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/competences/gerer-les-donnees" className="btn btn-primary">
              Compétence « Gérer les données » <ArrowRight size={16} />
            </Link>
            <Link to="/realisations" className="link-arrow text-[15px]">
              Autres réalisations <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
