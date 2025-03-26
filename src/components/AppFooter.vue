<script>
  import {
    Icon
  } from '@iconify/vue';
  export default {
    components: {
      Icon
    }
  }
</script>

<template>
  <footer class="flex flex-col bg-navpurple pb-12">
  <!-- left -->
  <div class="h-96 flex flex-row items-center justify-center">
    <div class="md:flex h-full w-1/2 hidden">
      <div>
        <a href="">
          <div class="md:flex md:flex-col justify-center pt-32 pl-32 hidden">
            <p class="text-4xl font-black text-maingreen">armano</p>
            <p class="text-4xl font-black text-maingreen pl-10">alexandre</p>
            <p class="text-white pl-4 font-medium" style="transform: translateX(20px);">Développeur Web
              Junior</p>
            <svg width="40" transform="translate(0, -40)" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.35 68.76"
              style="enable-background:new 0 0 70.35 68.76;" xml:space="preserve">
              <g>
                <path class="st0" d="M29.26,37.11h-6.68c-2.75,0-4.98-2.23-4.98-4.98v-6.68c0-2.75,2.23-4.98,4.98-4.98h6.68
		c2.75,0,4.98,2.23,4.98,4.98v6.68C34.24,34.88,32.01,37.11,29.26,37.11z" />
                <path class="st1" d="M41.81,56.57h-6.68c-2.75,0-4.98-2.23-4.98-4.98v-6.68c0-2.75,2.23-4.98,4.98-4.98h6.68
		c2.75,0,4.98,2.23,4.98,4.98v6.68C46.79,54.34,44.56,56.57,41.81,56.57z" />
                <path class="st2" d="M41.81,37.11L41.81,37.11c-2.75,0-4.98-2.23-4.98-4.98v-6.68c0-2.75,2.23-4.98,4.98-4.98h0
		c2.75,0,4.98,2.23,4.98,4.98v6.68C46.79,34.88,44.56,37.11,41.81,37.11z" />
                <path class="st3" d="M22.59,49.89L22.59,49.89c-2.75,0-4.98-2.23-4.98-4.98v0c0-2.75,2.23-4.98,4.98-4.98h0
		c2.75,0,4.98,2.23,4.98,4.98v0C27.57,47.66,25.34,49.89,22.59,49.89z" />
              </g>
            </svg>

          </div>
        </a>
      </div>
    </div>
    <!-- midle -->
    <div class="md:flex h-full md:w-1/4 flex items-center hidden">
      <ul class="flex flex-col gap-2 justify-center animate__animated animate__fadeInUp text-white font-medium">
        <li class="text-maingreen nav-item"><a href="#">Accueil</a></li>
        <li class="nav-item "><a href="/about">A propos</a></li>
        <li class="nav-item"><a href="/project">Projets</a></li>
        <li class="nav-item"><a href="/mes-services">Mes services</a></li>
        <li class="nav-item"><a href="/contact">Contacts</a></li>
      </ul>
    </div>
    <!-- section right -->
    <div class="h-full md:w-1/4 flex items-center">
      <!-- contact section -->
      <ul class="flex flex-col gap-2 justify-center animate__animated animate__fadeInUp text-white font-light gap-6 ">
        <!-- Mail && Mailto -->
        <li>
          <a href="mailto:alexandrearmanocs@outlook.fr">
            <div class="flex flex-row gap-4 hover:underline">
              <Icon icon="mdi:email" class="text-maingreen size-6 text-center justify-center" width="24" height="24" />
              <p class="text-white">alexandrearmanocs@outlook.fr</p>
            </div>
          </a>
        </li>
        <!-- Phone -->
        <li>
          <a href="tel:+32498115790">
            <div class="flex flex-row gap-4 hover:underline">
              <Icon icon="mdi:phone" class="text-maingreen size-6 text-center justify-center" width="24" height="24" />
              <p class="text-white">+32 4 98 11 57 90</p>
            </div>
          </a>
        </li>
        <!-- Adresse -->
        <li>
          <a href="">
            <div class="flex flex-row gap-4 hover:underline">
              <Icon icon="mdi:location" class="  text-maingreen size-6 text-center justify-center" width="24"
                height="24" />
              <p class="text-white">Saint-Nicolas, Liège, 4420</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <ul class="flex justify-center text-white px-10">
      <li class="after-pipe items-center"><a href="/conditions-dutilisation" class="hover:underline">Conditions d'Utilisation</a></li>
      <li><a href="/politique-de-confidentialite" class="hover:underline after-pipe items-center">Politique de Confidentialité</a></li>
      <li><a href="/disclaimer" class="hover:underlin items-center">Disclaimer</a></li>
    </ul>
  </div>

  </footer>
</template>

<style scoped>
  .st0 {
    fill: #0BFF9B;
  }

  .st1 {
    fill: #A9FF22;
  }

  .st2 {
    fill: #1AFFAC;
  }

  .st3 {
    fill: #06FF5F;
  }

  .after-pipe::after {
    content: "|";
    margin-left: 10px;
    margin-right: 10px;
  }

  .nav-item {
  position: relative;
  padding-bottom: 5px;
}

.nav-item a {
  text-decoration: none;
  color: inherit;
}

.nav-item a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #41B883;
  transition: width 0.3s ease-in-out;
}

.nav-item a:hover::after {
  width: 100%;
}

.nav-item a:hover {
  color: #41B883;
}

.animate-link {
  position: relative;
  transition: all 0.3s ease-in-out;
}

.animate-link:hover {
  transform: scale(1.1);
  background-color: #22f898;
  border-color: transparent;
}

.animate-link a {
  transition: color 0.3s ease-in-out;
}

.animate-link:hover a {
  color: #14172b;
}
</style>