# antl — Landing Page Template 01

Premier template de site vitrine réutilisable d'antl, inspiré de la structure de la maquette Figma « Modern Product Launch ». Il privilégie une landing page éditoriale, des blocs de preuve, une hiérarchie visuelle forte et une adaptation mobile native.

## Architecture modulaire

- React 19, Vite 7 et TypeScript strict
- SCSS natif : aucune bibliothèque visuelle imposée
- `src/content/site.ts` est la configuration d'un client : marque, textes, CTA, thème et sections
- `src/types/` décrit les contrats de contenu et de composition
- `src/models/` porte les règles pures de résolution des sections
- `src/hooks/` prépare l'état consommé par les layouts
- `src/views/components/` contient les sections UI, chacune exposée par un barrel
- `src/views/layouts/` contient les pages passives, exposées par un barrel
- `src/utils/styles/` centralise les variables, mixins et thèmes

### Composer une page

L'ordre dans `site.sections` est l'ordre réel d'affichage. Déplacer un bloc ne demande aucune modification de composant : déplacer simplement sa ligne. Une section peut être retirée sans suppression de code avec `enabled: false`.

```ts
sections: [
  { id: "benefits", enabled: true },
  { id: "quote", enabled: true },
  { id: "comparison", enabled: false },
]
```

Le thème actif est choisi par `site.theme.className`. Ses tokens de couleur, de typographie et de focus sont dans `src/utils/styles/theme.scss`. Pour créer une variante, ajouter une classe `.theme-nom-du-theme` avec les mêmes variables CSS, puis l'indiquer dans la configuration. Les composants ne contiennent pas de codes couleur de marque.

## Démarrer

```sh
npm install
npm run dev
```

Pour la livraison :

```sh
npm run build
```

## Démo et GitHub Pages

Le template utilise `HashRouter` : une URL de démo telle que `/#/page-introuvable` rend l'écran 404 en conservant le design du site. Les ancres de sections sont portées par `/#/?section=benefices`. Ce choix évite de dépendre des réécritures d'URL côté serveur et fonctionne sur GitHub Pages.

Le fichier `public/404.html` redirige les accès directs à une URL inconnue vers le routeur ; Vite publie également les assets avec des chemins relatifs. Le déploiement statique consiste à publier le contenu de `dist/`.

## Personnaliser un site client

1. Dupliquer ce dossier dans le dépôt du site client.
2. Remplacer la configuration dans `src/content/site.ts` : nom, navigation, textes, bénéfices, témoignage et coordonnées.
3. Choisir ou créer le thème dans `src/utils/styles/theme.scss`.
4. Réordonner ou désactiver les sections dans `site.sections`.
5. Remplacer les illustrations CSS par des visuels de marque lorsque le client les fournit.
6. Ne conserver que les sections utiles à son parcours ; le template ne force ni catalogue, ni blog, ni paiement.

## Modules optionnels

Le template ne contient pas de paiement activé par défaut : aucun produit, prix ou compte Stripe client n'est encore défini. Lorsqu'un projet le justifie, exporter le module autonome dans ce dépôt :

```sh
cd ../antl-site-payments
npm run export:site -- --target ../antl-landing-page-template-01 --ui react
```

Configurer ensuite exclusivement les identifiants Stripe du client, les offres et le traitement métier du webhook, conformément à `PAYMENTS_SETUP.md` généré par l'export. Le navigateur ne doit transmettre qu'un `offerId`.

## Référence design

La composition s'inspire de [Modern Product Launch](https://www.figma.com/community/file/1487309170684591074/modern-product-launch), par Figma Community. Les contenus, la marque et les illustrations du présent template sont des placeholders originaux, destinés à être remplacés pour chaque projet client.
