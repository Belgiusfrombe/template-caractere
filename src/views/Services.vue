<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="relative w-full bg-mainpurple py-16 md:py-32">
    <!-- Header avec texte défilant -->
    <div class="absolute whitespace-nowrap animate-scroll">
      <div class="inline-block">
        <span class="text-[150px] font-bold text-maingreen/10 tracking-wider">
          MES SERVICES • MES SERVICES • MES SERVICES • MES SERVICES • MES SERVICES •
        </span>
      </div>
    </div>

    <div class="container mx-auto px-4 md:px-8 relative z-10 mt-32">
      <!-- Introduction -->
      <div class="text-center mb-16">
        <p class="text-maingreen text-lg md:text-xl max-w-3xl mx-auto">
          Une offre complète de services numériques, du design au développement,
          pour donner vie à vos projets web.
        </p>
      </div>

      <!-- Grille de services -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <!-- UI/UX Design -->
        <article class="bg-[#0f172a] rounded-xl p-8 hover:scale-105 transition-all duration-300">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <Icon
                icon="mdi:palette"
                class="text-maingreen bg-white/10 rounded-full p-2 size-12"
                width="32"
                height="32"
              />
              <h3 class="text-2xl md:text-3xl font-bold text-white">UI/UX Design</h3>
            </div>
            <p class="text-white/60">
              Je crée des interfaces intuitives et esthétiques, en me concentrant sur
              l'expérience utilisateur et l'accessibilité. Utilisation experte de Figma
              et de la suite Adobe.
            </p>
          </div>
        </article>

        <!-- Développement Web -->
        <article class="bg-[#0f172a] rounded-xl p-8 hover:scale-105 transition-all duration-300">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <Icon
                icon="mdi:code-tags"
                class="text-maingreen bg-white/10 rounded-full p-2 size-12"
                width="32"
                height="32"
              />
              <h3 class="text-2xl md:text-3xl font-bold text-white">Développement</h3>
            </div>
            <p class="text-white/60">
              Développement de sites web et d'applications performants avec Vue.js,
              Laravel, et les dernières technologies web pour des solutions modernes
              et évolutives.
            </p>
          </div>
        </article>

        <!-- Design Graphique -->
        <article class="bg-[#0f172a] rounded-xl p-8 hover:scale-105 transition-all duration-300">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <Icon
                icon="mdi:draw"
                class="text-maingreen bg-white/10 rounded-full p-2 size-12"
                width="32"
                height="32"
              />
              <h3 class="text-2xl md:text-3xl font-bold text-white">Design Graphique</h3>
            </div>
            <p class="text-white/60">
              Création d'identités visuelles, logos, et supports marketing avec
              la suite Adobe Creative. Un design qui raconte votre histoire.
            </p>
          </div>
        </article>
      </div>

      <!-- Section Technologies -->
      <div class="mt-20">
        <h2 class="text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-12">
          Technologies Utilisées
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:vue" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Vue.js</span>
          </div>
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:laravel" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Laravel</span>
          </div>
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:figma" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Figma</span>
          </div>
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:adobe-photoshop" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Photoshop</span>
          </div>
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:adobe-illustrator" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Illustrator</span>
          </div>
          <div class="flex flex-col items-center group">
            <Icon 
              icon="logos:tailwindcss-icon" 
              class="text-4xl md:text-5xl group-hover:scale-110 transition-transform" 
            />
            <span class="text-[#0f172a] mt-2">Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-scroll span {
    font-size: 4rem;
  }
}
</style>