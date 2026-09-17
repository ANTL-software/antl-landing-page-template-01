import type { ProductLaunchSite } from "../types";

export const site: ProductLaunchSite = {
  theme: {
    id: "product-launch",
    className: "theme-product-launch",
  },
  brand: "Horizon",
  navigation: [
    { label: "Bénéfices", href: "#benefices" },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Méthode", href: "#methode" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: { label: "Parler à un expert", href: "#contact" },
  hero: {
    title: "Voyez plus loin.",
  },
  logos: ["lumio", "northstar", "adept", "letter", "vertex", "orbit"],
  benefits: {
    eyebrow: "Bénéfices",
    title: "Enfin une vision qui avance avec vous.",
    text: "Horizon révèle l'essentiel sans vous noyer sous les indicateurs.",
    items: [
      { icon: "trend", title: "Révélez les tendances", description: "Une lecture nette des signaux qui comptent pour guider les prochaines décisions." },
      { icon: "globe", title: "Gardez le cap partout", description: "Une même vision de vos équipes, sites et marchés sans ajouter de reporting." },
      { icon: "message", title: "Parlez à chacun", description: "Des données compréhensibles et contextualisées pour chaque interlocuteur." },
      { icon: "chart", title: "Visualisez la progression", description: "Des rapports expressifs qui rendent vos objectifs concrets et partageables." },
    ],
  },
  insight: {
    eyebrow: "La bonne perspective",
    title: "Les données, enfin à la bonne échelle.",
    text: "Une lecture vivante de chaque territoire, équipe et opportunité.",
    highlights: [
      "Repérez les évolutions dès qu'elles apparaissent.",
      "Mettez chaque équipe au même niveau d'information.",
      "Donnez plus d'impact à vos présentations.",
      "Obtenez une vision globale en quelques secondes.",
    ],
    cta: { label: "En savoir plus", href: "#contact" },
  },
  comparison: {
    eyebrow: "Fonctionnalités",
    title: "Pourquoi Horizon ?",
    text: "La base fiable et élégante qui suit le rythme réel de votre activité.",
    cta: { label: "En savoir plus", href: "#contact" },
    columns: ["Horizon", "Flux classique", "Tableur"],
    rows: [
      { label: "Vue en temps réel", values: ["included", "included", "included"] },
      { label: "Analyses assistées", values: ["included", "included", "excluded"] },
      { label: "Espaces personnalisés", values: ["included", "excluded", "excluded"] },
      { label: "Rapports partageables", values: ["included", "excluded", "excluded"] },
      { label: "Connexion aux outils", values: ["included", "excluded", "excluded"] },
      { label: "Accès international", values: ["included", "excluded", "excluded"] },
    ],
  },
  quote: {
    text: "Horizon a complètement changé notre manière de piloter l'activité. Tout est lisible, et chacun sait quoi faire ensuite.",
    author: "Camille Martin",
    role: "Directrice des opérations",
  },
  method: {
    eyebrow: "Méthode",
    title: "Tracez votre prochain cap.",
    cta: { label: "Voir la méthode", href: "#contact" },
    steps: [
      { title: "Connectez", description: "Branchez vos sources utiles en quelques minutes." },
      { title: "Personnalisez", description: "Adaptez vos espaces aux indicateurs de votre activité." },
      { title: "Progressez", description: "Décidez plus vite avec une vision toujours à jour." },
    ],
  },
  contact: {
    eyebrow: "Construisons la suite",
    title: "Envie de prendre de la hauteur ?",
    text: "Planifions un échange pour imaginer l'expérience adaptée à votre projet.",
    cta: { label: "Nous contacter", href: "mailto:bonjour@exemple.fr" },
  },
  notFound: {
    eyebrow: "Erreur 404",
    title: "Cette page est hors de portée.",
    text: "Elle a peut-être été déplacée ou l'adresse saisie n'est pas valide.",
    cta: { label: "Retour à l'accueil", href: "#top" },
  },
  footer: { legalNotice: "Tous droits réservés." },
  sections: [
    { id: "trust", enabled: true },
    { id: "benefits", enabled: true },
    { id: "visual-benefits", enabled: true },
    { id: "insights", enabled: true },
    { id: "comparison", enabled: true },
    { id: "quote", enabled: true },
    { id: "method", enabled: true },
    { id: "visual-method", enabled: true },
  ],
};
