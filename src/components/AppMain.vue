<script>
import { Icon } from "@iconify/vue";
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

export default {
  components: {
    Icon,
  },
  setup() {
    const store = useProjectStore();
    const { projects } = storeToRefs(store);

    return {
      projects,
    };
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    windowScrollToId(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
    setupScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "animate__animated",
                entry.target.dataset.animation
              );
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      // Sélectionner tous les éléments avec data-animation
      document.querySelectorAll("[data-animation]").forEach((element) => {
        observer.observe(element);
      });
    },
  },
};
document.addEventListener("DOMContentLoaded", () => {
  function typewriterEffect(selector, text, typingSpeed = 100, delay = 2000) {
    const element = document.querySelector(selector);
    let index = 0;
    let isErasing = false;
    // Fonction pour gérer l'effet de frappe et d'effacement
    function type() {
      if (!isErasing) {
        // Ajoute les caractères un par un
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, typingSpeed);
        } else {
          // Attendre avant de commencer l'effacement
          isErasing = true;
          setTimeout(type, delay);
        }
      } else {
        // Efface les caractères un par un
        if (index > 0) {
          element.textContent = text.substring(0, index - 1);
          index--;
          setTimeout(type, typingSpeed);
        } else {
          // Attendre avant de recommencer la frappe
          isErasing = false;
          setTimeout(type, delay);
        }
      }
    }
    // Initialiser l'animation
    element.textContent = ""; // Réinitialise le texte
    type();
  }
  // Appliquer l'effet machine à écrire en boucle
  const text = "Armano Alexandre";
  typewriterEffect("#text", text, 150, 1000); // 150ms pour écrire/effacer chaque caractère, 2000ms d'attente entre les cycles
});
</script>

