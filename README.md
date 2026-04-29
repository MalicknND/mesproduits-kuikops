# Mes Produits

Application Angular 18 de gestion de produits.

Ce projet permet de :
- lister les produits
- ajouter un produit
- modifier un produit
- supprimer un produit

L'interface est construite avec Angular et Bootstrap, et les donnees sont recuperees via une API REST disponible en local sur `http://localhost:8081/produits/api`.

## Apercu du projet

L'application contient 3 ecrans principaux :
- `produits` : affiche la liste des produits
- `add-produit` : formulaire d'ajout
- `updateProduit/:id` : formulaire de modification

Chaque produit contient les informations suivantes :
- `idProduit`
- `nomProduit`
- `prixProduit`
- `dateCreation`

## Prerequis

Avant de lancer le projet, il faut avoir :
- `Node.js` installe
- `npm` installe
- Angular CLI disponible via `npx` ou installe globalement
- une API backend demarree sur `http://localhost:8081`

## Installation

Installer les dependances :

```bash
npm install
```

## Lancer le projet

Demarrer le serveur de developpement :

```bash
npm start
```

Puis ouvrir :

```text
http://localhost:4200
```

## Commandes utiles

Lancer l'application en developpement :

```bash
npm start
```

Construire le projet :

```bash
npm run build
```

Lancer les tests :

```bash
npm test
```

## Fonctionnement de l'application

### Liste des produits

La page d'accueil redirige vers la liste des produits. Cette page affiche :
- l'identifiant
- le nom
- le prix
- la date de creation

Deux actions sont disponibles pour chaque ligne :
- `Supprimer`
- `Modifier`

### Ajout d'un produit

Le formulaire d'ajout permet de saisir :
- le nom du produit
- le prix
- la date de creation

L'identifiant est masque dans le formulaire et est en general gere par le backend.

### Modification d'un produit

Le formulaire de modification recharge un produit a partir de son identifiant dans l'URL, puis permet de modifier :
- le nom
- le prix
- la date de creation

## Structure du projet

Voici les fichiers importants :

- `src/app/services/produit.service.ts` : appels HTTP vers l'API REST
- `src/app/produits/` : affichage de la liste
- `src/app/add-produit/` : ajout d'un produit
- `src/app/update-produit/` : modification d'un produit
- `src/app/model/` : modeles `Produit` et `Categorie`
- `src/app/app.routes.ts` : routes de navigation

## Point important sur le backend

Cette application frontend ne stocke pas les donnees toute seule. Elle depend d'un backend qui doit exposer les routes REST compatibles avec :

- `GET /produits/api`
- `GET /produits/api/{id}`
- `POST /produits/api`
- `PUT /produits/api`
- `DELETE /produits/api/{id}`

Si le backend n'est pas demarre, la liste des produits et les formulaires ne fonctionneront pas correctement.

## Documentation debutant

Un guide simple pas a pas est disponible ici :

- `docs/guide-debutant.md`

## Technologies utilisees

- Angular 18
- TypeScript
- Bootstrap 5
- RxJS
- Karma / Jasmine
