# Portfolio BUT3 — Mohamed Ridwan

Portfolio de fin de parcours **BUT Informatique — parcours AGED** (Administration, Gestion
et Exploitation des Données). Site web qui démontre, par une **analyse auto-réflexive**
appuyée sur des traces, l'acquisition du **niveau Confirmé** des 3 compétences de BUT3 :

- **C4 — Gérer les données de l'information** (décisionnel & données massives)
- **C5 — Conduire un projet** (système d'information)
- **C6 — Collaborer au sein d'une équipe informatique** (manager)

> 🌐 **Site en ligne** : **https://ridwan-dev.fr**

---

## 🛠️ Stack technique

- **React 19** + **Vite** — application web monopage (SPA)
- **React Router** — navigation entre les pages
- **Tailwind CSS v4** — système de design
- **Framer Motion** — animations
- **lucide-react** — icônes

## 🚀 Démarrage local

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production (dossier dist/)
npm run preview  # prévisualiser le build
npm run lint     # vérifier le code
```

## 📁 Structure

```
src/
├── data/              ← TOUT LE CONTENU ÉDITABLE EST ICI
│   ├── site.js        ← identité, profil, contact, compétences techniques
│   ├── competences.js ← les 3 compétences : CE, AC, traces, analyse réflexive
│   ├── demarche.js    ← APC, niveaux, échelle d'évaluation
│   ├── projets.js     ← réalisations
│   └── parcours.js    ← formation & expériences
├── components/        ← composants réutilisables (Navbar, cartes, …)
└── pages/             ← une page par route
livrables/
├── Portfolio_Mohamed_Ridwan.pdf  ← PDF à rendre (contient l'URL + QR code)
└── Soutenance_10min.md           ← trame de la soutenance
scripts/
└── generate_pdf.py    ← régénère le PDF avec votre URL
```

## ☁️ Déploiement (Vercel)

1. Pousser ce dépôt sur GitHub (déjà fait).
2. Aller sur [vercel.com](https://vercel.com) → **Add New… → Project** → importer `redone777/portfolio`.
3. Vercel détecte Vite automatiquement (`vite.config.js` + `vercel.json` sont fournis).
   - Build Command : `npm run build`
   - Output Directory : `dist`
4. **Deploy**. Vercel fournit une URL du type `https://portfolio-xxxx.vercel.app`.
5. (Optionnel) Renommer le projet dans les *Settings* pour une URL plus propre.

> **Netlify** : même principe (build `npm run build`, publish `dist`). Le fichier
> `vercel.json` gère la réécriture SPA ; pour Netlify, ajoutez un `_redirects` avec
> `/* /index.html 200`.

## 📄 Régénérer le PDF à rendre

Une fois l'URL connue :

```bash
pip install fpdf2 qrcode pillow
python3 scripts/generate_pdf.py https://votre-vraie-url.vercel.app
```

Le PDF (`livrables/Portfolio_Mohamed_Ridwan.pdf`) contient le lien cliquable et un QR code.

## ✏️ À personnaliser

- [ ] **URL** : déployer puis régénérer le PDF avec l'URL réelle.
- [ ] **Liens des preuves** dans `src/data/competences.js` et `projets.js` : remplacer les
      liens GitHub génériques par les **URL exactes** des dépôts / rapports SAÉ / slides.
- [ ] **Analyses réflexives** : enrichir chaque champ `analyse` avec vos chiffres, anecdotes
      et difficultés précises (c'est ce que le jury valorise le plus).
- [ ] **SAÉ Data mining** (C5) : compléter avec le sujet et les livrables réels.
- [ ] **Photo de profil** (optionnel) : déposer une image dans `public/` et l'intégrer
      dans `src/pages/Profil.jsx` (à la place du bloc « MR »).
- [ ] **Téléphone** : masqué par défaut. Pour l'afficher, passer `afficherTelephone: true`
      dans `src/data/site.js`.