<template>
  <main>
    <!-- First section -->
    <section class="relative h-screen w-full">
      <!-- Background Image -->
      <div class="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/img/bg-test2.jpg"
          alt="Background"
          class="w-full h-full object-cover transition-opacity duration-2000 animate-fade-alternate"
        />
        <img
          src="/src/assets/img/bg-test.jpg"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 animate-fade"
        />
        <!-- Overlay pour assombrir légèrement l'image -->
        <div class="absolute inset-0 bg-black/30"></div>
        <!-- Gradient filter -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-red-500/20"
        ></div>
        <!-- Nouveau dégradé vers le bas -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]"
        ></div>
      </div>

      <!-- Contenu de la section -->
      <div class="relative z-10 h-full flex flex-col md:flex-row items-center md:ml-48 gap-4 px-4 md:px-0">
        <!-- Photo -->
        <div class="md:absolute md:left-16 mt-20 md:mt-0" data-animation="animate__fadeInLeft">
          <div class="gradient-border-rotating w-64 h-64 md:w-96 md:h-96 rounded-full p-1">
            <div
              class="w-full h-full rounded-full overflow-hidden bg-[#0f172a]"
            >
              <img
                src="/src/assets/img/moi.png"
                alt="Photo de profil"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Texte -->
        <div class="text-center md:text-left mt-8 md:mt-0">
          <p
            class="text-2xl md:text-4xl font-black text-white mb-2"
            data-animation="animate__fadeInUp"
          >
            Je suis
          </p>
          <div
            class="md:text-right text-white md:mr-16"
            data-animation="animate__fadeInRight"
          >
            <p
              class="text-3xl md:text-6xl font-black gradient-text md:pb-4 md:h-16"
              id="text"
            >
              Armano Alexandre
            </p>
          </div>
        </div>

        <!-- Liste de réseaux sociaux -->
        <ul
          class="flex md:flex-col gap-6 mt-8 md:mt-0 md:absolute md:right-16"
          data-animation="animate__fadeInRight"
        >
          <li>
            <a
              href="https://github.com/votre-username"
              target="_blank"
              class="text-white hover:text-maingreen transition-all transform hover:scale-150 duration-300 inline-block"
            >
              <Icon icon="mdi:github" width="32" height="32" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/votre-username"
              target="_blank"
              class="text-white hover:text-maingreen transition-all transform hover:scale-150 duration-300 inline-block"
            >
              <Icon icon="mdi:codepen" width="32" height="32" />
            </a>
          </li>
          <li>
            <a
              href="https://linktr.ee/votre-username"
              target="_blank"
              class="text-white hover:text-maingreen transition-all transform hover:scale-150 duration-300 inline-block"
            >
              <Icon icon="simple-icons:linktree" width="32" height="32" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexandre-armano-cs/"
              target="_blank"
              class="text-white hover:text-maingreen transition-all transform hover:scale-150 duration-300 inline-block"
            >
              <Icon icon="mdi:linkedin" width="32" height="32" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Second section -->
    <section class="relative min-h-screen w-full bg-[#0f172a]">
      <div class="relative z-10 flex flex-col md:flex-row h-full py-16 md:py-32 px-4 md:mx-48 gap-10 md:gap-20">
        <!-- Partie gauche -->
        <div class="flex flex-col w-full md:w-1/3 gap-10">
          <h2 class="text-4xl md:text-6xl font-bold animate-fade-in gradient-text text-center md:text-left">
            Mon Portfolio
          </h2>
          <p class="text-white leading-8 md:leading-10 border-l-2 border-maingreen pl-4">
            Située aux abords de Liège, depuis 2007, l'agence Caractère agit en
            tant que véritable partenaire de votre communication et vous aide à
            atteindre vos objectifs. Nous combinons créativité, expertise,
            professionnalisme et innovation pour donner vie à des projets
            extraordinaires !
          </p>
        </div>

        <!-- Partie droite -->
        <div class="w-full md:w-2/3 flex flex-col">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <router-link
              v-for="project in projects.slice(0, 2)"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="group"
            >
              <div
                class="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  :src="project.imageUrl"
                  :alt="project.title"
                  class="w-full h-40 object-cover"
                />
                <div class="p-4">
                  <h3
                    class="text-lg font-bold text-white group-hover:text-maingreen transition-colors"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-300 text-sm mt-2 line-clamp-2">
                    {{ project.shortDescription }}
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span
                      v-for="tech in project.technologies.slice(0, 3)"
                      :key="tech"
                      class="px-2 py-1 bg-[#0f172a] text-xs text-maingreen rounded"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div class="flex justify-center mt-10">
            <router-link
              to="/project"
              class="text-maingreen hover-underline-animation inline-block text-lg"
            >
              Voir tous mes projets
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Third section -->
    <section class="relative min-h-screen w-full bg-white overflow-hidden">
      <!-- Texte défilant -->
      <div class="absolute whitespace-nowrap animate-scroll hidden md:block">
        <div class="inline-block">
          <span class="text-[150px] font-bold text-mainpurple tracking-wider">
            MES SERVICES • MES SERVICES • MES SERVICES • MES SERVICES • MES
            SERVICES •
          </span>
        </div>
      </div>

      <!-- Version mobile du titre -->
      <div class="text-4xl font-bold text-black/10 text-center pt-16 md:hidden">
        MES SERVICES
      </div>

      <!-- Contenu services -->
      <div class="relative z-10 flex flex-col h-full py-16 md:py-64 gap-10 px-4 md:px-0">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:mx-96 mb-10 md:mb-0 flex flex-col items-center gap-4 pb-10">
            <h2 class="text-2xl md:text-4xl font-light text-center px-4 md:px-10">
              Une offre de site dynamique basée sur des compétences acquises
              pendant ma formation.
            </h2>
            <a href="/contact">
              <p
                class="text-slate-800 hover:text-maingreen hover:border bg-maingreen hover:bg-transparent rounded-xl w-48 text-center mx-20 text-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Me contacter
              </p>
            </a>
          </div>
        </div>

        <!-- Cards services -->
        <div class="w-full flex flex-col md:flex-row gap-6 md:gap-4 px-4 md:px-10">
          <article
            class="bg-white transition-all ease-in-out delay-100 hover:bg-maingreen rounded-xl text-slate-800 hover:text-slate-950 p-4 md:p-8 hover:scale-105"
          >
            <router-link to="/uiux">
              <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-4 items-center">
                  <Icon
                    icon="mdi:aroma"
                    class="hover:text-maingreen bg-slate-800 rounded-full text-white size-6 text-center justify-center"
                    width="24"
                    height="24"
                  />
                  <h3 class="text-4xl font-bold">Web Design UI/UX</h3>
                </div>
                <p class="pl-10">
                  Je maîtrise le Design <strong>UI/UX</strong>, créant des
                  interfaces intuitives et esthétiques. Mon objectif est
                  d'améliorer l'expérience utilisateur grâce à des designs
                  fonctionnels et modernes, en utilisant des outils comme
                  <strong>Figma</strong> et <strong>Adobe XD</strong>.
                </p>
              </div>
            </router-link>
          </article>
          <article
            class="bg-white transition-all ease-in-out delay-100 hover:bg-maingreen rounded-xl text-slate-800 hover:text-slate-950 p-4 md:p-8 hover:scale-105"
          >
            <router-link to="/dev">
              <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-4 items-center">
                  <Icon
                    icon="mdi:web"
                    class="hover:text-maingreen bg-slate-800 rounded-full text-white size-6 text-center justify-center"
                    width="24"
                    height="24"
                  />
                  <h3 class="text-4xl font-bold">Développement Web</h3>
                </div>
                <p class="pl-10">
                  Je suis compétent en développement web, maîtrisant les langages
                  PHP, JavaScript, HTML et CSS. J'utilise des frameworks comme
                  PHP, JavaScript, HTML et CSS. J'utilise des frameworks modernes
                  tels que Laravel et Vue.js pour créer des applications web
                  dynamiques et performantes.
                </p>
              </div>
            </router-link>
          </article>
          <article
            class="bg-white transition-all ease-in-out delay-100 hover:bg-maingreen rounded-xl text-slate-800 hover:text-slate-950 p-4 md:p-8 hover:scale-105"
          >
            <router-link to="/design">
              <div class="flex flex-col gap-4">
                <div class="flex flex-row gap-4 items-center">
                  <Icon
                    icon="mdi:draw"
                    class="hover:text-maingreen bg-slate-800 rounded-full text-white size-6 text-center justify-center"
                    width="24"
                    height="24"
                  />
                  <h3 class="text-4xl font-bold">Design Graphique</h3>
                </div>
                <p class="pl-10">
                  Je possède des compétences en design graphique, créant des
                  visuels attractifs et professionnels. J'utilise des outils comme
                  Photoshop et Illustrator pour concevoir des logos, des supports
                  visuels et des interfaces percutantes.
                </p>
              </div>
            </router-link>
          </article>
        </div>
        <div class="flex justify-center my-5 scrollby">
          <a href="#">
            <i
              class="hover:text-lime-400 size-12"
              data-feather="chevrons-down"
            ></i>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hover-underline-animation {
  position: relative;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

[data-animation] {
  opacity: 0;
}

.animate__animated {
  --animate-duration: 1s;
  --animate-delay: 0.2s;
}

@keyframes fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fadeAlternate {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-fade {
  animation: fade 10s infinite;
}

.animate-fade-alternate {
  animation: fadeAlternate 10s infinite;
}

.gradient-text {
  background: linear-gradient(
    300deg,
    #0ecff6,
    #f2f2f2,
    #2df3ec,
    #22f898,
    #13cef8
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
  -webkit-mask-image: linear-gradient(to right, black 20%, black 80%);
  mask-image: linear-gradient(to right, black 20%, black 80%);
}

.gradient-border-rotating {
  position: relative;
  background: linear-gradient(
    300deg,
    #0ecff6,
    #f2f2f2,
    #2df3ec,
    #22f898,
    #ea10a5
  );
  background-size: 400% 400%;
  animation: gradient-rotate 3s ease infinite;
  padding: 3px;
}

.gradient-border-rotating::before {
  content: "";
  position: absolute;
  inset: -3px;
  z-index: -1;
  background: inherit;
  border-radius: inherit;
}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 768px) {
  .gradient-text {
    background-size: 200% 200%;
  }

  .animate-scroll {
    animation: none;
  }
}
</style>
