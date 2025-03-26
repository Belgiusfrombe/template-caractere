<script>
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

export default {
  name: "ProjectView",
  setup() {
    const store = useProjectStore();
    const { projects } = storeToRefs(store); // Utilisation de storeToRefs pour garder la réactivité

    return {
      projects,
    };
  },
};
</script>

<template>
  <div class="project-page min-h-screen bg-[#0f172a] p-8">
    <h1 class="text-4xl font-bold text-white mb-10 pt-48">Mes différents travaux</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link 
        v-for="project in projects" 
        :key="project.id"
        :to="{ name: 'project-detail', params: { id: project.id }}"
        class="group hover:scale-105 transition-all duration-300"
      >
        <div class="project-card bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
          <img 
            :src="project.imageUrl" 
            :alt="project.title" 
            class="w-full h-48 object-cover"
          />
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-maingreen transition-colors">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.shortDescription }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-1 bg-[#0f172a] text-sm text-maingreen rounded"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="flex gap-3">
              <a 
                :href="project.githubLink" 
                target="_blank" 
                class="text-maingreen hover-underline-animation"
                @click.stop
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.project-page {
  min-height: 100vh;
  padding: 2rem;
  background-color: #0f172a;
}

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

.project-card {
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
}
</style>
