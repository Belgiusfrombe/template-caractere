<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="relative min-h-screen w-fit bg-[#0f172a] pt-16 pt-64">
    <div class="relative z-10 flex flex-col md:flex-row h-full px-4 md:mx-48 gap-8 md:gap-20">
      <!-- Partie gauche avec le texte -->
      <div class="flex flex-col w-full md:w-1/3 gap-6 md:gap-10">
        <p class="text-white leading-8 md:leading-10 border-l-2 border-maingreen pl-4 text-sm md:text-base">
          Passionné par l'UI/UX design depuis plusieurs années, je crée des expériences numériques 
          intuitives et esthétiques. Maîtrisant l'ensemble de la suite Adobe ainsi que Figma, 
          je conçois des interfaces qui allient beauté et fonctionnalité.
        </p>
      </div>

      <!-- Partie droite avec la liste -->
      <div class="flex-1 mb-8 md:mb-0">
        <div class="bg-[#1e293b]/50 rounded-xl p-4 md:p-8 w-full md:w-fit">
          <div class="flex flex-col gap-4 md:gap-8">
            <!-- Figma -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:figma" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Figma</span>
                <span class="text-white/60 text-xs md:text-sm">Design systems, prototypage et collaboration</span>
              </div>
            </div>

            <!-- Photoshop -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:adobe-photoshop" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Adobe Photoshop</span>
                <span class="text-white/60 text-xs md:text-sm">Retouche photo et création graphique</span>
              </div>
            </div>

            <!-- Illustrator -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:adobe-illustrator" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Adobe Illustrator</span>
                <span class="text-white/60 text-xs md:text-sm">Design vectoriel et identité visuelle</span>
              </div>
            </div>

            <!-- InDesign -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:adobe-indesign" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Adobe InDesign</span>
                <span class="text-white/60 text-xs md:text-sm">Mise en page et édition professionnelle</span>
              </div>
            </div>

            <!-- After Effects -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:adobe-after-effects" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Adobe After Effects</span>
                <span class="text-white/60 text-xs md:text-sm">Animation et effets visuels</span>
              </div>
            </div>

            <!-- Premiere Pro -->
            <div class="flex items-center gap-4 md:gap-6 group hover:bg-[#1e293b] p-3 md:p-4 rounded-lg transition-all duration-300">
              <Icon 
                icon="logos:adobe-premiere" 
                class="text-2xl md:text-4xl group-hover:scale-110 transition-transform" 
              />
              <div class="flex flex-col">
                <span class="text-white font-semibold text-sm md:text-base">Adobe Premiere Pro</span>
                <span class="text-white/60 text-xs md:text-sm">Montage vidéo professionnel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .text-maingreen {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Ajout de styles pour le touch sur mobile */
@media (max-width: 768px) {
  .group:active {
    background-color: #1e293b;
  }
  
  .group:active .text-maingreen,
  .group:active Icon {
    transform: scale(1.1);
  }
}
</style>
