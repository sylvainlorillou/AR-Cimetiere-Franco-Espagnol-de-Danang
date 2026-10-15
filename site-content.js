/* 
 * FICHIER DE CONTENU — Mémoire vivante / AECV
 * Pour ajouter un nouveau marqueur AR :
 * 1) déposer sa photo cible à la racine du dépôt, par ex. "plaque_2.jpg"
 * 2) ajouter un objet à MEMOIRE_CONFIG.arTargets avec id, image, textes FR/VI/EN/ES/RU,
 *    sourceLanguage, inscription, traductions, note et liens documentaires.
 * 3) augmenter targetSetVersion pour forcer la recompilation de la liste de cibles.
 * Ne pas publier de documents d'archives confidentiels ou non autorisés.
 */
window.MEMOIRE_CONFIG = {
  brand: {
    name: "Association pour l’étude du Centre Vietnam",
    shortName: "AECV",
    logoUrl: "https://aecv-mientrung.com/wp-content/uploads/2024/06/logo_aecv_recadre-2.png",
    website: "https://aecv-mientrung.com/"
  },
  languages: ["fr", "vi", "en"],
  site: {
    name: "Cimetière franco-espagnol de Đà Nẵng",
    lat: 16.12233,
    lng: 108.22004,
    coordinateStatus: "indicative",
    googleMapsUrl: "https://maps.app.goo.gl/ZcFSM41GCu8PSbxn7",
    openStreetMapUrl: "https://www.openstreetmap.org/?mlat=16.12233&mlon=108.22004#map=18/16.12233/108.22004"
  },
  targetSetVersion: "aecv-mindar-2026-10-v1",
  ui: {
    fr: {
      language: "Langue",
      navHome: "Accueil",
      navMap: "Carte & parcours",
      navAR: "Expérience AR",
      navSources: "Sources",
      kicker: "Un lieu de mémoire à explorer",
      heroTitle: "Lire le lieu, retrouver les histoires.",
      heroSubtitle: "Une découverte patrimoniale au cimetière franco-espagnol de Đà Nẵng, portée par l’AECV.",
      explore: "Commencer la visite",
      seeMap: "Voir la carte",
      scanPlaque: "Reconnaître une plaque",
      contextTitle: "Pourquoi ce cimetière ?",
      contextText: "Le cimetière Y Pha Nho conserve la mémoire de soldats français et espagnols morts pendant l’expédition franco-espagnole contre Đà Nẵng, entre 1858 et 1860. Cette visite propose de relier les inscriptions visibles, l’histoire locale et les sources documentaires, en distinguant les faits établis des points encore à vérifier.",
      trailTitle: "Votre parcours de découverte",
      trailIntro: "Repérez les éléments patrimoniaux, scannez leurs plaques et ouvrez leurs fiches historiques.",
      progress: "Repères découverts",
      firstStop: "Repère 1 · La plaque commémorative",
      firstStopText: "Dirigez la caméra vers la plaque de l’ossuaire pour afficher sa transcription et les ressources associées.",
      mapTitle: "Se repérer sur le site",
      mapIntro: "La position du cimetière est indicative. Les repères internes et leurs coordonnées seront ajoutés après relevé sur place.",
      locateMe: "Me localiser",
      openGoogleMaps: "Ouvrir dans Google Maps",
      mapStatus: "Autorisez la géolocalisation pour afficher votre position et estimer votre distance au site.",
      mapAttribution: "Fond de carte OpenStreetMap · imagerie satellite © Esri",
      mapSatellite: "Vue satellite",
      mapStreet: "Plan classique",
      cameraTitle: "Visez la plaque de l’ossuaire",
      cameraIntro: "Présentez la plaque entière, plutôt de face, avec un éclairage régulier. La première préparation de la cible peut prendre un moment.",
      startCamera: "Activer la caméra",
      stopCamera: "Arrêter la caméra",
      transcript: "Transcription de la plaque",
      transcriptionNote: "Transcription provisoire à vérifier sur la plaque originale. Le texte est conservé dans sa langue d’origine.",
      linksTitle: "Pour approfondir",
      sourceTitle: "Une initiative portée par l’AECV",
      sourceText: "L’Association pour l’étude du Centre Vietnam œuvre à la conservation, à la numérisation et à la valorisation des archives et de l’histoire du miền Trung. Les notices de cette application privilégient les sources identifiées et indiquent les points restant à vérifier.",
      aecvWebsite: "Visiter le site de l’AECV",
      methodTitle: "Notre méthode",
      methodText: "Chaque repère est associé à une image cible, une transcription, une notice courte, des traductions et des liens documentaires. Les documents de travail non publiés ne sont pas reproduits dans l’application publique sans autorisation.",
      sitePosition: "Emplacement indicatif du cimetière",
      locationFound: "Votre position est affichée.",
      locationDenied: "La position n’a pas pu être obtenue. Vérifiez les autorisations de localisation de votre navigateur.",
      distance: "Distance approximative jusqu’au cimetière",
      targetFound: "Plaque reconnue · fiche ouverte",
      targetLost: "Plaque non détectée · présentez-la à nouveau à la caméra",
      preparing: "Préparation des repères AR…",
      cameraActive: "Caméra active · chargement du moteur AR…",
      scanning: "Recherche de la plaque…",
      errorPrefix: "Le moteur AR a rencontré une erreur : ",
      loadingMindar: "Chargement de MindAR…",
      compiling: "Préparation de la cible",
      compileHint: "Première utilisation sur cet appareil : analyse de la photo cible. Gardez la page ouverte.",
      trackingReady: "Suivi AR prêt. Présentez la plaque entière, avec peu de reflets.",
      stopped: "Caméra arrêtée. Vous pouvez relancer la détection.",
      sourceLinks: "Liens documentaires",
      imageRef: "Photo cible du repère"
    },
    vi: {
      language: "Ngôn ngữ",
      navHome: "Giới thiệu",
      navMap: "Bản đồ & hành trình",
      navAR: "Trải nghiệm AR",
      navSources: "Tư liệu",
      kicker: "Khám phá một địa điểm tưởng niệm",
      heroTitle: "Đọc dấu tích, tìm lại câu chuyện.",
      heroSubtitle: "Khám phá di sản tại nghĩa trang Y Pha Nho ở Đà Nẵng, do AECV bảo trợ.",
      explore: "Bắt đầu tham quan",
      seeMap: "Xem bản đồ",
      scanPlaque: "Nhận diện bia tưởng niệm",
      contextTitle: "Vì sao có nghĩa trang này?",
      contextText: "Nghĩa trang Y Pha Nho lưu giữ ký ức về những binh sĩ Pháp và Tây Ban Nha thiệt mạng trong cuộc viễn chinh Pháp–Tây Ban Nha nhằm vào Đà Nẵng trong giai đoạn 1858–1860. Hành trình này kết nối các dòng chữ còn nhìn thấy, lịch sử địa phương và tư liệu lưu trữ, đồng thời phân biệt thông tin đã được xác nhận với những điểm cần kiểm chứng thêm.",
      trailTitle: "Hành trình khám phá",
      trailIntro: "Tìm các dấu tích di sản, quét bia và mở thông tin lịch sử tương ứng.",
      progress: "Dấu tích đã khám phá",
      firstStop: "Điểm 1 · Bia tưởng niệm",
      firstStopText: "Hướng camera vào tấm bia của nhà lưu cốt để xem bản chép lại và các nguồn tư liệu liên quan.",
      mapTitle: "Định vị trong khuôn viên",
      mapIntro: "Vị trí nghĩa trang trên bản đồ chỉ mang tính tham khảo. Các điểm bên trong khuôn viên sẽ được thêm sau khi khảo sát thực địa.",
      locateMe: "Xác định vị trí của tôi",
      openGoogleMaps: "Mở Google Maps",
      mapStatus: "Cho phép định vị để hiển thị vị trí của bạn và ước tính khoảng cách đến nghĩa trang.",
      mapAttribution: "Bản đồ OpenStreetMap · ảnh vệ tinh © Esri",
      mapSatellite: "Ảnh vệ tinh",
      mapStreet: "Bản đồ đường phố",
      cameraTitle: "Hướng camera vào bia nhà lưu cốt",
      cameraIntro: "Đưa toàn bộ tấm bia vào khung hình, càng chính diện càng tốt và đủ ánh sáng. Lần chuẩn bị mục tiêu đầu tiên có thể mất một lúc.",
      startCamera: "Bật camera",
      stopCamera: "Tắt camera",
      transcript: "Bản chép nội dung bia",
      transcriptionNote: "Bản chép tạm thời, cần đối chiếu với bia gốc. Văn bản được giữ nguyên ngôn ngữ ban đầu.",
      linksTitle: "Tìm hiểu thêm",
      sourceTitle: "Dự án do AECV bảo trợ",
      sourceText: "Hiệp hội Nghiên cứu Miền Trung Việt Nam (AECV) hướng tới bảo tồn, số hóa và phát huy giá trị tư liệu lưu trữ và lịch sử miền Trung. Các nội dung ưu tiên nguồn dẫn rõ ràng và nêu rõ điểm nào còn cần xác minh.",
      aecvWebsite: "Truy cập website AECV",
      methodTitle: "Phương pháp",
      methodText: "Mỗi điểm tham quan gồm một hình ảnh nhận diện, bản chép chữ, phần giới thiệu ngắn, bản dịch và các liên kết tư liệu. Tài liệu nghiên cứu chưa công bố sẽ không được đưa nguyên trạng lên ứng dụng công khai khi chưa có sự cho phép.",
      sitePosition: "Vị trí nghĩa trang (tham khảo)",
      locationFound: "Đã hiển thị vị trí của bạn.",
      locationDenied: "Không thể lấy vị trí. Vui lòng kiểm tra quyền định vị của trình duyệt.",
      distance: "Khoảng cách ước tính đến nghĩa trang",
      targetFound: "Đã nhận diện bia · đã mở nội dung",
      targetLost: "Chưa nhận diện được bia · hãy hướng camera lại",
      preparing: "Đang chuẩn bị các điểm AR…",
      cameraActive: "Camera đã bật · đang tải bộ máy AR…",
      scanning: "Đang tìm bia tưởng niệm…",
      errorPrefix: "Bộ máy AR gặp lỗi: ",
      loadingMindar: "Đang tải MindAR…",
      compiling: "Đang chuẩn bị mục tiêu",
      compileHint: "Lần đầu trên thiết bị này: đang phân tích ảnh mục tiêu. Vui lòng giữ trang mở.",
      trackingReady: "AR đã sẵn sàng. Đưa toàn bộ bia vào khung hình, tránh phản chiếu mạnh.",
      stopped: "Camera đã tắt. Bạn có thể bật lại để nhận diện.",
      sourceLinks: "Liên kết tư liệu",
      imageRef: "Ảnh mục tiêu của điểm tham quan"
    },
    en: {
      language: "Language",
      navHome: "Welcome",
      navMap: "Map & trail",
      navAR: "AR experience",
      navSources: "Sources",
      kicker: "Explore a place of memory",
      heroTitle: "Read the traces. Rediscover the stories.",
      heroSubtitle: "A heritage visit to Đà Nẵng’s Franco-Spanish cemetery, presented by AECV.",
      explore: "Start the visit",
      seeMap: "Open the map",
      scanPlaque: "Recognize a plaque",
      contextTitle: "Why is this cemetery here?",
      contextText: "Y Pha Nho cemetery commemorates French and Spanish soldiers who died during the Franco-Spanish expedition against Đà Nẵng between 1858 and 1860. This visit connects visible inscriptions, local history and documentary sources, while distinguishing established facts from points that still need verification.",
      trailTitle: "Your discovery trail",
      trailIntro: "Find heritage features, scan their plaques and open the associated historical notes.",
      progress: "Markers discovered",
      firstStop: "Marker 1 · The commemorative plaque",
      firstStopText: "Point the camera at the ossuary plaque to display its transcription and related resources.",
      mapTitle: "Find your way around the site",
      mapIntro: "The cemetery pin is indicative. Internal markers and their coordinates will be added after an on-site survey.",
      locateMe: "Locate me",
      openGoogleMaps: "Open in Google Maps",
      mapStatus: "Allow location access to show your position and estimate your distance to the site.",
      mapAttribution: "OpenStreetMap map · satellite imagery © Esri",
      mapSatellite: "Satellite view",
      mapStreet: "Street map",
      cameraTitle: "Point at the ossuary plaque",
      cameraIntro: "Keep the whole plaque in view, preferably face-on, with even lighting. Initial target preparation may take a little time.",
      startCamera: "Start camera",
      stopCamera: "Stop camera",
      transcript: "Plaque transcription",
      transcriptionNote: "Provisional transcription to be checked against the original plaque. The text remains in its original language.",
      linksTitle: "Explore further",
      sourceTitle: "Presented by AECV",
      sourceText: "The Association for the Study of Central Vietnam (AECV) works to preserve, digitize and share archives and history relating to miền Trung. Entries prioritize traceable sources and flag points that still need verification.",
      aecvWebsite: "Visit the AECV website",
      methodTitle: "Our approach",
      methodText: "Each marker has a target image, transcription, short historical note, translations and documentary links. Unpublished working documents are not reproduced in the public app without permission.",
      sitePosition: "Approximate cemetery location",
      locationFound: "Your location is displayed.",
      locationDenied: "Your location could not be obtained. Check your browser’s location permissions.",
      distance: "Approximate distance to the cemetery",
      targetFound: "Plaque recognized · entry opened",
      targetLost: "Plaque not detected · point the camera at it again",
      preparing: "Preparing AR markers…",
      cameraActive: "Camera active · loading AR engine…",
      scanning: "Looking for the plaque…",
      errorPrefix: "The AR engine reported an error: ",
      loadingMindar: "Loading MindAR…",
      compiling: "Preparing the target",
      compileHint: "First use on this device: analyzing the target photo. Keep this page open.",
      trackingReady: "AR tracking is ready. Show the whole plaque and avoid strong reflections.",
      stopped: "Camera stopped. You can restart detection.",
      sourceLinks: "Research links",
      imageRef: "Reference image for this marker"
    }
  },
  historyLinks: [
    { label: { fr: "Campagne de Cochinchine — contexte général", vi: "Chiến dịch Nam Kỳ — bối cảnh chung", en: "Cochinchina campaign — background" }, note: { fr: "Repères à compléter avec des sources historiques spécialisées.", vi: "Thông tin khái quát, cần đối chiếu với nguồn chuyên ngành.", en: "General background to be cross-checked with specialist sources." }, url: "https://fr.wikipedia.org/wiki/Campagne_de_Cochinchine" },
    { label: { fr: "Gallica — Bibliothèque nationale de France", vi: "Gallica — Thư viện Quốc gia Pháp", en: "Gallica — French National Library" }, note: { fr: "Ouvrages, journaux et documents d’époque.", vi: "Sách, báo và tài liệu cùng thời kỳ.", en: "Historical books, newspapers and documents." }, url: "https://gallica.bnf.fr/" },
    { label: { fr: "Mémoire des hommes", vi: "Mémoire des hommes", en: "Mémoire des hommes" }, note: { fr: "Portail officiel de recherche dans les archives militaires françaises.", vi: "Cổng tra cứu tư liệu quân sự Pháp.", en: "Official portal for French military records." }, url: "https://www.memoiredeshommes.sga.defense.gouv.fr/" }
  ],
  arTargets: [
    {
      id: "ossuaire-plaque",
      image: "./plaque_ossuaire.jpg",
      title: { fr: "La plaque de l’ossuaire", vi: "Bia nhà lưu cốt", en: "The ossuary plaque" },
      description: {
        fr: "Cette plaque honore les combattants français et espagnols de l’expédition de Rigault de Genouilly morts en 1858, 1859 et 1860 et ensevelis en ces lieux.",
        vi: "Tấm bia tưởng niệm các binh sĩ Pháp và Tây Ban Nha trong cuộc viễn chinh do Rigault de Genouilly chỉ huy, tử trận vào các năm 1858, 1859 và 1860 và được an táng tại đây.",
        en: "The plaque commemorates French and Spanish combatants from Rigault de Genouilly’s expedition who died in 1858, 1859 and 1860 and were buried here."
      },
      inscription: "✝\n\nÀ la mémoire des combattants\nFrançais et Espagnols\nde l’Expédition Rigault de Genouilly\nMorts en 1858-59-60\net ensevelis en ces lieux\n\nR. I. P.",
      note: {
        fr: "Transcription provisoire à vérifier sur la plaque originale ; le texte est conservé dans sa langue d’origine.",
        vi: "Bản chép tạm thời cần đối chiếu với bia gốc; văn bản được giữ nguyên ngôn ngữ ban đầu.",
        en: "Provisional transcription to be checked against the original plaque; the text remains in its original language."
      },
      latitude: null,
      longitude: null,
      links: [
        { label: { fr: "Gallica — Bibliothèque nationale de France", vi: "Gallica — Thư viện Quốc gia Pháp", en: "Gallica — French National Library" }, url: "https://gallica.bnf.fr/" },
        { label: { fr: "Mémoire des hommes", vi: "Mémoire des hommes", en: "Mémoire des hommes" }, url: "https://www.memoiredeshommes.sga.defense.gouv.fr/" }
      ]
    }
  ]
};

