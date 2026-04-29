# Guide debutant

Ce document explique le projet simplement, pour une personne qui debute avec Angular ou avec ce type d'application.

## 1. A quoi sert cette application ?

Cette application sert a gerer une liste de produits.

Concretement, on peut :
- voir tous les produits
- ajouter un nouveau produit
- modifier un produit existant
- supprimer un produit

L'application est un **frontend** : elle affiche des pages et envoie des requetes a un **backend** qui contient les vraies donnees.

## 2. Difference entre frontend et backend

Pour bien comprendre :

- le **frontend** correspond a l'interface visible dans le navigateur
- le **backend** correspond au serveur qui enregistre et renvoie les donnees

Dans ce projet :
- Angular gere le frontend
- une API locale sur `http://localhost:8081/produits/api` gere les donnees

Si le backend n'est pas lance, le frontend peut s'ouvrir, mais il ne pourra pas charger ni enregistrer les produits.

## 3. Ce qu'il faut installer

Avant de commencer, il faut avoir :

1. `Node.js`
2. `npm`
3. idealement un terminal
4. le backend demarre en local

Pour verifier `Node.js` et `npm`, tu peux utiliser :

```bash
node -v
npm -v
```

## 4. Comment lancer le projet

Place-toi dans le dossier du projet puis execute :

```bash
npm install
npm start
```

Ensuite, ouvre :

```text
http://localhost:4200
```

## 5. Ce que tu verras dans l'application

### La barre de navigation

En haut, il y a une barre de navigation avec :
- un lien vers l'accueil
- un menu `Produits`
- une entree `Ajouter`

### La page liste

La page principale affiche un tableau avec :
- l'id du produit
- le nom
- le prix
- la date de creation

Sur chaque ligne, il y a deux boutons :
- `Supprimer`
- `Modifier`

### La page d'ajout

Cette page contient un formulaire. Tu peux renseigner :
- le nom du produit
- le prix
- la date de creation

Puis cliquer sur `Ajouter`.

### La page de modification

Cette page ressemble au formulaire d'ajout, mais :
- l'id du produit est deja rempli
- tu peux modifier les autres champs
- le bouton enregistre les changements

## 6. Comment le code est organise

Voici les dossiers et fichiers les plus utiles a connaitre.

### `src/app/model`

Ce dossier contient les modeles de donnees.

- `produit.model.ts` : definit la structure d'un produit
- `categorie.model.ts` : definit la structure d'une categorie

Un **modele** sert a decrire la forme des donnees manipulees dans l'application.

### `src/app/services`

Ce dossier contient les services.

- `produit.service.ts` : centralise les appels HTTP vers l'API

Un **service** sert a regrouper une logique reutilisable. Ici, il sert surtout a parler avec le backend.

### `src/app/produits`

Ce composant affiche la liste des produits.

Il :
- demande les produits au service
- les stocke dans une variable
- les affiche dans un tableau
- supprime un produit apres confirmation

### `src/app/add-produit`

Ce composant gere le formulaire d'ajout.

Il :
- recupere les valeurs saisies dans le formulaire
- envoie le nouveau produit au backend
- redirige ensuite vers la liste

### `src/app/update-produit`

Ce composant gere la modification d'un produit.

Il :
- recupere l'id depuis l'URL
- charge le produit correspondant
- affiche les donnees dans le formulaire
- envoie la mise a jour au backend

### `src/app/app.routes.ts`

Ce fichier declare les routes de l'application.

Une **route** relie une URL a un composant.

Exemples :
- `/produits` -> liste
- `/add-produit` -> ajout
- `/updateProduit/1` -> modification du produit d'id 1

## 7. Notions Angular utiles pour debuter

### Composant

Un composant est une partie de l'interface.

Souvent, il est compose de :
- un fichier `.ts` pour la logique
- un fichier `.html` pour l'affichage
- parfois un fichier `.css` pour le style

### Service

Un service permet d'eviter de dupliquer du code.

Ici, le service de produits contient les operations :
- lister
- ajouter
- consulter
- modifier
- supprimer

### Routing

Le routing permet de changer de page sans recharger entierement l'application.

### `ngModel`

`ngModel` sert a lier un champ du formulaire avec une variable TypeScript.

Exemple simple :
- si l'utilisateur tape un nom dans un champ
- la variable associee se met a jour automatiquement

## 8. Cycle simple d'une action utilisateur

Prenons l'exemple de l'ajout d'un produit :

1. l'utilisateur ouvre la page d'ajout
2. il remplit le formulaire
3. Angular stocke les valeurs dans l'objet `newProduit`
4. le composant appelle `produitService.ajouterProduit(...)`
5. le service envoie une requete HTTP `POST` au backend
6. le backend enregistre le produit
7. l'application revient a la liste des produits

## 9. Pourquoi certaines parties sont commentees ?

Tu verras dans le code des parties commentees sur les categories.

Cela signifie qu'une fonctionnalite etait prevue ou utilisee avant, mais qu'elle n'est pas completement active dans la version actuelle.

Ce n'est pas une erreur grave. C'est juste du code mis de cote.

## 10. Problemes frequents

### La page s'ouvre mais aucun produit ne s'affiche

Cause probable :
- le backend n'est pas demarre
- l'URL de l'API n'est pas correcte

### Le formulaire ne sauvegarde rien

Cause probable :
- erreur backend
- probleme de connexion a l'API
- donnees envoyees dans un format inattendu

### Erreur au lancement du projet

Cause probable :
- dependances non installees

Solution :

```bash
npm install
```

## 11. Comment progresser sur ce projet

Si tu debutes, voici un bon ordre pour comprendre le code :

1. lire `src/app/app.routes.ts`
2. lire `src/app/model/produit.model.ts`
3. lire `src/app/services/produit.service.ts`
4. lire `src/app/produits/produits.component.ts`
5. lire `src/app/add-produit/add-produit.component.ts`
6. lire `src/app/update-produit/update-produit.component.ts`

## 12. Petits exercices pour apprendre

Tu peux t'entrainer avec ces idees :

1. ajouter une colonne `Categorie` dans la liste
2. afficher un message de succes apres ajout
3. ajouter une verification si le nom est vide
4. afficher un message si aucun produit n'est disponible
5. ameliorer le style avec Bootstrap

## 13. Resume tres simple

En une phrase :

> ce projet Angular affiche une interface de gestion de produits et communique avec une API REST locale pour faire les operations CRUD.

CRUD signifie :
- `Create` : creer
- `Read` : lire
- `Update` : modifier
- `Delete` : supprimer
