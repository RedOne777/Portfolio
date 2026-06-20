# Déployer le portfolio sur le domaine mohamedridwan.fr

Guide pas à pas pour mettre le site en ligne sur **https://mohamedridwan.fr** via Vercel.

---

## Étape 0 — Prérequis : servir la bonne version

Le domaine affichera la **branche de production** de votre projet Vercel. Il faut donc
qu'elle contienne le dernier code. Deux possibilités :

- **A.** Vercel → votre projet → **Settings → Git** → *Production Branch* =
  `claude/focused-volta-bihyrj`, puis **Redeploy**.
- **B.** Fusionner `claude/focused-volta-bihyrj` dans `main` (et laisser Vercel sur `main`).

> Vérifiez sur l'URL actuelle (`*.vercel.app`) que la **dernière version** s'affiche avant
> de brancher le domaine.

---

## Étape 1 — Obtenir le domaine

### Option A — L'acheter directement via Vercel (le plus simple)
1. Vercel → votre projet → **Settings → Domains**.
2. Tapez `mohamedridwan.fr` → si disponible, **Buy** (paiement annuel).
3. Le DNS est **configuré automatiquement** : passez directement à l'Étape 4.

### Option B — L'acheter chez un registrar (OVH ou Gandi pour le .fr)
1. Créez un compte sur **OVH** (ovh.com) ou **Gandi** (gandi.net).
2. Achetez `mohamedridwan.fr` (~7 à 15 €/an).
3. Continuez à l'Étape 2 puis 3.

---

## Étape 2 — Ajouter le domaine dans Vercel
1. Vercel → votre projet → **Settings → Domains**.
2. Champ *Add Domain* → saisir `mohamedridwan.fr` → **Add**.
3. Ajoutez aussi `www.mohamedridwan.fr` (Vercel proposera de rediriger l'un vers l'autre).
4. Vercel affiche alors **les enregistrements DNS exacts** à créer. **Utilisez toujours
   les valeurs affichées par Vercel** (celles ci-dessous sont les valeurs standard).

---

## Étape 3 — Configurer le DNS chez le registrar (Option B)

Chez OVH/Gandi, ouvrez la **Zone DNS** du domaine et créez :

| Type  | Nom / Sous-domaine | Valeur (cible)             |
|-------|--------------------|----------------------------|
| `A`   | `@` (racine)       | `76.76.21.21`              |
| `CNAME` | `www`            | `cname.vercel-dns.com.`    |

> Supprimez d'éventuels enregistrements A/CNAME en conflit sur `@` et `www`
> (par ex. la page de parking du registrar).

**Alternative (délégation complète à Vercel)** : dans l'onglet *Serveurs DNS* du registrar,
remplacez les serveurs par ceux indiqués par Vercel (généralement
`ns1.vercel-dns.com` et `ns2.vercel-dns.com`). Vercel gère alors tout le DNS.

### Spécifique OVH
- *Espace client → Web Cloud → Noms de domaine → mohamedridwan.fr → Zone DNS → Ajouter une entrée.*
- Pour la racine, le champ « sous-domaine » reste **vide**.

### Spécifique Gandi
- *Domaine → Enregistrements DNS → Ajouter.*

---

## Étape 4 — Domaine principal & redirection
1. Dans **Settings → Domains**, cliquez sur `mohamedridwan.fr` → **Set as Primary Domain**.
2. Laissez `www.mohamedridwan.fr` **rediriger** vers `mohamedridwan.fr` (ou l'inverse, au choix).

---

## Étape 5 — Propagation & HTTPS
- La propagation DNS prend de **quelques minutes à 48 h** (souvent < 1 h).
- Quand Vercel voit le DNS correct, le domaine passe **« Valid Configuration »** et le
  certificat **HTTPS** (SSL) est créé automatiquement.
- Testez ensuite : `https://mohamedridwan.fr`.

---

## Étape 6 — Finaliser
- Régénérer le PDF à rendre avec la nouvelle URL :
  ```bash
  python3 scripts/generate_pdf.py https://mohamedridwan.fr
  ```
- Mettre à jour le lien dans le `README.md` si besoin.

---

## Dépannage
- **« Invalid Configuration »** : l'enregistrement DNS n'est pas encore propagé ou est erroné.
  Vérifiez la valeur exacte et patientez. Outil utile : https://dnschecker.org
- **Le domaine montre une vieille version** : la branche de production n'est pas la bonne
  (revoir l'Étape 0), faites un **Redeploy**.
- **`www` ne marche pas** : vérifiez le CNAME `www → cname.vercel-dns.com`.