// Extensions de contenu — traductions supplémentaires et nouveaux repères.
// Les inscriptions sont conservées dans leur langue originale; les traductions sont affichées
// séparément dans la langue choisie par le visiteur.
(() => {
  const C = window.MEMOIRE_CONFIG;
  C.languages = ["fr", "vi", "en", "es", "ru"];
  C.targetSetVersion = "aecv-mindar-2026-10-v2";
  const additions = {
    fr: {
      navPeople:"Personnes", peopleTitle:"Les personnes citées sur la plaque",
      peopleIntro:"La plaque de 1898 nomme plusieurs personnes et fonctions. Les notices biographiques et portraits seront ajoutés après recherche, vérification et identification des sources.",
      peopleRoleLabel:"Mention sur la plaque", bioPending:"Biographie à documenter à partir de sources vérifiées.",
      portraitPending:"Portrait à rechercher et à créditer.", collectiveTitle:"Un hommage collectif",
      personsCited:"Personnes nommées", peopleButton:"Découvrir les personnes",
      sourceInscriptionTitle:"Inscription originale (français)",
      translationHeading:"Traduction dans la langue de navigation",
      translationUnavailable:"Traduction non disponible pour cette langue."
    },
    vi: {
      navPeople:"Nhân vật", peopleTitle:"Những người được nhắc trên bia",
      peopleIntro:"Bia năm 1898 nêu tên một số người và chức vụ. Tiểu sử và chân dung sẽ được bổ sung sau khi tìm kiếm, kiểm chứng và xác định nguồn tư liệu.",
      peopleRoleLabel:"Nội dung ghi trên bia", bioPending:"Tiểu sử sẽ được nghiên cứu từ các nguồn đã kiểm chứng.",
      portraitPending:"Cần tìm chân dung và ghi rõ nguồn ảnh.", collectiveTitle:"Tưởng niệm tập thể",
      personsCited:"Nhân vật được nhắc đến", peopleButton:"Tìm hiểu các nhân vật",
      sourceInscriptionTitle:"Nguyên văn (tiếng Pháp)",
      translationHeading:"Bản dịch theo ngôn ngữ đang chọn",
      translationUnavailable:"Chưa có bản dịch ở ngôn ngữ này."
    },
    en: {
      navPeople:"People", peopleTitle:"People named on the plaque",
      peopleIntro:"The 1898 plaque names several people and official roles. Short biographies and portraits will be added after research and source verification.",
      peopleRoleLabel:"Wording on the plaque", bioPending:"Biography to be researched using verified sources.",
      portraitPending:"Portrait to be located and properly credited.", collectiveTitle:"A collective tribute",
      personsCited:"People mentioned", peopleButton:"Discover the people",
      sourceInscriptionTitle:"Original inscription (French)",
      translationHeading:"Translation in the selected language",
      translationUnavailable:"A translation is not yet available in this language."
    },
    es: {
      language:"Idioma", navHome:"Inicio", navMap:"Mapa y recorrido", navAR:"Experiencia AR", navSources:"Fuentes", navPeople:"Personas",
      kicker:"Un lugar de memoria por descubrir", heroTitle:"Leer el lugar, recuperar las historias.",
      heroSubtitle:"Una visita patrimonial al cementerio franco-español de Đà Nẵng, presentada por la AECV.",
      explore:"Comenzar la visita", seeMap:"Ver el mapa", scanPlaque:"Reconocer una placa",
      contextTitle:"¿Por qué existe este cementerio?",
      contextText:"El cementerio Y Pha Nho conserva la memoria de soldados franceses y españoles fallecidos durante la expedición franco-española contra Đà Nẵng entre 1858 y 1860. Esta visita conecta las inscripciones visibles, la historia local y las fuentes documentales, distinguiendo los hechos establecidos de las cuestiones aún por verificar.",
      trailTitle:"Tu recorrido de descubrimiento", trailIntro:"Localiza elementos patrimoniales, enfoca sus placas y abre las fichas históricas asociadas.",
      progress:"Hitos descubiertos", firstStop:"Hito 1 · La placa conmemorativa",
      firstStopText:"Apunta la cámara a la placa del osario para ver la transcripción y los recursos relacionados.",
      mapTitle:"Orientarse en el recinto", mapIntro:"La ubicación del cementerio es aproximada. Los puntos interiores y sus coordenadas se añadirán tras una visita de campo.",
      locateMe:"Localizarme", openGoogleMaps:"Abrir en Google Maps",
      mapStatus:"Permite la geolocalización para mostrar tu posición y estimar la distancia al cementerio.",
      mapAttribution:"Mapa de OpenStreetMap · imágenes de satélite © Esri", mapSatellite:"Vista satélite", mapStreet:"Mapa de calles",
      cameraTitle:"Enfoca la placa del osario", cameraIntro:"Mantén la placa completa dentro del encuadre, preferiblemente de frente y con luz uniforme. La preparación inicial de la imagen puede tardar.",
      startCamera:"Activar cámara", stopCamera:"Detener cámara", transcript:"Transcripción de la placa",
      transcriptionNote:"Transcripción provisional que debe verificarse sobre la placa original. El texto se conserva en su idioma original.",
      linksTitle:"Para saber más", sourceTitle:"Una iniciativa de la AECV",
      sourceText:"La Asociación para el Estudio del Centro de Vietnam (AECV) trabaja para conservar, digitalizar y difundir los archivos y la historia del miền Trung. Las fichas priorizan fuentes identificables e indican qué aspectos quedan por verificar.",
      aecvWebsite:"Visitar la web de la AECV", methodTitle:"Nuestro método",
      methodText:"Cada punto incluye una imagen de referencia, transcripción, breve nota histórica, traducciones y enlaces documentales. Los documentos de trabajo no publicados no se reproducen en la aplicación pública sin autorización.",
      sitePosition:"Ubicación aproximada del cementerio", locationFound:"Tu posición aparece en el mapa.",
      locationDenied:"No se pudo obtener la ubicación. Comprueba los permisos de localización del navegador.",
      distance:"Distancia aproximada al cementerio", targetFound:"Placa reconocida · ficha abierta",
      targetLost:"No se detecta la placa · vuelve a enfocarla", preparing:"Preparando los puntos AR…",
      cameraActive:"Cámara activa · cargando el motor AR…", scanning:"Buscando la placa…",
      errorPrefix:"El motor AR ha encontrado un error: ", loadingMindar:"Cargando MindAR…",
      compiling:"Preparando la imagen de referencia", compileHint:"Primera utilización en este dispositivo: se está analizando la imagen objetivo. Mantén la página abierta.",
      trackingReady:"Seguimiento AR listo. Muestra la placa completa y evita los reflejos intensos.",
      stopped:"Cámara detenida. Puedes iniciar de nuevo la detección.", sourceLinks:"Enlaces documentales",
      imageRef:"Imagen de referencia del punto",
      peopleTitle:"Personas mencionadas en la placa",
      peopleIntro:"La placa de 1898 menciona varios nombres y cargos. Las biografías breves y los retratos se añadirán cuando se hayan investigado y verificado las fuentes.",
      peopleRoleLabel:"Mención en la placa", bioPending:"Biografía pendiente de investigación a partir de fuentes verificadas.",
      portraitPending:"Retrato pendiente de localizar y acreditar.", collectiveTitle:"Un homenaje colectivo",
      personsCited:"Personas mencionadas", peopleButton:"Conocer a las personas",
      sourceInscriptionTitle:"Inscripción original (francés)", translationHeading:"Traducción al idioma seleccionado",
      translationUnavailable:"Todavía no hay traducción disponible en este idioma."
    },
    ru: {
      language:"Язык", navHome:"Главная", navMap:"Карта и маршрут", navAR:"AR-опыт", navSources:"Источники", navPeople:"Люди",
      kicker:"Откройте место памяти", heroTitle:"Прочитать место, восстановить истории.",
      heroSubtitle:"Историко-культурный маршрут по франко-испанскому кладбищу в Дананге при поддержке AECV.",
      explore:"Начать посещение", seeMap:"Открыть карту", scanPlaque:"Распознать табличку",
      contextTitle:"Почему появилось это кладбище?",
      contextText:"Кладбище Y Pha Nho хранит память о французских и испанских солдатах, погибших во время франко-испанской экспедиции против Дананга в 1858–1860 годах. Маршрут связывает сохранившиеся надписи, местную историю и архивные источники, отделяя подтверждённые сведения от вопросов, требующих проверки.",
      trailTitle:"Маршрут открытий", trailIntro:"Находите памятные объекты, наводите камеру на таблички и открывайте исторические справки.",
      progress:"Найденные объекты", firstStop:"Объект 1 · Памятная табличка",
      firstStopText:"Наведите камеру на табличку оссуария, чтобы увидеть расшифровку и связанные источники.",
      mapTitle:"Ориентирование на территории", mapIntro:"Метка кладбища указана приблизительно. Внутренние точки и их координаты будут добавлены после обследования на месте.",
      locateMe:"Определить моё местоположение", openGoogleMaps:"Открыть в Google Maps",
      mapStatus:"Разрешите геолокацию, чтобы показать ваше положение и оценить расстояние до кладбища.",
      mapAttribution:"Карта OpenStreetMap · спутниковые снимки © Esri", mapSatellite:"Спутник", mapStreet:"Уличная карта",
      cameraTitle:"Наведите камеру на табличку оссуария", cameraIntro:"Полностью поместите табличку в кадр, желательно прямо и при равномерном освещении. Первичная подготовка изображения может занять некоторое время.",
      startCamera:"Включить камеру", stopCamera:"Остановить камеру", transcript:"Текст таблички",
      transcriptionNote:"Предварительная расшифровка; её необходимо сверить с оригиналом. Текст сохраняется на языке оригинала.",
      linksTitle:"Дополнительные материалы", sourceTitle:"Проект AECV",
      sourceText:"Ассоциация по изучению Центрального Вьетнама (AECV) занимается сохранением, оцифровкой и популяризацией архивов и истории miền Trung. В карточках используются проверяемые источники и отмечаются сведения, требующие уточнения.",
      aecvWebsite:"Сайт AECV", methodTitle:"Наш подход",
      methodText:"Для каждой точки предусмотрены изображение-маркер, транскрипция, краткая историческая справка, переводы и документальные ссылки. Неопубликованные рабочие документы не размещаются в открытом приложении без разрешения.",
      sitePosition:"Примерное местоположение кладбища", locationFound:"Ваше местоположение показано на карте.",
      locationDenied:"Не удалось получить геолокацию. Проверьте разрешения браузера.",
      distance:"Примерное расстояние до кладбища", targetFound:"Табличка распознана · карточка открыта",
      targetLost:"Табличка не распознана · наведите камеру ещё раз", preparing:"Подготовка AR-маркеров…",
      cameraActive:"Камера включена · загрузка AR-движка…", scanning:"Поиск таблички…",
      errorPrefix:"Ошибка AR-движка: ", loadingMindar:"Загрузка MindAR…",
      compiling:"Подготовка изображения-маркера", compileHint:"Первый запуск на этом устройстве: анализ изображения-маркера. Не закрывайте страницу.",
      trackingReady:"AR-отслеживание готово. Покажите всю табличку и избегайте сильных бликов.",
      stopped:"Камера остановлена. Можно запустить распознавание снова.", sourceLinks:"Документальные ссылки",
      imageRef:"Изображение-маркер",
      peopleTitle:"Люди, упомянутые на табличке",
      peopleIntro:"На табличке 1898 года указаны несколько имён и должностей. Краткие биографии и портреты будут добавлены после поиска и проверки источников.",
      peopleRoleLabel:"Указание на табличке", bioPending:"Биография будет подготовлена по проверенным источникам.",
      portraitPending:"Портрет предстоит найти и снабдить указанием источника.", collectiveTitle:"Коллективная память",
      personsCited:"Упомянутые лица", peopleButton:"Познакомиться с людьми",
      sourceInscriptionTitle:"Оригинальная надпись (французский)", translationHeading:"Перевод на выбранный язык",
      translationUnavailable:"Перевод на этот язык пока отсутствует."
    }
  };
  Object.entries(additions).forEach(([lang, values]) => {
    C.ui[lang] = Object.assign({}, C.ui[lang] || {}, values);
  });

  const first = C.arTargets[0];
  first.sourceLanguage = "fr";
  first.translations = {
    fr: "✝\n\nÀ la mémoire des combattants\nFrançais et Espagnols\nde l’Expédition Rigault de Genouilly\nMorts en 1858-59-60\net ensevelis en ces lieux\n\nR. I. P.",
    vi: "✝\n\nTưởng niệm những binh sĩ Pháp và Tây Ban Nha\nthuộc đoàn viễn chinh Rigault de Genouilly,\ntử trận trong các năm 1858, 1859 và 1860\nvà được an táng tại nơi này.\n\nCầu mong họ an nghỉ.",
    en: "✝\n\nIn memory of the French and Spanish combatants\nof the Rigault de Genouilly expedition,\nwho died in 1858, 1859 and 1860\nand were buried here.\n\nRest in peace.",
    es: "✝\n\nEn memoria de los combatientes franceses y españoles\nde la expedición de Rigault de Genouilly,\nfallecidos en 1858, 1859 y 1860\ny enterrados en este lugar.\n\nDescansen en paz.",
    ru: "✝\n\nВ память о французских и испанских воинах\nэкспедиции Риго де Женуйи,\nпогибших в 1858, 1859 и 1860 годах\nи похороненных здесь.\n\nПокойтесь с миром."
  };
  first.translationNotes = {
    fr:"Le texte original est en français.",
    vi:"Bản dịch tham khảo từ nguyên văn tiếng Pháp.",
    en:"Translation from the original French inscription.",
    es:"Traducción de la inscripción original en francés.",
    ru:"Перевод с оригинальной французской надписи."
  };

  const treilleText = "Le Capitaine Treille et les ouvriers d’Artillerie de la 11e Compagnie du 10e Régiment élevèrent ce monument en 1898.\n\nMonsieur Doumer, Gouverneur Général.\nMonsieur Bichot, Général Commandant en Chef.\nMonsieur Haüser, Vice-Résident.\nRévérend Père Laurent, Aumônier militaire.";
  C.arTargets.push({
    id:"plaque-treille-1898",
    image:"./plaque_treille.jpg",
    sourceLanguage:"fr",
    title:{
      fr:"La plaque du monument érigé en 1898",
      vi:"Bia về đài tưởng niệm dựng năm 1898",
      en:"Plaque for the monument erected in 1898",
      es:"Placa del monumento erigido en 1898",
      ru:"Табличка памятника, возведённого в 1898 году"
    },
    description:{
      fr:"Cette inscription indique que le capitaine Treille et les ouvriers d’artillerie de la 11e Compagnie du 10e Régiment élevèrent le monument en 1898. Elle cite ensuite quatre personnes et leurs fonctions.",
      vi:"Bia ghi rằng Đại úy Treille cùng các công nhân pháo binh thuộc Đại đội 11 của Trung đoàn 10 đã dựng đài tưởng niệm vào năm 1898, sau đó nêu tên bốn người cùng chức vụ của họ.",
      en:"The inscription says that Captain Treille and the artillery workers of the 11th Company of the 10th Regiment erected the monument in 1898. It then names four people and their official roles.",
      es:"La inscripción indica que el capitán Treille y los artilleros de la 11.ª Compañía del 10.º Regimiento erigieron el monumento en 1898. A continuación menciona a cuatro personas y sus cargos.",
      ru:"Согласно надписи, капитан Трейль и артиллерийские рабочие 11-й роты 10-го полка возвели памятник в 1898 году. Далее перечислены четыре человека и их должности."
    },
    inscription:treilleText,
    translations:{
      fr:treilleText,
      vi:"Đại úy Treille và các công nhân pháo binh thuộc Đại đội 11 của Trung đoàn 10 đã dựng đài tưởng niệm này vào năm 1898.\n\nÔng Doumer, Toàn quyền.\nÔng Bichot, Tướng Tổng chỉ huy.\nÔng Haüser, Phó Khâm sứ.\nReverend Father Laurent, tuyên úy quân đội.",
      en:"Captain Treille and the artillery workers of the 11th Company of the 10th Regiment erected this monument in 1898.\n\nMonsieur Doumer, Governor General.\nMonsieur Bichot, General Commanding-in-Chief.\nMonsieur Haüser, Vice-Resident.\nReverend Father Laurent, military chaplain.",
      es:"El capitán Treille y los artilleros de la 11.ª Compañía del 10.º Regimiento erigieron este monumento en 1898.\n\nMonsieur Doumer, Gobernador General.\nMonsieur Bichot, general comandante en jefe.\nMonsieur Haüser, vice-residente.\nReverendo Padre Laurent, capellán militar.",
      ru:"Капитан Трейль и артиллерийские рабочие 11-й роты 10-го полка возвели этот памятник в 1898 году.\n\nГосподин Думер, генерал-губернатор.\nГосподин Бишо, генерал, главнокомандующий.\nГосподин Haüser, вице-резидент.\nПреподобный отец Лоран, военный капеллан."
    },
    translationNotes:{
      fr:"Надпись дана в оригинале на французском языке.",
      vi:"Bản dịch tham khảo từ bản chép đầy đủ do người dùng cung cấp; cần đối chiếu với bia gốc.",
      en:"Translation based on the expanded transcription supplied for this project; verify against the original plaque.",
      es:"Traducción basada en la transcripción desarrollada facilitada para el proyecto; debe cotejarse con la placa original.",
      ru:"Перевод по полной транскрипции, предоставленной для проекта; требуется сверка с оригиналом."
    },
    note:{
      fr:"Transcription développée à partir du relevé fourni pour expliciter les abréviations. À vérifier sur la plaque originale.",
      vi:"Bản chép đã mở rộng các chữ viết tắt theo nội dung được cung cấp; cần đối chiếu với bia gốc.",
      en:"Expanded transcription based on the supplied reading to clarify abbreviations. Check it against the original plaque.",
      es:"Transcripción desarrollada a partir de la lectura facilitada para aclarar abreviaturas. Debe comprobarse en la placa original.",
      ru:"Расширенная транскрипция по предоставленному чтению для раскрытия сокращений. Необходимо сверить с оригиналом."
    },
    latitude:null, longitude:null,
    links:[
      {label:{fr:"Gallica — Bibliothèque nationale de France",vi:"Gallica — Thư viện Quốc gia Pháp",en:"Gallica — French National Library",es:"Gallica — Biblioteca Nacional de Francia",ru:"Gallica — Национальная библиотека Франции"},url:"https://gallica.bnf.fr/"},
      {label:{fr:"Mémoire des hommes",vi:"Mémoire des hommes",en:"Mémoire des hommes",es:"Mémoire des hommes",ru:"Mémoire des hommes"},url:"https://www.memoiredeshommes.sga.defense.gouv.fr/"}
    ]
  });

  C.people = [
    {
      id:"treille", name:"Capitaine Treille",
      role:{fr:"Capitaine cité comme ayant fait ériger le monument avec les ouvriers d’artillerie en 1898.",vi:"Đại úy được ghi là người cùng các công nhân pháo binh dựng đài tưởng niệm năm 1898.",en:"Captain named as having the monument erected with the artillery workers in 1898.",es:"Capitán citado como responsable, junto con los artilleros, de erigir el monumento en 1898.",ru:"Капитан, которому надпись приписывает возведение памятника вместе с артиллерийскими рабочими в 1898 году."}
    },
    {
      id:"doumer", name:"Monsieur Doumer",
      role:{fr:"Gouverneur Général (fonction indiquée sur la plaque).",vi:"Toàn quyền (chức vụ ghi trên bia).",en:"Governor General (title given on the plaque).",es:"Gobernador General (cargo indicado en la placa).",ru:"Генерал-губернатор (должность, указанная на табличке)."}
    },
    {
      id:"bichot", name:"Monsieur Bichot",
      role:{fr:"Général Commandant en Chef (fonction indiquée sur la plaque).",vi:"Tướng Tổng chỉ huy (chức vụ ghi trên bia).",en:"General Commanding-in-Chief (title given on the plaque).",es:"General comandante en jefe (cargo indicado en la placa).",ru:"Генерал, главнокомандующий (должность, указанная на табличке)."}
    },
    {
      id:"hauser", name:"Monsieur Haüser",
      role:{fr:"Vice-Résident (fonction indiquée sur la plaque).",vi:"Phó Khâm sứ (chức vụ ghi trên bia).",en:"Vice-Resident (title given on the plaque).",es:"Vice-residente (cargo indicado en la placa).",ru:"Вице-резидент (должность, указанная на табличке)."}
    },
    {
      id:"laurent", name:"Révérend Père Laurent",
      role:{fr:"Aumônier militaire (fonction indiquée sur la plaque).",vi:"Tuyên úy quân đội (chức vụ ghi trên bia).",en:"Military chaplain (title given on the plaque).",es:"Capellán militar (cargo indicado en la placa).",ru:"Военный капеллан (должность, указанная на табличке)."}
    }
  ];
})();

