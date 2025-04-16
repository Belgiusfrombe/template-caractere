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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
        category: "Web",
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
      {
        id: 9,
        title: "My Shoes",
        slug: "affiche-my-shoes",
        shortDescription: "Affiche événementielle pour un festival de jazz local",
        longDescription: "Création d'une affiche A2 pour un festival de musique. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/affiche_pdf_page-0001.jpg', import.meta.url).href,
        client: "Festival Jazz Liège",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
        ]
      },
      {
        id: 10,
        title: "Affiche Andy Warhol",
        slug: "affiche-andy-warhol",
        shortDescription: "Création de l'identité visuelle complète d'un coffee shop",
        longDescription: "Développement d’un logo, charte graphique, menu et packaging pour CoffeeTime. Projet centré sur un univers doux et chaleureux, à destination d’un public urbain.",
        tools: ["Illustrator", "InDesign"],
        formats: ["Logo", "Print", "Packaging", "Web"],
        imageUrl: new URL('../assets/img/affiche_pdf_page-0002.jpg', import.meta.url).href,
        client: "CoffeeTime",
        category: "Graphisme",
        features: [
          "Logo vectoriel",
          "Palette couleur personnalisée",
          "Typographie sur-mesure"
        ]
      },
      {
        id: 11,
        title: "Affiche RetrOldschool",
        slug: "affiche-retro",
        shortDescription: "Pack d’illustrations vectorielles inspirées des années 80",
        longDescription: "Création de 10 illustrations en flat design sur le thème du rétro gaming. Palette néon, style pixel art modernisé.",
        tools: ["Illustrator"],
        formats: ["Web", "Vector", "Poster"],
        imageUrl: new URL('../assets/img/affiche_pdf_page-0003.png', import.meta.url).href,
        client: null,
        category: "Graphisme",
        features: [
          "Vectoriel pur",
          "Palette rétro",
          "Utilisable en impression"
        ]
      },
      {
        id: 12,
        title: "Affiche WWW",
        shortDescription: "Design UI/UX d'une application mobile de finance",
        longDescription: "Création d’un design moderne et fonctionnel pour une application de gestion de budget personnel. Adapté pour smartphone et tablette.",
        tools: ["Figma", "Photoshop"],
        formats: ["UI Design", "Mobile"],
        imageUrl: new URL('../assets/img/affiche_pdf_page-0004.png', import.meta.url).href,
        client: "Projet fictif",
        category: "Graphisme",
        features: [
          "Design responsive",
          "Couleurs modernes",
          "Icônes personnalisées"
        ]
      },
      {
        id: 13,
        title: "Animax",
        slug: "animax",
        shortDescription: "Design UI/UX d'une application mobile de finance",
        longDescription: "Création d’un design moderne et fonctionnel pour une application de gestion de budget personnel. Adapté pour smartphone et tablette.",
        tools: ["Figma", "Photoshop"],
        formats: ["UI Design", "Mobile"],
        imageUrl: new URL('../assets/img/animax/animax_final_page-0001.jpg', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/animax/animax_final_page-0002.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0003.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0004.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0005.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0006.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0007.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0008.jpg', import.meta.url).href,
          new URL('../assets/img/animax/animax_final_page-0009.png', import.meta.url).href,
          new URL('../assets/img/animax/mockup1.png', import.meta.url).href,
          new URL('../assets/img/animax/mockup2.png', import.meta.url).href,
          new URL('../assets/img/animax/mockup3.png', import.meta.url).href,
        ],
        client: "Projet fictif",
        category: "Graphisme",
        features: [
          "Design responsive",
          "Couleurs modernes",
          "Icônes personnalisées"
        ]
      },
      {
        id: 14,
        title: "Liège Bulldogs - Logo Retouche",
        slug: "bulldogs",
        shortDescription: "Design UI/UX d'une application mobile de finance",
        longDescription: "Création d’un design moderne et fonctionnel pour une application de gestion de budget personnel. Adapté pour smartphone et tablette.",
        tools: ["Figma", "Photoshop"],
        formats: ["UI Design", "Mobile"],
        imageUrl: new URL('../assets/img/bulldogs/bulldogs01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/bulldogs/bulldogs01.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs02.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs03.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs04.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs05.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs06.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs07.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs08.png', import.meta.url).href,
          new URL('../assets/img/bulldogs/bulldogs09.png', import.meta.url).href,
        ],
        client: "Projet fictif",
        category: "Graphisme",
        features: [
          "Design responsive",
          "Couleurs modernes",
          "Icônes personnalisées"
        ]
      },
      {
        id: 15,
        title: "Cartes postales",
        slug: "cartes-postales",
        shortDescription: "Design UI/UX d'une application mobile de finance",
        longDescription: "Création d’un design moderne et fonctionnel pour une application de gestion de budget personnel. Adapté pour smartphone et tablette.",
        tools: ["Figma", "Photoshop"],
        formats: ["UI Design", "Mobile"],
        imageUrl: new URL('../assets/img/cartes/carte34.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/cartes/carte2.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte3.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte4.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte5.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte6.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte7.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte8.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte9.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte10.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte11.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte12.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte13.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte14.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte15.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte16.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte17.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte18.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte19.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte20.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte21.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte22.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte23.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte24.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte25.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte26.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte27.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte28.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte29.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte30.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte31.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte32.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte33.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte34.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte35.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte36.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte37.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte38.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte39.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte40.png', import.meta.url).href,
          new URL('../assets/img/cartes/carte41.png', import.meta.url).href,
        ],
        client: "Projet fictif",
        category: "Graphisme",
        features: [
          "Design responsive",
          "Couleurs modernes",
          "Icônes personnalisées"
        ]
      },
      {
        id: 16,
        title: "Cuistax 2023 - Logo + Merch",
        slug: "cuistax-2023",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/cuistax/cuistax23.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/cuistax/cuistax-01.png', import.meta.url).href,
          new URL('../assets/img/cuistax/cuistax-02.png', import.meta.url).href,
          new URL('../assets/img/cuistax/cuistax-03.png', import.meta.url).href,
          new URL('../assets/img/cuistax/cuistax-04.png', import.meta.url).href,
          new URL('../assets/img/cuistax/cuistax-05.png', import.meta.url).href,
        ],
        client: "Concert Jazz Liège",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
        ]
      },
      {
        id: 17,
        title: "Noir Charbon - Quelle nouvelle, citoyen ?",
        slug: "affiche-jazz",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/carnet/CARNET-02.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/carnet/CARNET-01.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-02.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-03.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-04.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-05.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-06.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-07.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-08.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-09.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-10.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-11.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-12.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-13.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-14.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-15.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-16.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-17.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-18.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-19.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-20.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-21.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-22.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-23.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-24.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-25.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-26.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-27.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-28.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-29.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-30.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-31.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-32.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-33.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-34.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-35.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-36.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-37.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-38.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-39.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-40.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-41.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-42.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-43.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-44.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-45.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-46.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-47.png', import.meta.url).href,
          new URL('../assets/img/carnet/CARNET-48.png', import.meta.url).href,
        ],
        client: "Concert Jazz Liège",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
        ]
      },
      {
        id: 18,
        title: "Stickers Charabia",
        slug: "stickers-charabia",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/stickerscharabia/charabia1.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/stickerscharabia/charabia2.png', import.meta.url).href,
          new URL('../assets/img/stickerscharabia/charabia3.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 19,
        title: "La Cabane Covid",
        slug: "la-cabane",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/cabane/charte_bis-01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/cabane/charte_bis-02.png', import.meta.url).href,
          new URL('../assets/img/cabane/charte_bis-03.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 20,
        title: "Chaussures",
        slug: "chaussures",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/chaussures/01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/chaussures/02.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 21,
        title: "Forecast - Design Textile",
        slug: "forecast",
        shortDescription: "Marque forecast - Design Textile",
        longDescription: "La marque textile Forecast est un projet fictif qui met en avant des designs modernes et colorés. Chaque pièce est conçue pour apporter une touche de fraîcheur à la mode.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/forecast/Forecast-05.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/forecast/Forecast-02.png', import.meta.url).href,
          new URL('../assets/img/forecast/Forecast-03.png', import.meta.url).href,
          new URL('../assets/img/forecast/Forecast-04.png', import.meta.url).href,
          new URL('../assets/img/forecast/Forecast-05.png', import.meta.url).href,
          new URL('../assets/img/forecast/Forecast-06.png', import.meta.url).href,
        ],
        client: "Forecast",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
        ]
      },
      {
        id: 22,
        title: "Glassposter",
        slug: "glassposter",
        shortDescription: "Affiche événementielle pour un concert de jazz",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/glassposter/glass_poster.png', import.meta.url).href,
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 23,
        title: "Affiches AGEL",
        slug: "affiches-agel",
        shortDescription: "Logo pour un café littéraire",
        longDescription: "Création d'un logo pour un café littéraire. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["Logo", "Print", "Web"],
        imageUrl: new URL('../assets/img/affichesagel/affiche1.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/affichesagel/affiche4.png', import.meta.url).href,
          new URL('../assets/img/affichesagel/affiche5.png', import.meta.url).href,
          new URL('../assets/img/affichesagel/affiche2.png', import.meta.url).href,
          new URL('../assets/img/affichesagel/affiche3.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 24,
        title: "Charte Graphique AGEL",
        slug: "affiches-agel",
        shortDescription: "Logo pour un café littéraire",
        longDescription: "Création d'un logo pour un café littéraire. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["Logo", "Print", "Web"],
        imageUrl: new URL('../assets/img/agel/charte2.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/agel/charte1.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 25,
        title: "Carnet de chant de guindaille",
        slug: "carnet-de-chant",
        shortDescription: "Carnet de chant pour un événement de guindaille",
        longDescription: "Création d'un carnet de chant pour un événement de guindaille. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["Logo", "Print", "Web"],
        imageUrl: new URL('../assets/img/bitu/bitu.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/bitu/bitu2.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu3.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu4.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu5.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu6.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu7.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu8.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu9.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu10.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu11.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu12.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu13.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu14.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu15.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu16.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu17.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu18.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu19.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu20.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu21.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu22.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu23.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu24.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu25.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu26.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu27.png', import.meta.url).href,
          new URL('../assets/img/bitu/bitu28.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 26,
        title: "Pull Saint-Luc",
        slug: "pull-saint-luc",
        shortDescription: "Création des pulls de Saint-Luc",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/stluc/Logo_st_luc-01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/stluc/Logo_st_luc-02.png', import.meta.url).href,
          new URL('../assets/img/stluc/Logo_st_luc-03.png', import.meta.url).href,
          new URL('../assets/img/stluc/Logo_st_luc-04.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 27,
        title: "Bruss Icecream",
        slug: "bruss-icecream",
        shortDescription: "Logo pour un marchand de glaces",
        longDescription: "Création d'un logo pour un marchand de glaces. Le design évoque la convivialité et l'amour des glaces.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/bruss/Bruss-03.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/bruss/Bruss-02.png', import.meta.url).href,
          new URL('../assets/img/bruss/Bruss-01.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 28,
        title: "House Gambling - Logo",
        slug: "house-gambling",
        shortDescription: "logo pour un site de paris",
        longDescription: "Création d'un logo pour un site de paris. Le design évoque le tournant des jeux de hasard.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/fictif/01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/fictif/02.png', import.meta.url).href,
          new URL('../assets/img/fictif/03.png', import.meta.url).href,
        ],
        client: "Charabia",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 29,
        title: "SaintBiose - Banner",
        slug: "saintbiose",
        shortDescription: "Bannière pour un event",
        longDescription: "Création d'une bannière pour un événement. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/fictif/saintbiose.png', import.meta.url).href,
        client: "Cba Saint-Luc",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 30,
        title: "WifiScan - Logo",
        slug: "wifiscan",
        shortDescription: "Logo pour une boite de wifi",
        longDescription: "Création d'un logo pour un événement. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/fictif/wifiscan-01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/fictif/wifiscan-02.png', import.meta.url).href,
        ],
        client: "Cba Saint-Luc",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 31,
        title: "Lyoncaps",
        slug: "lyoncaps",
        shortDescription: "Communcation pour une marque de vetements",
        longDescription: "Création d'un logo pour un événement. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/lyoncaps/lc1.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/lyoncaps/lc2.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc3.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc4.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc5.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc6.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc7.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc8.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc9.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc10.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc11.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc12.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc13.png', import.meta.url).href,
          new URL('../assets/img/lyoncaps/lc14.png', import.meta.url).href,
        ],
        client: "Cba Saint-Luc",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 32,
        title: "Stickers Scouts",
        slug: "stickers-scouts",
        shortDescription: "Stickers pour un événement scout",
        longDescription: "Création de stickers pour un événement scout. Le design évoque la convivialité et l'amour des livres.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/stickersscouts/stickers-01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/stickersscouts/stickers-02.png', import.meta.url).href,
          new URL('../assets/img/stickersscouts/stickers-03.png', import.meta.url).href,
        ],
        client: "Cba Saint-Luc",
        category: "Graphisme",
        features: [
          "Design moderne",
          "Palette de couleurs chaudes",
          "Impression Stickers"
        ]
      },
      {
        id: 33,
        title: "Feaver Dream - Marque de vêtements",
        slug: "feaver-dream",
        shortDescription: "Marque de vetements",
        longDescription: "Création d'une affiche A2 pour un concert de jazz. Travail sur la composition typographique et l’harmonie des couleurs pour évoquer l’ambiance chaleureuse du jazz.",
        tools: ["Photoshop", "Illustrator"],
        formats: ["A2", "Print", "Web"],
        imageUrl: new URL('../assets/img/feaver/01.png', import.meta.url).href,
        imageUrls: [
          new URL('../assets/img/feaver/02.png', import.meta.url).href,
          new URL('../assets/img/feaver/03.png', import.meta.url).href,
          new URL('../assets/img/feaver/04.png', import.meta.url).href,
          new URL('../assets/img/feaver/05.png', import.meta.url).href,
          new URL('../assets/img/feaver/06.png', import.meta.url).href,
          new URL('../assets/img/feaver/07.png', import.meta.url).href,
          new URL('../assets/img/feaver/08.png', import.meta.url).href,
        ],
        client: "Concert Jazz Liège",
        category: "Graphisme",
        features: [
          "Composition typographique",
          "Palette de couleurs chaudes",
          "Impression grand format"
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
    getWebCount: (state) => {
      return state.projects.filter(project => project.category.toLowerCase() === "web").length;
    },
    getGraphCount: (state) => {
      return state.projects.filter(project => project.category.toLowerCase() === "graphisme").length;
    },
    getAllCount : (state) => {
      return state.projects.length;
    },
    getProjectBySlug: (state) => {
      return (slug) => state.projects.find(project => project.slug === slug)
    },
  }
})