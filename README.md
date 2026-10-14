# Mémoire vivante — Cimetière franco-espagnol de Đà Nẵng

Prototype web mobile de détection expérimentale de la plaque de l’ossuaire.

## Fichiers
- `index.html` : interface et logique de détection.
- `plaque_ossuaire.jpg` : photographie de référence optimisée pour le prototype.

## Tester avec Vercel
Publier le contenu du dépôt sur Vercel. La page d’accueil est `index.html`. Garder `index.html` et `plaque_ossuaire.jpg` dans le même dossier. Sur smartphone, ouvrir le site en HTTPS et autoriser la caméra arrière.

## Fonctionnement
L’application charge OpenCV.js depuis le serveur officiel, attend que l’API soit disponible, puis compare des points caractéristiques ORB de la photo de référence et du flux caméra. Si suffisamment de correspondances se maintiennent sur plusieurs images, la fiche affiche la retranscription provisoire et les liens de recherche.

## Limites et confidentialité historique
La détection est expérimentale : les seuils nécessitent des essais sur la plaque réelle et le résultat n’est pas un suivi AR 3D stabilisé. La transcription doit être vérifiée sur place. Les liens fournis sont des pistes de recherche et ne prouvent pas directement chaque détail historique. Les documents en attente de publication officielle ne doivent pas être publiés tels quels sans autorisation.
