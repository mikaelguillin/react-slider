## Lancer l'application

### `npm start`

Lance le serveur de développement.

### `npm run build`

Compile les sources pour la production, minifies les fichiers ...

## Grille

Pour modifier la grille du slider, il suffit de modifier les paramètres `columns` et
`rows` dans l'url.

Exemple : `http://localhost:3000/?columns=3&rows=2`

Si aucun paramètre n'est passé, le slider affichera les slides une par une.
Les slides s'affichent sur une seule colonne pour les résolutions inférieures ou égales à 768px.

## Données

Un fichier data.json permet de modifier les données de chaque slide.
