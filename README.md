# Mémoire vivante — AECV

Application patrimoniale mobile-first consacrée au cimetière franco-espagnol Y Pha Nho de Đà Nẵng, portée par l’Association pour l’étude du Centre Vietnam (AECV).

## Fonctionnalités

- Interface en français, vietnamien, anglais, espagnol et russe.
- Présentation historique, carte avec plan et couche satellite, géolocalisation et lien Google Maps.
- Expérience AR basée sur le suivi d’images MindAR.
- Transcription conservée dans la langue de l’inscription, avec traduction affichée sous le texte selon la langue de navigation lorsqu’elle est disponible.
- Répertoire de personnes mentionnées sur les plaques ; biographies et portraits ne seront complétés qu’après recherche et vérification des sources.
- Progression locale des marqueurs découverts.

## Fichiers

- `index.html` : interface, navigation, carte et intégration AR.
- `site-content.js` : textes multilingues, traductions d’inscriptions, notices, liens et définition des marqueurs.
- `plaque_ossuaire.jpg` : première cible AR, plaque de l’ossuaire.
- `plaque_treille.jpg` : deuxième cible AR, plaque du monument érigé en 1898.

## Ajouter un marqueur AR

1. Ajouter la photographie de la plaque à la racine du dépôt, par exemple `plaque_3.jpg`. Utiliser une photo nette, bien éclairée, avec des détails visuels répartis sur toute la surface.
2. Dans `site-content.js`, ajouter un objet à `MEMOIRE_CONFIG.arTargets` avec :
   - un `id` unique ;
   - `image`, qui correspond exactement au nom du fichier ;
   - `title` et `description` en français, vietnamien, anglais, espagnol et russe ;
   - `sourceLanguage` (langue d’origine du texte) ;
   - `inscription` (transcription dans la langue d’origine, en développant les abréviations uniquement si cela est signalé dans la note) ;
   - `translations` pour les langues dans lesquelles une traduction a été préparée ;
   - `note`, `translationNotes` et des `links` documentaires.
3. Ajouter les entrées de traduction dans `MEMOIRE_CONFIG.ui` si de nouveaux libellés sont nécessaires.
4. Incrémenter `MEMOIRE_CONFIG.targetSetVersion`. Cela invalide la cible compilée conservée dans le navigateur et force MindAR à préparer à nouveau toutes les images.
5. Committer l’image et `site-content.js` sur GitHub. Vercel redéploie le site si son intégration Git est active.

MindAR prépare les images listées dans `arTargets` dans le navigateur puis conserve les données compilées dans IndexedDB. Le premier lancement après l’ajout d’une cible peut être plus long. Sur le terrain, tester chaque plaque avec plusieurs distances, angles et conditions lumineuses.

## Transcriptions et traductions

Le texte montré comme transcription reste dans la langue de l’inscription. La traduction apparaît séparément dessous, dans la langue choisie par le visiteur. Les traductions doivent être relues et, pour les inscriptions avec abréviations, la transcription développée doit rester clairement signalée et comparée avec la plaque.

## Répertoire des personnes

Les personnes sont définies dans `MEMOIRE_CONFIG.people`. Chaque fiche précise seulement le nom et la fonction tels qu’ils apparaissent sur la plaque. Biographies, portraits et liens seront ajoutés ultérieurement à partir de sources fiables et créditées ; aucun détail biographique ne doit être inventé.

## Carte

La carte utilise Leaflet, OpenStreetMap et une couche satellite Esri. La géolocalisation nécessite l’autorisation du navigateur. La position générale du cimetière est indicative ; les coordonnées précises des marqueurs dans le site restent à relever. Le lien Google Maps fourni est accessible depuis la carte.

## Déploiement et dépendances

Site statique : publier la racine du dépôt sur Vercel, sans étape de compilation particulière. La caméra et la géolocalisation nécessitent HTTPS et l’autorisation du navigateur. MindAR et Leaflet sont chargés depuis des CDN ; une connexion Internet est nécessaire.

## Principes éditoriaux

- Distinguer les faits établis, les interprétations et les points qui restent à vérifier.
- Vérifier les transcriptions sur l’original et conserver la graphie des noms.
- Identifier clairement les traductions et les transcriptions développées.
- Ne pas publier de documents de travail non publiés ou soumis à restriction sans autorisation.
- Créditer les sources et images selon les conditions de réutilisation applicables.

## Liens

- AECV : https://aecv-mientrung.com/
- Documentation MindAR : https://hiukim.github.io/mind-ar-js-doc/
- Carte Google Maps du cimetière : https://maps.app.goo.gl/ZcFSM41GCu8PSbxn7
- Carte indicative : https://mapcarta.com/N6512888885
