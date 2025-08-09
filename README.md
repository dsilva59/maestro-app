# MAESTRO – Starter (GitHub + Ionos Deploy Now)

Ce dépôt contient :
- **apps/web** : Front Next.js export statique (compatible Ionos Deploy Now Free)
- **apps/api** : API Node (Express) déployable via Render/Railway (gratuit) ou Docker (Deploy Now)
- **.github/workflows** : build Front automatiquement (optionnel)

## Déploiement Front (Ionos Deploy Now)
1. Pousse ce repo sur GitHub.
2. Dans Ionos > Deploy Now, connecte GitHub et sélectionne ce repo.
3. Paramètres Build :
   - Framework : Next.js
   - Commande : `npm ci && npm run -w apps/web build`
   - Dossier de sortie : `apps/web/out`
4. Branche ton domaine (CNAME) depuis Deploy Now.

## Déploiement API (gratuit – Render)
1. Crée un service Web sur Render.
2. Repo : ce même repo ; Répertoire racine : `apps/api`
3. Variables d'env : `PORT=3001`, `DATABASE_URL=postgres://...`
4. (Optionnel) PostgreSQL gratuit : Neon/Supabase.

## Variables front
Dans Deploy Now > Variables :
- `NEXT_PUBLIC_API_BASE_URL` = URL publique de l'API (ex : https://maestro-api.onrender.com)

Bonne mise en ligne !
