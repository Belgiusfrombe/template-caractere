import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Portfolio Vue CLI & Pinia",
        shortDescription: "Portfolio personnel développé avec Vue.js et Tailwind CSS",
        longDescription: "Une application web moderne et responsive qui présente mes projets et compétences de manière interactive et élégante. Développée avec Vue.js pour une expérience utilisateur fluide et Tailwind CSS pour un design sur mesure.",
        technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "Pinia"],
        imageUrl: new URL('../assets/img/portfolio.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/portfolio",
        demoLink: "https://votre-portfolio.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
      {
        id: 2,
        title: "Portfolio Vue",
        shortDescription: "Plateforme e-commerce complète avec panier et paiement",
        longDescription: "Une application e-commerce full-stack offrant une expérience d'achat complète avec gestion de panier, système de paiement sécurisé et interface administrateur.",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
        imageUrl: new URL('../assets/img/oldportofolio.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/ecommerce",
        demoLink: "https://votre-ecommerce.com",
        category: "Full Stack",
        features: [
          "Authentification utilisateur",
          "Paiement sécurisé",
          "Panel administrateur",
          "Gestion des stocks"
        ]
      },
      {
        id: 3,
        title: "Site pour un restaurant",
        technologies: ["HTML", "CSS", "JavaScript"],
        imageUrl: new URL('../assets/img/katkarestaurant.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/restaurant",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
      {
        id: 4,
        title: "Template pour mes projets",
        technologies: ["HTML", "CSS", "JavaScript"],
        imageUrl: new URL('../assets/img/templateproject.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/restaurant",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
      {
        id: 5,
        title: "RetroMonsters - Jeu de combat",
        technologies: ["HTML", "CSS", "JavaScript", "Vue"],
        imageUrl: new URL('../assets/img/retromonsters.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/restaurant",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
      {
        id: 6,
        title: "Application de gestion de contacts",
        technologies: ["HTML", "CSS", "JavaScript", "Vue"],
        imageUrl: new URL('../assets/img/contact-app.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/restaurant",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
      {
        id: 7,
        title: "Flip Coin Master",
        technologies: ["HTML", "CSS", "JavaScript", "Vue"],
        imageUrl: new URL('../assets/img/contact-app.jpg', import.meta.url).href,
        githubLink: "https://github.com/votre-username/restaurant",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ]
      },
    ]
  }),

  getters: {
    getProjectById: (state) => {
      return (projectId) => state.projects.find(project => project.id === projectId)
    },
    getAllProjects: (state) => state.projects,
    getProjectsByCategory: (state) => {
      return (category) => state.projects.filter(project => project.category === category)
    }
  }
}) 