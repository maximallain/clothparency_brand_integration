Application Rails générée avec [lewagon/rails-templates](https://github.com/lewagon/rails-templates), créé par  [Le Wagon coding bootcamp](https://www.lewagon.com)

L'application a été configurée initialement pour pouvoir être exécutée sur Heroku (SGBDR: PostgreSQL).


## Fonctionnalités

### Rails
- Authentification avec Devise
- Autorisation avec Pundit
- Base de données accessible par API CRUD (création, affichage, mise à jour, suppression)

### React
- Affichage de la liste des vêtements
- Affichage en modal du détail d'un vêtement
- Création et suppression d'un vêtement

### Next Steps
 - Mise à jour d'un vêtement
 - Validation des champs de création
 - Association d'un compte avec une marque
 - Affichage du score du vêtement
 - Filtres pour la recherche de vêtements (data de création, catégorie)
 - Authentification des administrateurs
 - Téléversement de fichiers

## Getting started

- Installation des dépendances Javascript `yarn install`

- Migration `rails db:migrate`

- Lancement du serveur en local `rails server`

- Navigation sur `http://localhost:3000/`
