# Documentation de Plinkk
---

## Sommaire

- [\# Documentation de Plinkk](#-documentation-de-plinkk)
- [Sommaire](#sommaire)
- [Introduction](#introduction)
- [Structure des fichiers](#structure-des-fichiers)
- [Configuration du profil (`profileConfig.js`)](#configuration-du-profil-profileconfigjs)
  - [Champs principaux](#champs-principaux)
- [| `selectedCanvasIndex`        | Index de l’animation canvas (voir canva)                      | `3`                         |](#-selectedcanvasindex---------index-de-lanimation-canvas-voir-canva-----------------------3-------------------------)
  - [Exemple complet](#exemple-complet)
  - [Ajouter ou modifier un lien](#ajouter-ou-modifier-un-lien)
  - [Ajouter ou modifier un label](#ajouter-ou-modifier-un-label)
  - [Ajouter ou modifier un réseau social](#ajouter-ou-modifier-un-réseau-social)
  - [Changer le fond](#changer-le-fond)
  - [Changer le thème](#changer-le-thème)
  - [Activer/désactiver les animations](#activerdésactiver-les-animations)
  - [Activer/désactiver le néon](#activerdésactiver-le-néon)
  - [Changer la barre de statut](#changer-la-barre-de-statut)
- [Thèmes et animations](#thèmes-et-animations)
  - [Liste des thèmes](#liste-des-thèmes)
  - [Liste des animations](#liste-des-animations)
  - [Liste des animations Canva](#liste-des-animations-canva)
  - [Liste des icônes SVG](#liste-des-icônes-svg)
- [Fonctionnement du code](#fonctionnement-du-code)
  - [Chargement dynamique](#chargement-dynamique)
  - [Fonctions utilitaires](#fonctions-utilitaires)
- [Personnalisation avancée](#personnalisation-avancée)
  - [Ajouter un nouveau type de bloc](#ajouter-un-nouveau-type-de-bloc)
  - [Ajouter une propriété personnalisée](#ajouter-une-propriété-personnalisée)
- [Dépannage et erreurs courantes](#dépannage-et-erreurs-courantes)
  - [Problèmes fréquents et solutions](#problèmes-fréquents-et-solutions)
- [Tutos rapides](#tutos-rapides)
  - [Changer la couleur d’un bouton au hover](#changer-la-couleur-dun-bouton-au-hover)
  - [Ajouter un lien avec description au survol](#ajouter-un-lien-avec-description-au-survol)
  - [Désactiver toutes les animations](#désactiver-toutes-les-animations)
- [FAQ](#faq)
- [Ressources complémentaires](#ressources-complémentaires)

---

## Introduction

Ce template permet de créer une page de liens personnalisée (type Linktree) avec :
- Photo de profil, nom, email, description
- Liens personnalisés avec icônes, descriptions, badges
- Thèmes, animations, fond dynamique ou image
- Barre de statut, réseaux sociaux, labels, etc.

Tout est **configurable** dans le fichier `profileConfig.js` et via les fichiers de configuration de thèmes et d’animations.

---

## Structure des fichiers

- **index.html** : structure HTML principale, inclut tous les scripts et CSS.
- **contents/js/config/profileConfig.js** : configuration de ton profil (tout ce qui s’affiche).
- **contents/js/config/themeConfig.js** : configuration des thèmes (couleurs, styles).
- **contents/js/tools.js** : fonctions utilitaires pour générer le contenu.
- **contents/js/init.js** : script d’initialisation, assemble la page.
- **contents/css/styles.css** : styles principaux.
- **contents/css/button.css** : styles additionnels pour les boutons.

---

## Configuration du profil (`profileConfig.js`)

### Champs principaux

| Champ                        | Description                                                                                   | Exemple / Valeur par défaut |
|------------------------------|----------------------------------------------------------------------------------------------|-----------------------------|
| `profileLink`                | Lien du profil principal (cliquable sur la photo)                                            | `"https://github.com"`      |
| `profileImage`               | URL de l’image de profil                                                                     | `"https://..."`             |
| `profileIcon`                | URL de l’icône derrière la photo de profil                                                   | `"https://..."`             |
| `profileSiteText`            | Texte affiché derrière la photo de profil                                                    | `"GitHub"`                  |
| `userName`                   | Nom affiché en haut de la page                                                               | `"GitHub User"`             |
| `email`                      | Email affiché (avec bouton copier)                                                           | `"user@github.com"`         |
| `links`                      | Tableau de liens personnalisés (voir plus bas)                                               | `[ ... ]`                   |
| `background`                 | Fond de la page (tableau de couleurs pour dégradé ou URL d’image)                            | `["#FF5733", "#33FF57"]`    |
| `degBackgroundColor`         | Angle du dégradé                                                                             | `45`                        |
| `profileHoverColor`          | Couleur de survol de l’article principal                                                     | `"#7289DA"`                 |
| `neonColors`                 | Couleurs du néon autour de la photo                                                          | `[ ... ]`                   |
| `iconUrl`                    | Icône de l’onglet navigateur                                                                 | `"https://..."`             |
| `description`                | Description affichée sous l’email                                                            | `"..."`                     |
| `labels`                     | Labels/badges sous le nom                                                                    | `[ ... ]`                   |
| `socialIcon`                 | Icônes de réseaux sociaux                                                                    | `[ ... ]`                   |
| `statusbar`                  | Barre de statut ronde                                                                        | `{ ... }`                   |
| `neonEnable`                 | 1 = néon activé, 0 = désactivé                                                               | `1`                         |
| `buttonThemeEnable`          | 1 = boutons thématisés, 0 = boutons simples                                                  | `1`                         |
| `EnableAnimationArticle`     | 1 = animation de l’article activée, 0 = désactivée                                           | `1`                         |
| `EnableAnimationButton`      | 1 = animation des boutons activée, 0 = désactivée                                            | `1`                         |
| `EnableAnimationBackground`  | 1 = animation du fond activée, 0 = désactivée                                                | `1`                         |
| `backgroundSize`             | Taille du fond (si image, en %)                                                              | `50`                        |
| `selectedThemeIndex`         | Index du thème choisi (voir [thèmes](#liste-des-thèmes))                                     | `0`                         |
| `selectedAnimationIndex`     | Index de l’animation de l’article (voir [animations](#liste-des-animations))                 | `0`                         |
| `selectedAnimationButtonIndex`| Index de l’animation des boutons (voir [animations](#liste-des-animations))                 | `10`                        |
| `selectedAnimationBackgroundIndex`| Index de l’animation du fond (voir [animations](#liste-des-animations))                 | `0`                         |
| `animationDurationBackground`| Durée de l’animation du fond (en secondes)                                                   | `30`                        |
| `delayAnimationButton`       | Délai entre les animations des boutons (en secondes)                                         | `0.1`                       |
| `canvaEnable`                | 1 = fond animé canvas activé, 0 = désactivé                                                  | `1`                         |
| `selectedCanvasIndex`        | Index de l’animation canvas (voir [canva](#liste-des-animations-canva))                      | `3`                         |
---

### Exemple complet

```javascript
const profileData = {
    profileLink: "https://github.com",
    profileImage: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    profileIcon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    profileSiteText: "GitHub",
    userName: "GitHub User",
    email: "user@github.com",
    links: [
        {
            icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            url: "https://github.com/link1",
            text: "Link 1",
            name: "GitHub",
            description: "Ma description personnalisée",
            showDescriptionOnHover: true,
            showDescription: true
        },
        // ... autres liens
    ],
    background: ["#FF5733", "#33FF57"],
    degBackgroundColor: 45,
    profileHoverColor: "#7289DA",
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"],
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    description: "Mollit laboris cupidatat do enim nulla ex laborum.",
    labels: [
        { data: "Developer", color: "#FF6384", fontColor: "#FFFFFF" },
        { data: "Designer", color: "#36A2EB", fontColor: "#FFFFFF" }
    ],
    socialIcon: [
        {url: "https://github.com", icon: "Discord"},
        {url: "https://github.com", icon: "GitHub"}
    ],
    statusbar: { text: "Hello World!", colorBg: "#222222", colorText: "#cccccc", borderColor:"#7289DA", fontTextColor:1 },
    neonEnable: 1,
    buttonThemeEnable: 1,
    EnableAnimationArticle: 1,
    EnableAnimationButton: 1,
    EnableAnimationBackground: 1,
    backgroundSize: 50,
    selectedThemeIndex: 0,
    selectedAnimationIndex: 0,
    selectedAnimationButtonIndex: 10,
    selectedAnimationBackgroundIndex: 0,
    animationDurationBackground: 30,
    delayAnimationButton: 0.1,
    canvaEnable: 1,
    selectedCanvasIndex: 3
};
```

---

### Ajouter ou modifier un lien

**Ajouter un lien :**

```javascript
links: [
    ...,
    {
        icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        url: "https://github.com/monlien",
        text: "Mon Lien",
        name: "GitHub",
        description: "Description optionnelle",
        showDescriptionOnHover: true,
        showDescription: false
    }
]
```

- `showDescriptionOnHover: true` : la description s’affiche au survol.
- `showDescription: true` : la description est toujours visible.

---

### Ajouter ou modifier un label

```javascript
labels: [
    { data: "Developer", color: "#FF6384", fontColor: "#FFFFFF" },
    { data: "Designer", color: "#36A2EB", fontColor: "#FFFFFF" }
]
```
- `data` : texte du badge
- `color` : couleur de fond
- `fontColor` : couleur du texte

---

### Ajouter ou modifier un réseau social

```javascript
socialIcon: [
    {url: "https://github.com", icon: "Discord"},
    {url: "https://github.com", icon: "GitHub"}
]
```
- `icon` : nom de l’icône SVG (voir [liste](#liste-des-icônes-svg))

---

### Changer le fond

- **Dégradé :**
    ```javascript
    background: ["#FF5733", "#33FF57"],
    degBackgroundColor: 45
    ```
- **Image :**
    ```javascript
    background: "https://url/image.jpg"
    ```

---

### Changer le thème

- Modifie `selectedThemeIndex` (voir [liste des thèmes](#liste-des-thèmes)).
- Pour créer un nouveau thème, édite `themeConfig.js`.

---

### Activer/désactiver les animations

- Mets à `1` ou `0` :
    - `EnableAnimationArticle`
    - `EnableAnimationButton`
    - `EnableAnimationBackground`
    - `canvaEnable`

---

### Activer/désactiver le néon

- Mets `neonEnable: 1` pour activer, `0` pour désactiver.
> ⚠️ **Remarque :** Le néon possède actuellement un bug : la couleur de fond reste la même quelle que soit la valeur définie dans `neonColors`. Ce problème sera corrigé dans une prochaine version.

---

### Changer la barre de statut
```javascript
statusbar: {
    text: "Hello World!",
    colorBg: "#222222",
    colorText: "#cccccc",
    borderColor: "#7289DA",
    fontTextColor: 1 // 1 = borderColor, 0 = colorBg
}
```

---

## Thèmes et animations

### Liste des thèmes

Voir en bas du fichier `profileConfig.js` ou dans `themeConfig.js` :

| Index | Nom du thème             |
|-------|-------------------------|
| 0     | Grey Theme              |
| 1     | Light Yellow Theme      |
| 2     | Green Theme             |
| 3     | Blue Theme              |
| 4     | Red Theme               |
| 5     | Light blue Theme        |
| 6     | Dark Theme              |
| 7     | Orange Theme            |
| 8     | Grey Dark Theme         |
| 9     | Green Grey Theme        |
| 10    | Very Light Blue Theme   |
| 11    | Brown Theme             |
| 12    | Purple Theme            |
| 13    | Pink Theme              |
| 14    | Neptune Theme           |
> ⚠️ **Remarque :** Tous les thèmes sont en mode **clair** (light) par défaut, et leur version alternative ("opposite") est en mode **sombre** (dark).

---

### Liste des animations

| Index | Animation               |
|-------|-------------------------|
| 0     | Fondu                   |
| 1     | Glisser                 |
| 2     | Zoomer                  |
| 3     | Rotation                |
| 4     | Rebondir                |
| 5     | Secouer                 |
| 6     | Retourner               |
| 7     | Pulsation               |
| 8     | Balancer                |
| 9     | Se balancer             |
| 10    | Clignoter               |
| 11    | Bande de caoutchouc     |
| 12    | Tada                    |
| 13    | Gélatineux              |
| 14    | Battement de coeur      |
| 15    | Vitesse de la lumière   |
| 16    | Rouler                  |
| 17    | Charnière               |

---

### Liste des animations Canva

| Index | Animation Canva         |
|-------|------------------------|
| 0     | Bubble                 |
| 1     | Neuronal               |
| 2     | Particule              |
| 3     | Stars Array            |
| 4     | Snow                   |
| 5     | Galaxy                 |
| 6     | Hexagone               |
| 7     | Confetti               |
| 8     | Fireworks              |
| 9     | Boom Click             |
| 10    | Crowd                  |
| 11    | Storm                  |
| 12    | Color Wars             |
| 13    | Liquid Light           |
| 14    | Rain                   |
| 15    | Matrix                 |
| 16    | Purple Tree            |
| 17    | Cloud                  |
| 18    | Space                  |

---

### Liste des icônes SVG

Voir la liste complète en bas de `profileConfig.js` (Discord, GitHub, LinkedIn, Instagram, YouTube alt, etc.).

---

## Fonctionnement du code

### Chargement dynamique

- Le HTML est minimal, tout est généré dynamiquement par JS.
- `init.js` assemble la page en appelant les fonctions de `tools.js` avec les données de `profileConfig.js`.

### Fonctions utilitaires

- **createProfileContainer** : photo de profil + effet pivot
- **createUserName** : nom d’utilisateur
- **createEmailAndDescription** : email + bouton copier + description
- **createLinkBoxes** : boutons de liens
- **createLabelButtons** : badges
- **createIconList** : réseaux sociaux
- **createStatusBar** : barre de statut
- **applyTheme** : applique le thème sélectionné
- **applyDynamicStyles** : applique fond, néon, animations, etc.

---

## Personnalisation avancée

### Ajouter un nouveau type de bloc

1. Crée une fonction dans `tools.js` qui retourne un élément DOM.
2. Appelle cette fonction dans `init.js` pour l’ajouter à la page.

### Ajouter une propriété personnalisée

1. Ajoute la propriété dans `profileConfig.js`.
2. Utilise-la dans les fonctions de `tools.js` pour modifier le rendu.

---

## Dépannage et erreurs courantes

### Problèmes fréquents et solutions

- **Un élément ne s’affiche pas ?**
    - Vérifie que le champ n’est pas vide ou mal orthographié.
    - Vérifie la console pour des erreurs JS.
- **Un style ne s’applique pas ?**
    - Vérifie l’ordre de chargement des CSS.
    - Ajoute `!important` si besoin.
- **Un lien ne fonctionne pas ?**
    - Vérifie l’URL et que le champ `text` n’est pas vide.
- **Erreur JSON ou JS ?**
    - Vérifie la syntaxe (virgules, crochets, etc.).
    - Utilise un validateur JSON en ligne.
- **Erreur liée au canvas (fond animé) ?**
    - Si une erreur survient lors du chargement ou du rendu du canvas, le fond bascule automatiquement sur la couleur ou l’image définie dans `background`.

---

## Tutos rapides

### Changer la couleur d’un bouton au hover

Dans `styles.css` :

```css
.discord-box:hover {
    background-color: #7289DA;
    color: white;
}
```
Ou modifie dynamiquement dans `tools.js` si tu veux que ce soit lié au thème.

---

### Ajouter un lien avec description au survol

Dans `profileConfig.js` :

```javascript
{
    icon: "...",
    url: "...",
    text: "Nouveau lien",
    name: "GitHub",
    description: "Description visible au hover",
    showDescriptionOnHover: true,
    showDescription: false
}
```

---

### Désactiver toutes les animations

Dans `profileConfig.js` :

```javascript
EnableAnimationArticle: 0,
EnableAnimationButton: 0,
EnableAnimationBackground: 0,
canvaEnable: 0,
```

---

## FAQ

**Q : Comment ajouter un nouveau thème ?**  
R : Ajoute un objet dans le tableau `themes` de `themeConfig.js` et utilise son index dans `selectedThemeIndex`.

**Q : Comment changer l’ordre des liens ?**  
R : Change l’ordre des objets dans le tableau `links`.

**Q : Comment afficher la description d’un lien tout le temps ?**  
R : Mets `showDescription: true` dans l’objet du lien.

---

## Ressources complémentaires

- [MDN Web Docs](https://developer.mozilla.org/fr/)
- [Color Picker](https://www.colorpicker.com/)
- [JSON Validator](https://jsonlint.com/)
- [Liste d’icônes SVG](https://simpleicons.org/)
