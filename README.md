# Mémoire vivante — Cimetière franco-espagnol de Đà Nẵng

Prototype web de détection visuelle de la plaque de l'ossuaire.

## État du prototype
- Interface mobile-first.
- Caméra arrière dans un navigateur HTTPS.
- Comparaison expérimentale des détails visuels de la caméra avec la photo de référence via OpenCV.js.
- Affichage de la transcription provisoire et de liens documentaires lorsqu'un ensemble de correspondances visuelles se maintient sur plusieurs images.

## Déploiement
Publier le contenu du dépôt sur Vercel. La page d'accueil est `index.html`. La photo cible `plaque_ossuaire.png` doit rester à côté de ce fichier. Pour tester la caméra, ouvrir la page en HTTPS et autoriser l'accès à la caméra.

## Limites
La détection est un prototype et n'est pas un suivi AR calibré avec une pose 3D. Les seuils doivent être validés sur la plaque réelle. La transcription est provisoire et doit être relue sur place. Les liens sont des pistes documentaires, pas des preuves directes de toutes les affirmations.
