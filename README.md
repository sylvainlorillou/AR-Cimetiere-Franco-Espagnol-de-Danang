# Mémoire vivante — AECV

Site patrimonial mobile-first consacré au cimetière franco-espagnol Y Pha Nho de Đà Nẵng. L’application est présentée par l’Association pour l’étude du Centre Vietnam (AECV).

## Fichiers

- `index.html` : interface visiteur, navigation, carte, géolocalisation et expérience AR MindAR.
- `site-content.js` : contenus en français, vietnamien et anglais, notices, liens et définition des marqueurs AR.
- `plaque_ossuaire.jpg` : image cible actuellement utilisée par MindAR.

## Ajouter un nouveau marqueur AR

1. Ajouter la photographie cible à la racine du dépôt, par exemple `chapelle.jpg`. Choisir une image nette, bien éclairée, avec des détails visuels bien répartis.
2. Dans `site-content.js`, ajouter un nouvel objet dans `arTargets` avec un identifiant unique, le chemin de l’image, le titre, la notice, la transcription, la note et les liens. Compléter les textes `fr`, `vi` et `en` ; garder la transcription originale dans `inscription`.
3. Augmenter `targetSetVersion` pour invalider les fichiers de cible MindAR mis en cache.
4. Ajouter le fichier et `site-content.js` au dépôt GitHub. Vercel redéploie la page si l’intégration Git est active.

Le moteur compile les images cibles listées dans `arTargets` dans le navigateur, puis conserve les données compilées dans IndexedDB pour les visites suivantes. Le premier chargement peut donc prendre du temps sur un téléphone.

## Carte et géolocalisation

La carte utilise Leaflet, OpenStreetMap et une couche satellite Esri, et demande l’autorisation de géolocalisation du navigateur. Les coordonnées du cimetière sont indicatives et doivent être vérifiées sur place. Les coordonnées précises des points à l’intérieur du cimetière ne sont pas encore renseignées. Le lien Google Maps fourni pour le site reste accessible depuis la carte.

## Déploiement

Site statique : publier la racine du dépôt sur Vercel, sans étape de compilation particulière. La caméra nécessite HTTPS et l’autorisation du navigateur. MindAR et les bibliothèques de carte sont chargés depuis des CDN, une connexion Internet est nécessaire.

## Principes éditoriaux

- Distinguer faits établis, interprétations et points à vérifier.
- Vérifier les transcriptions sur l’original.
- Ne pas publier de documents de travail non publiés ou soumis à restrictions sans autorisation.
- Créditer les sources et collections selon les conditions de réutilisation applicables.

## Liens

- AECV : https://aecv-mientrung.com/
- Documentation MindAR : https://hiukim.github.io/mind-ar-js-doc/
- Carte Google Maps du cimetière : https://maps.app.goo.gl/ZcFSM41GCu8PSbxn7
- Carte de référence et coordonnées indicatives : https://mapcarta.com/N6512888885
