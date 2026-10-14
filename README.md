# Mémoire vivante — Cimetière franco-espagnol de Đà Nẵng

Prototype web mobile-first pour tester la reconnaissance et le suivi de la plaque de l’ossuaire avec MindAR.

## Fichiers
- `index.html` : l’application complète. Pas d’étape de compilation de site nécessaire.
- `plaque_ossuaire.jpg` : cible visuelle utilisée par MindAR, dérivée de la photographie fournie.

## Détection MindAR
La page charge MindAR depuis un CDN, puis compile la photo cible directement dans le navigateur lors de la première utilisation. Le fichier cible compilé est enregistré dans IndexedDB sur cet appareil ; les visites suivantes devraient donc démarrer plus rapidement.

Pour tester :
1. Déployer la racine du dépôt sur Vercel.
2. Ouvrir le site en HTTPS sur un smartphone.
3. Appuyer sur **Activer la caméra** et autoriser la caméra arrière.
4. Présenter la plaque entière, aussi de face que possible, avec un éclairage homogène.

## Limites connues
- La première préparation de la cible peut prendre un moment et dépend des capacités du téléphone.
- La reconnaissance doit être testée sur la plaque réelle. Angle, distance, reflets et lumière peuvent influencer le résultat.
- Ce prototype affiche la fiche lorsque la plaque est suivie ; il ne propose pas encore de reconstruction 3D historique.
- La transcription est provisoire et doit être vérifiée sur place.
- Les liens sont des pistes de recherche, pas des preuves directes pour toutes les affirmations historiques.

## Dépendances
MindAR Image Tracking est chargé depuis jsDelivr, avec un deuxième chemin CDN comme secours. Une connexion Internet est nécessaire au chargement initial.