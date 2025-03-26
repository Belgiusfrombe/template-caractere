<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="relative w-full bg-[#0f172a] py-16 md:py-32">
    <div class="container mx-auto px-4 md:px-8">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">À propos de moi</h1>
        <p class="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Développeur web full-stack et designer UI/UX passionné, je combine créativité et expertise technique 
          pour créer des expériences numériques exceptionnelles.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 md:gap-16">
        <!-- Partie gauche - Photo et présentation -->
        <div class="lg:w-1/3 space-y-8">
          <div class="relative">
            <div class="gradient-border-rotating w-full aspect-square rounded-xl p-1">
              <div class="w-full h-full rounded-xl overflow-hidden bg-[#1e293b]">
                <img
                  src="@/assets/img/moi.png"
                  alt="Photo de profil"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="bg-[#1e293b]/50 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl font-bold text-white mb-4">Alexandre Armano</h2>
            <p class="text-white/80 leading-relaxed mb-6">
              Basé à Liège, je suis spécialisé dans le développement web moderne et le design d'interfaces. 
              Ma passion pour l'innovation et mon attention aux détails me permettent de créer des solutions 
              web performantes et esthétiques.
            </p>
            <div class="flex gap-4">
              <a href="https://github.com/votre-username" target="_blank" 
                class="group flex items-center gap-2 bg-[#0f172a] p-2 rounded-lg hover:bg-maingreen/10 transition-colors">
                <Icon icon="mdi:github" class="text-xl text-white group-hover:text-maingreen transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/alexandre-armano-cs/" target="_blank"
                class="group flex items-center gap-2 bg-[#0f172a] p-2 rounded-lg hover:bg-maingreen/10 transition-colors">
                <Icon icon="mdi:linkedin" class="text-xl text-white group-hover:text-maingreen transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <!-- Partie droite - Compétences -->
        <div class="lg:w-2/3 space-y-8">
          <!-- Section Développement -->
          <div class="bg-[#1e293b]/50 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="mdi:code-tags" class="text-maingreen" />
              Développement Web
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:vue" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Vue.js</span>
                    <span class="text-white/60 text-sm">Framework Front-end</span>
                  </div>
                </div>
              </div>
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:laravel" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Laravel</span>
                    <span class="text-white/60 text-sm">Framework PHP</span>
                  </div>
                </div>
              </div>
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:tailwindcss-icon" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Tailwind</span>
                    <span class="text-white/60 text-sm">Framework CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section Design -->
          <div class="bg-[#1e293b]/50 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="mdi:palette" class="text-maingreen" />
              Design
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:figma" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Figma</span>
                    <span class="text-white/60 text-sm">UI/UX Design</span>
                  </div>
                </div>
              </div>
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:adobe-photoshop" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Photoshop</span>
                    <span class="text-white/60 text-sm">Édition photo</span>
                  </div>
                </div>
              </div>
              <div class="group hover:bg-[#0f172a] p-4 rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                  <Icon icon="logos:adobe-illustrator" class="text-3xl md:text-4xl group-hover:scale-110 transition-transform" />
                  <div class="flex flex-col">
                    <span class="text-white font-semibold">Illustrator</span>
                    <span class="text-white/60 text-sm">Design vectoriel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section Services -->
          <div class="bg-[#1e293b]/50 rounded-xl p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="mdi:star" class="text-maingreen" />
              Services
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <router-link to="/dev" class="hover:bg-maingreen/10 transition-all duration-300 hover:scale-105">
              <div class="bg-[#0f172a] p-6 rounded-lg">
                <Icon icon="mdi:web" class="text-maingreen text-3xl mb-4" />
                <h3 class="text-white text-xl font-semibold mb-2">Développement Web</h3>
                <p class="text-white/60">Création de sites web et applications performants et responsives.</p>
              </div>
            </router-link>
            <router-link to="/uiux" class="hover:bg-maingreen/10 transition-all duration-300 hover:scale-105">
              <div class="bg-[#0f172a] p-6 rounded-lg">
                <Icon icon="mdi:palette" class="text-maingreen text-3xl mb-4" />
                <h3 class="text-white text-xl font-semibold mb-2">UI/UX Design</h3>
                <p class="text-white/60">Design d'interfaces intuitives et expériences utilisateur optimales.</p>
              </div>
            </router-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-border-rotating {
  position: relative;
  background: linear-gradient(300deg, #0ecff6, #f2f2f2, #2df3ec, #22f898, #ea10a5);
  background-size: 400% 400%;
  animation: gradient-rotate 3s ease infinite;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Styles pour mobile */
@media (max-width: 768px) {
  .group:active {
    background-color: #0f172a;
  }
  
  .group:active Icon {
    transform: scale(1.1);
  }
}
</style>