// Final editorial completeness for new languages and inscription labels.
(() => {
  const C = window.MEMOIRE_CONFIG;
  Object.assign(C.ui.fr, {sourceInscriptionTitle:"Transcription relevée (français)", biographyLabel:"Biographie"});
  Object.assign(C.ui.vi, {sourceInscriptionTitle:"Bản chép nội dung (tiếng Pháp)", biographyLabel:"Tiểu sử"});
  Object.assign(C.ui.en, {sourceInscriptionTitle:"Transcription (French)", biographyLabel:"Biography"});
  Object.assign(C.ui.es, {sourceInscriptionTitle:"Transcripción desarrollada (francés)", biographyLabel:"Biografía"});
  Object.assign(C.ui.ru, {sourceInscriptionTitle:"Транскрипция (французский)", biographyLabel:"Биография"});

  const first = C.arTargets[0];
  Object.assign(first.title, {es:"La placa del osario", ru:"Табличка оссуария"});
  Object.assign(first.description, {
    es:"Esta placa recuerda a los combatientes franceses y españoles de la expedición de Rigault de Genouilly que murieron en 1858, 1859 y 1860 y fueron enterrados aquí.",
    ru:"Эта табличка посвящена французским и испанским участникам экспедиции Риго де Женуйи, погибшим в 1858, 1859 и 1860 годах и похороненным здесь."
  });
  Object.assign(first.note, {
    es:"Transcripción provisional que debe comprobarse en la placa original; el texto se conserva en su idioma de origen.",
    ru:"Предварительная транскрипция; её необходимо сверить с оригинальной табличкой. Текст сохранён на языке оригинала."
  });
  first.translationNotes = {
    fr:"Le texte original est en français.",
    vi:"Bản dịch tham khảo từ nguyên văn tiếng Pháp.",
    en:"Translation from the original French inscription.",
    es:"Traducción de la inscripción original en francés.",
    ru:"Перевод с оригинальной французской надписи."
  };
  C.arTargets[1].translationNotes.fr = "Traduction proposée à partir de la transcription développée fournie pour ce projet. À vérifier sur la plaque originale.";
  C.arTargets[1].translations.vi = C.arTargets[1].translations.vi.replace("Reverend Father Laurent", "Linh mục Laurent");
})();

