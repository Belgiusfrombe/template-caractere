import { defineStore } from 'pinia'

export const useGraphStore = defineStore('graph', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Affiche Festival Jazz 2024",
        slug: "affiche-festival-jazz-2024",
        shortDescription: "Affiche événementielle pour un festival de jazz local",
        longDescription: "Création d'une affiche A2 pour un festival de musique. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/affiche-jazz.jpg', import.meta.url).href,
        client: "Festival Jazz Liège",
        category: "Affiche / Print",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
        ]
      },
      {
        id: 2,
        title: "Identité visuelle - CoffeeTime",
        slug: "identite-visuelle-coffeetime",
        shortDescription: "Création de l'identité visuelle complète d'un coffee shop",
        longDescription: "Développement d’un logo, charte graphique, menu et packaging pour CoffeeTime. Projet centré sur un univers doux et chaleureux, à destination d’un public urbain.",
        tools: ["Illustrator", "InDesign"],
        formats: ["Logo", "Print", "Packaging", "Web"],
        imageUrl: new URL('../assets/img/branding-coffeetime.jpg', import.meta.url).href,
        client: "CoffeeTime",
        category: "Branding / Identité visuelle",
        features: [
          "Logo vectoriel",
          "Palette couleur personnalisée",
          "Typographie sur-mesure"
        ]
      },
      {
        id: 3,
        title: "Illustrations - RetroGaming",
        slug: "illustrations-retrogaming",
        shortDescription: "Pack d’illustrations vectorielles inspirées des années 80",
        longDescription: "Création de 10 illustrations en flat design sur le thème du rétro gaming. Palette néon, style pixel art modernisé.",
        tools: ["Illustrator"],
        formats: ["Web", "Vector", "Poster"],
        imageUrl: new URL('../assets/img/retrogaming-pack.jpg', import.meta.url).href,
        client: null,
        category: "Illustration",
        features: [
          "Vectoriel pur",
          "Palette rétro",
          "Utilisable en impression"
        ]
      },
      {
        id: 4,
        title: "Maquette UI - App Finance",
        shortDescription: "Design UI/UX d'une application mobile de finance",
        longDescription: "Création d’un design moderne et fonctionnel pour une application de gestion de budget personnel. Adapté pour smartphone et tablette.",
        tools: ["Figma", "Photoshop"],
        formats: ["UI Design", "Mobile"],
        imageUrl: new URL('../assets/img/ui-finance-app.jpg', import.meta.url).href,
        client: "Projet fictif",
        category: "UI/UX Design",
        features: [
          "Design responsive",
          "Couleurs modernes",
          "Icônes personnalisées"
        ]
      }
    ]
  }),

  getters: {
    getProjectById: (state) => {
      return (projectId) => state.projects.find(project => project.id === projectId)
    },
    getAllProjects: (state) => {
      return state.projects;
    },
    getProjectCount: (state) => {
      return state.projects.length;
    },
    getProjectBySlug: (state) => {
      return (slug) => state.projects.find(project => project.slug === slug)
    },
  }
})
