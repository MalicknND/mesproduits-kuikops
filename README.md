# Mes Produits

Application Angular 18 de gestion de produits avec authentification JWT, gestion des categories et recherche.

## Fonctionnalites

- Lister les produits
- Ajouter un produit
- Modifier un produit
- Supprimer un produit
- Rechercher des produits par nom
- Rechercher des produits par categorie
- Lister et ajouter des categories
- Se connecter avec un compte utilisateur
- Creer un compte utilisateur
- Verifier une adresse email avec un code de validation
- Proteger certaines actions avec un role `ADMIN`

## Technologies

- Angular 18
- TypeScript
- Bootstrap 5
- RxJS
- Auth0 Angular JWT
- ngx-toastr
- Karma / Jasmine

## Prerequis

Avant de lancer le projet, installez :

- Node.js
- npm
- Angular CLI, via `npx` ou en installation globale

L'application depend aussi de deux services backend :

- API produits/categories : `http://localhost:8081`
- API utilisateurs/authentification : `http://localhost:8082`

## Installation

Installez les dependances :

```bash
npm install
```

## Lancer l'application

Demarrez le serveur de developpement :

```bash
npm start
```

Puis ouvrez :

```text
http://localhost:4200
```

## Commandes utiles

```bash
npm start
```

Lance l'application en developpement.

```bash
npm run build
```

Compile le projet dans le dossier `dist/`.

```bash
npm run watch
```

Compile automatiquement le projet en mode developpement.

```bash
npm test
```

Lance les tests unitaires avec Karma et Jasmine.

## Configuration des API

Les URL du backend produits et categories sont configurees dans :

- `src/environments/environment.development.ts`

Configuration actuelle :

```ts
export const environment = {
  apiURL: 'http://localhost:8081/produits/api',
  apiURLCat: 'http://localhost:8081/produits/cat',
};
```

L'URL du backend utilisateurs est configuree dans :

- `src/app/services/auth.service.ts`

Configuration actuelle :

```ts
apiURL: string = 'http://localhost:8082/users';
```

## Routes principales

| Route | Description |
| --- | --- |
| `/produits` | Liste des produits |
| `/add-produit` | Ajout d'un produit, reserve au role `ADMIN` |
| `/updateProduit/:id` | Modification d'un produit |
| `/rechercheParCategorie` | Recherche par categorie |
| `/rechercheParNom` | Recherche par nom |
| `/listeCategories` | Gestion des categories |
| `/login` | Connexion |
| `/register` | Creation de compte |
| `/verifEmail` | Verification email |
| `/app-forbidden` | Page d'acces interdit |

La route racine `/` redirige vers `/produits`.

## Backend attendu

Le frontend ne stocke pas les donnees localement. Il consomme une API REST.

### Produits

Endpoints utilises par `ProduitService` :

- `GET /produits/api/all`
- `GET /produits/api/getById/{id}`
- `POST /produits/api/addprod`
- `PUT /produits/api/updateprod`
- `DELETE /produits/api/delprod/{id}`
- `GET /produits/api/prodscat/{idCat}`
- `GET /produits/api/prodsByName/{nom}`

### Categories

Endpoints utilises par `ProduitService` :

- `GET /produits/cat`
- `POST /produits/cat`

La liste des categories est recuperee via un wrapper compatible Spring Data REST.

### Utilisateurs

Endpoints utilises par `AuthService` :

- `POST /users/login`
- `POST /users/register`
- `GET /users/verifyEmail/{code}`

Apres connexion, le token JWT est conserve dans le `localStorage` sous la cle `jwt`.

## Authentification et droits

L'application utilise un token JWT pour identifier l'utilisateur connecte.

Le service `AuthService` decode le token afin de recuperer :

- le nom de l'utilisateur connecte
- les roles de l'utilisateur
- l'expiration du token

La route `/add-produit` est protegee par `produitGuard`. Elle est accessible uniquement si l'utilisateur possede le role `ADMIN`. Sinon, l'utilisateur est redirige vers `/app-forbidden`.

## Donnees principales

### Produit

Un produit contient :

- `idProduit`
- `nomProduit`
- `prixProduit`
- `dateCreation`
- `categorie`

### Categorie

Une categorie contient :

- `idCat`
- `nomCat`

### User

Un utilisateur contient :

- `username`
- `password`
- `roles`
- `email`
- `enabled`

## Structure du projet

Fichiers et dossiers importants :

- `src/app/app.routes.ts` : configuration des routes
- `src/app/app.component.html` : barre de navigation principale
- `src/app/services/produit.service.ts` : appels HTTP produits et categories
- `src/app/services/auth.service.ts` : connexion, inscription, JWT et verification email
- `src/app/services/token.interceptor.ts` : ajout du token aux requetes HTTP
- `src/app/produit.guard.ts` : protection des routes reservees aux administrateurs
- `src/app/produits/` : liste des produits
- `src/app/add-produit/` : formulaire d'ajout de produit
- `src/app/update-produit/` : formulaire de modification de produit
- `src/app/recherche-par-categorie/` : recherche par categorie
- `src/app/recherche-par-nom/` : recherche par nom
- `src/app/liste-categories/` : gestion des categories
- `src/app/login/` : connexion
- `src/app/register/` : inscription
- `src/app/verif-email/` : verification email
- `src/app/model/` : modeles de donnees

## Documentation

Un guide debutant est disponible ici :

- `docs/guide-debutant.md`

## Notes de developpement

Si la liste des produits, la connexion ou les formulaires ne fonctionnent pas, verifiez d'abord que les backends sont demarres sur les bons ports.

En cas d'erreur d'autorisation, verifiez aussi que le token JWT contient bien le role attendu, par exemple `ADMIN` pour l'ajout de produit.
