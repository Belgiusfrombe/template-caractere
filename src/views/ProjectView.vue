<script>
import { ref, computed } from "vue";
import { useProjectStore } from "@/stores/projectStore";
import { useGraphStore } from "@/stores/graphStore";
import { storeToRefs } from "pinia";

export default {
  name: "ProjectView",
  setup() {
    const selectedType = ref("all"); // 👈 "all", "web", "graph"

    const projectStore = useProjectStore();
    const graphStore = useGraphStore();

    const { projects, getProjectCount } = storeToRefs(projectStore);
    const { projects: graphProjects, getProjectCount: getGraphCount } = storeToRefs(graphStore);

    // 🔍 Computed list of filtered projects
    const filteredProjects = computed(() => {
      if (selectedType.value === "web") return projects.value;
      if (selectedType.value === "graph") return graphProjects.value;
      return [...projects.value, ...graphProjects.value]; // "all"
    });

    return {
      selectedType,
      projects,
      graphProjects,
      getProjectCount,
      getGraphCount,
      filteredProjects,
    };
  },
};
</script>




<template>
  <div class="project-page min-h-screen bg-[#0f172a] p-8">
    <h1 class="text-4xl font-bold text-white pt-48">Mes différents travaux</h1>
    <!-- Span count nombre project  -->
    <h2 class="text-gray-400 text-lg mb-2">
  {{ selectedType === 'web' ? 'Projets Web ' + getProjectCount :
     selectedType === 'graph' ? 'Projets Graphisme ' + getGraphCount :
     'Projets Web ' + getProjectCount + ' | Projets Graphisme ' + getGraphCount }}
</h2>

    <div>
      <ul class="flex flex-row m-12 gap-4">
  <li>
    <a href="#" @click.prevent="selectedType = 'all'"
       class="px-4 py-2 rounded-full"
       :class="selectedType === 'all' ? 'bg-maingreen text-white' : 'bg-white text-black'">
       Tous
    </a>
  </li>
  <li>
    <a href="#" @click.prevent="selectedType = 'graph'"
       class="px-4 py-2 rounded-full"
       :class="selectedType === 'graph' ? 'bg-maingreen text-white' : 'bg-white text-black'">
       Graphisme
    </a>
  </li>
  <li>
    <a href="#" @click.prevent="selectedType = 'web'"
       class="px-4 py-2 rounded-full"
       :class="selectedType === 'web' ? 'bg-maingreen text-white' : 'bg-white text-black'">
       Web
    </a>
  </li>
</ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Link project -->
      <!-- Projets filtrés dynamiquement -->
<router-link v-for="project in filteredProjects" :key="project.id"
  :to="{ name: 'project-detail', params: { id: project.id }}"
  class="group hover:scale-105 transition-all duration-300">
  <div class="project-card bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
    <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover" />

    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-maingreen transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-300 mb-4">{{ project.shortDescription }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in project.technologies || project.tools" :key="tech"
          class="px-2 py-1 bg-[#0f172a] text-sm text-maingreen rounded hover:bg-maingreen hover:text-[#0f172a] transition-all duration-300">
          {{ tech }}
        </span>
      </div>
      <div v-if="project.githubLink" class="flex gap-3">
        <a :href="project.githubLink" target="_blank" class="text-maingreen hover-underline-animation" @click.stop>
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