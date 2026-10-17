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
- `plaque_correard.jpg` : cible de suivi MindAR recadrée sur la pierre verticale de Corréard. La reconnaissance visuelle s'appuie sur le cadrage du monument et ses détails de surface ; le système ne réalise pas d'OCR de l'épitaphe.
- `correard_overlay.svg` : restitution en SVG de la surface de la pierre et des caractères de l'épitaphe. Elle est projetée sur les quatre coins du plan détecté, avec ajustement de perspective, filtrage des variations de pose et réglage d'opacité.

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


## AR performance and interaction

- The start/stop camera controls are displayed immediately above the camera frame and remain sticky while moving through the AR section.
- When a marker is lost, its detected content stays visible for five seconds before the overlay is dismissed. If the marker is reacquired during this grace period, the timer is cancelled.
- After the page finishes loading, MindAR and the complete image-target set are warmed up in the background. The compiler job is shared with any user-triggered camera start to avoid duplicate compilation.
- The current compiled target set is held in JavaScript memory for the active visit and persisted in IndexedDB under `targetSetVersion`. Increment `targetSetVersion` whenever a target image or target ordering/content is changed, so old cached target data cannot be reused.
- MindAR is configured with `warmupTolerance: 3` and `missTolerance: 18`. The higher miss tolerance keeps the tracker from declaring a target lost after only a few missed frames, which can help with unstable images on weathered stone. The visitor overlay additionally remains visible for five seconds after the tracker reports a lost target. These settings do not increase the number of visual features in an image; they cannot by themselves make a weak marker detectable or recover details physically missing from an inscription.
- Background preparation does not ask for or start camera access; the camera is activated only after the visitor presses the start button. If the automatic preparation fails, starting the camera will try again and show the error.


## Live AR inscription reconstruction

The Corréard epitaph uses an optional transparent SVG layer projected onto the live camera image using the MindAR projection matrix and tracked marker pose. A visitor-facing toggle lets the user show or hide this reconstruction. The overlay is limited to the Corréard marker; the ossuary and 1898 monument plaques are unchanged.

The SVG is derived from the supplied reconstruction PNG: the surrounding transparent canvas and letter silhouettes are retained; no missing wording is invented. The current vertical offset is a first calibration against the word “CORRÉARD” and the photographed marker crop, so it should be checked and fine-tuned on the actual stone and target handset. The layer freezes with the last good camera pose during the existing five-second marker-loss grace period, then hides with the card.

For a future inscription, add a transparent PNG/SVG restoration, configure the relevant target with a `reconstructionOverlay` property, and calibrate the overlay's scale and offsets against its marker image. Do not add an overlay for plaques whose restoration is not ready or whose original text remains uncertain.

## Liens

- AECV : https://aecv-mientrung.com/
- Documentation MindAR : https://hiukim.github.io/mind-ar-js-doc/
- Carte Google Maps du cimetière : https://maps.app.goo.gl/ZcFSM41GCu8PSbxn7
- Carte indicative : https://mapcarta.com/N6512888885


### Overlay stability and full-screen camera

The live Corréard inscription layer now applies temporal smoothing to its projected four-corner quadrilateral in screen coordinates (EMA alpha 0.16). This attenuates scale and perspective flutter from small frame-to-frame pose variations while leaving MindAR's own tracking and the two earlier targets unchanged. The smoothing state resets on target loss, target switch, resize, and full-screen layout changes.

The camera view includes a full-screen control. It uses the browser Fullscreen API when supported, with a fixed-viewport CSS fallback for browsers that do not expose element fullscreen. The control labels are localized in French, Vietnamese, English, Spanish, and Russian.


## Ajustements AR Corréard (v5)

- La cible MindAR reste la photographie plein-cadre de la stèle présente dans le dépôt ; la reconnaissance se fait par correspondance d'image, sans lecture OCR du texte.
- La restitution SVG comprend maintenant une surface de pierre stylisée derrière les lettres. Son format est aligné sur celui de la cible, sans décalage vertical calibré sur les seules inscriptions.
- Le calque suit les quatre coins projetés par MindAR pour adapter taille et perspective. Une interpolation plus réactive stabilise les petits mouvements et les sauts de pose isolés doivent être confirmés sur plusieurs images.
- Un curseur permet de régler l’opacité de la restitution entre 45 % et 100 %.
- Le comportement de la caméra doit encore être validé par des essais sur la tombe. La robustesse dépendra des détails visibles, de l’angle, de la lumière et du téléphone.
