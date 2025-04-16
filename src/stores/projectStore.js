import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id: 1,
        slug: "portfolio-vue-cli-pinia",
        title: "Portfolio Vue CLI & Pinia",
        shortDescription: "Portfolio personnel développé avec Vue.js et Tailwind CSS",
        longDescription: "Le portfolio est le reflet de l'âme d'un développeur, de son parcours, et celui-ci est le mien, mes débuts.",
        technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "Pinia"],
        techType : ["Frontend", "Backend"],
        imageUrl: new URL('../assets/img/portfolio.jpg', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/template-caractere",
        demoLink: "https://votre-portfolio.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Performance optimisée"
        ]
      },
      {
        id: 2,
        title: "Portfolio Vue",
        slug: "portfolio-vue",
        shortDescription: "Mon ancien portfolio",
        longDescription: " Mon premier portfolio en Vue.js que je faisais en 2024, pas fini et pas optimisé d'un poil.",
        technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
        techType : ["Frontend", "Backend"],
        imageUrl: new URL('../assets/img/oldportofolio.jpg', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/new-cv-app-vue",
        demoLink: "https://votre-ecommerce.com",
        category: "Full Stack",
        features: [
          "Design responsive",
          "Animations fluides",
          "Performance optimisée"
        ]
      },
      {
        id: 3,
        title: "Site pour un restaurant",
        slug: "site-restaurant",
        shortDescription: "Site d'un restaurant",
        longDescription: "Le site d'un restaurant que j'ai réalisé à mes débuts est un exemple de mon travail. Chaque projet est mis en avant et illustre les progrès que j'ai accomplis en peu de temps.",
        technologies: ["HTML", "CSS", "JavaScript"],
        techType : ["Frontend", "Backend"],
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
        slug: "template-projet",
        shortDescription: "Template d'apprentissage",
        longDescription: "Template d'apprentissage pour mes débuts et la compréhension de mes premiers framework, plus explications",
        technologies: ["HTML", "CSS", "JavaScript"],
        techType : ["Frontend", "Backend"],
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
        slug: "retromonsters",
        title: "RetroMonsters - Jeu de combat",
        shortDescription: "Jeu de carte avec des monstres à stocker",
        longDescription: "Premiers gros projets fullstack, intégration de SQL et de php pour la gestion de données",
        technologies: ["HTML", "CSS", "JavaScript", "Vue", "Laravel"],
        techType : ["Frontend", "Backend"],
        imageUrl: new URL('../assets/img/retromonsters.png', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/laravel-docker-monster-2025-main_final",
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
        slug: "contact-app",
        title: "Application de gestion de contacts",
        technologies: ["HTML", "CSS", "JavaScript", "Vue", "Tailwind CSS", "Pinia"],
        imageUrl: new URL('../assets/img/contact-app.jpg', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/contact_app_template",
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
        slug: "flip-coin-master",
        title: "Flip Coin Master",
        technologies: ["HTML", "CSS", "JavaScript"],
        techType : ["Frontend", "Backend"],
        imageUrl: new URL('../assets/img/contact-app.jpg', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/flip-the-coin-master",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée"
        ],
      },
      {
        id: 8,
        slug: "vault",
        title: "Vault",
        technologies: ["HTML", "CSS", "JavaScript", "MangoDB", "Node.js"],
        techType : ["Frontend", "Backend"],
        shortDescription: "Site Web pour dev et graphiste",
        longDescription: "Appliction Web qui donne beaucoup de ressources pour les développeurs, comme des templates, des images, des icônes, etc. Développée avec Vue.js pour une expérience utilisateur fluide et Tailwind CSS pour un design sur mesure.",
        imageUrl: new URL('../assets/img/vault.png', import.meta.url).href,
        githubLink: "https://github.com/Belgiusfrombe/MyVault",
        demoLink: "https://votre-restaurant.com",
        category: "Web Development",
        features: [
          "Design responsive",
          "Animations fluides",
          "Mode sombre/clair",
          "Performance optimisée",
          "Authentification sécurisée",
          "Gestion des utilisateurs",
          "Stockage sécurisé des données",
        ],
      },
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