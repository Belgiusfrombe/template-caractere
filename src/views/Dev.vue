<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="relative w-full bg-[#0f172a] py-16 pt-64">
    <div class="relative z-10 flex flex-col md:flex-row h-full px-4 md:mx-48 gap-8 md:gap-20">
      <!-- Partie gauche avec le texte -->
      <div class="flex flex-col w-full md:w-1/3 gap-6 md:gap-10">
        <p class="text-white leading-8 md:leading-10 border-l-2 border-maingreen pl-4 text-sm md:text-base">
          Passionné par le développement web, je suis capable de créer des sites web dynamiques et performants. Je maîtrise aussi bien le front-end que le back-end, avec une expertise particulière en Vue.js, Laravel et leurs écosystèmes respectifs. Mon approche combine performance, maintenabilité et expérience utilisateur optimale.
        </p>
      </div>

      <!-- Partie droite avec la liste -->
      <div class="flex-1">
        <div class="bg-[#1e293b]/50 rounded-xl p-4 md:p-8 w-full md:w-fit">
          <div class="flex flex-col gap-4 md:gap-8">
            <!-- Front-end Fundamentals -->
            <div class="flex items-center gap-3 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <div class="flex gap-1 md:gap-2 shrink-0">
                <Icon 
                  icon="vscode-icons:file-type-html" 
                  class="text-2xl md:text-4xl text-[#E34F26] group-hover:scale-110 transition-transform" 
                />
                <Icon 
                  icon="vscode-icons:file-type-css" 
                  class="text-2xl md:text-4xl text-[#1572B6] group-hover:scale-110 transition-transform" 
                />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-white font-semibold text-sm md:text-base truncate">HTML5 & CSS3</span>
                <span class="text-white/60 text-xs md:text-sm line-clamp-2">Structure sémantique et styles modernes</span>
              </div>
            </div>

            <!-- Front-end Frameworks -->
            <div class="flex items-center gap-3 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <div class="flex gap-1 md:gap-2 shrink-0">
                <Icon 
                  icon="logos:vue" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
                <Icon 
                  icon="logos:tailwindcss-icon" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-white font-semibold text-sm md:text-base truncate">Vue.js & Tailwind CSS</span>
                <span class="text-white/60 text-xs md:text-sm line-clamp-2">Applications réactives et UI moderne</span>
              </div>
            </div>

            <!-- Back-end Technologies -->
            <div class="flex items-center gap-3 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <div class="flex gap-1 md:gap-2 shrink-0">
                <Icon 
                  icon="logos:php" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
                <Icon 
                  icon="logos:laravel" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-white font-semibold text-sm md:text-base truncate">PHP & Laravel</span>
                <span class="text-white/60 text-xs md:text-sm line-clamp-2">Back-end robuste et Blade templating</span>
              </div>
            </div>

            <!-- JavaScript & jQuery -->
            <div class="flex items-center gap-3 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <div class="flex gap-1 md:gap-2 shrink-0">
                <Icon 
                  icon="logos:javascript" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
                <Icon 
                  icon="logos:jquery" 
                  class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
                />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-white font-semibold text-sm md:text-base truncate">JavaScript & jQuery</span>
                <span class="text-white/60 text-xs md:text-sm line-clamp-2">Interactivité et manipulation du DOM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles pour desktop */
@media (min-width: 768px) {
  .group:hover {
    background-color: #1e293b;
  }
  
  .group:hover Icon {
    transform: scale(1.1);
  }
}

/* Styles pour mobile */
@media (max-width: 767px) {
  .group:active {
    background-color: #1e293b;
  }
  
  .group:active Icon {
    transform: scale(1.1);
  }
}
</style>
