# Mémoire vivante — Cimetière franco-espagnol de Đà Nẵng

Prototype web mobile-first pour tester la reconnaissance visuelle de la plaque de l'ossuaire.

## Contenu du dépôt
- `index.html` : l'application complète. La photographie cible est intégrée dans le HTML ; aucun fichier image externe n'est requis.
- Le site est statique et ne nécessite ni `package.json` ni étape de compilation. Vercel doit publier la racine du dépôt.

## Tester
1. Ouvrir le site publié en HTTPS.
2. Appuyer sur **Activer la caméra** et autoriser la caméra arrière.
3. Présenter la plaque entière, assez près, de face et avec un éclairage régulier.
4. La détection essaie de comparer des caractéristiques visuelles de la caméra à la photo cible ; la fiche se dévoile si un nombre suffisant de correspondances persiste.

## Limites
La reconnaissance est expérimentale et n'est pas encore un suivi AR avec pose 3D. Elle dépend de la lumière, de l'angle et de la netteté ; les seuils doivent être validés sur site. La transcription est provisoire. Les liens sont des pistes de recherche, et ne prouvent pas à eux seuls toutes les affirmations historiques.

## Dépendance externe
Le moteur OpenCV.js est chargé à la demande depuis `https://docs.opencv.org/4.x/opencv.js`. Une connexion au domaine est nécessaire pour la détection. Si le script charge mais que le moteur WebAssembly ne démarre pas, consulter la console JavaScript du navigateur pour obtenir l'erreur détaillée.