// Navigation text now reflects both AR markers available in the visitor app.
(() => {
  const U = window.MEMOIRE_CONFIG.ui;
  Object.assign(U.fr, {firstStop:"Les deux plaques commémoratives", firstStopText:"Deux repères peuvent être reconnus par la caméra : la plaque de l’ossuaire et la plaque du monument érigé en 1898.", cameraTitle:"Visez une plaque commémorative", cameraIntro:"Présentez la plaque entière, plutôt de face, avec un éclairage régulier. La première préparation des cibles peut prendre un moment."});
  Object.assign(U.vi, {firstStop:"Hai bia tưởng niệm", firstStopText:"Camera có thể nhận diện hai điểm: bia nhà lưu cốt và bia của đài tưởng niệm dựng năm 1898.", cameraTitle:"Hướng camera vào bia tưởng niệm", cameraIntro:"Đưa toàn bộ tấm bia vào khung hình, càng chính diện càng tốt và đủ ánh sáng. Lần chuẩn bị các mục tiêu đầu tiên có thể mất một lúc."});
  Object.assign(U.en, {firstStop:"Two commemorative plaques", firstStopText:"The camera can recognize two markers: the ossuary plaque and the plaque for the monument erected in 1898.", cameraTitle:"Point at a commemorative plaque", cameraIntro:"Keep the whole plaque in view, preferably face-on, with even lighting. Preparing the targets for the first time may take a little while."});
  Object.assign(U.es, {firstStop:"Dos placas conmemorativas", firstStopText:"La cámara puede reconocer dos hitos: la placa del osario y la placa del monumento erigido en 1898.", cameraTitle:"Enfoca una placa conmemorativa", cameraIntro:"Mantén la placa completa dentro del encuadre, preferiblemente de frente y con luz uniforme. La preparación inicial de las imágenes puede tardar."});
  Object.assign(U.ru, {firstStop:"Две памятные таблички", firstStopText:"Камера распознаёт два объекта: табличку оссуария и табличку памятника, возведённого в 1898 году.", cameraTitle:"Наведите камеру на памятную табличку", cameraIntro:"Полностью поместите табличку в кадр, желательно прямо и при равномерном освещении. Первичная подготовка изображений может занять некоторое время."});
})();