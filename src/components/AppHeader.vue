<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<template>
  <header class="header animate__animated animate__fadeInDown">
    <div class="header__container">
      <div>
        <a href="/">
          <div>
            <p class="text-4xl font-black hide-on-scroll text-white">armano</p>
            <p class="text-4xl font-black pl-10 hide-on-scroll text-white">alexandre</p>
            <p
              class="text-lime-300 pl-4 font-medium hide-on-scroll"
              style="transform: translateX(20px)"
            >
              Développeur Web Junior
            </p>
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

      <!-- Burger button for large screens -->
      <button
        class="header__burger"
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Fullscreen menu -->
      <div class="header__menu" :class="{ 'is-open': isMenuOpen }">
        <nav class="header__nav">
          <ul>
            <li><router-link @click="closeMenu" to="/">Accueil</router-link></li>
            <li><router-link @click="closeMenu" to="/project">Mes projets</router-link></li>
            <li><router-link @click="closeMenu" to="/about">À propos</router-link></li>
            <li><router-link @click="closeMenu" to="/services">Services</router-link></li>
            <li><router-link @click="closeMenu" to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
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
  
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header__container {
  margin: 2rem 4rem 0 4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.header__burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  z-index: 1001;
}

.header__burger span {
  display: block;
  width: 35px;
  height: 4px;
  background: #fdfdfd;
  margin: 7px 0;
  transition: 0.3s;
}

.header__menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1000;
  padding: 0 0 4rem 4rem;
}

.header__menu.is-open {
  opacity: 1;
  visibility: visible;
}

.header__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.header__nav li {
  margin: 1.5rem 0;
  opacity: 0;
  transform: translateY(20px);
  transition: 0.3s;
}

.header__menu.is-open .header__nav li {
  opacity: 1;
  transform: translateY(0);
}

.header__menu.is-open .header__nav li:hover {
  border-bottom: 4px solid #FA1465;
}

.header__nav li:nth-child(1) { transition-delay: 0.1s; }
.header__nav li:nth-child(2) { transition-delay: 0.2s; }
.header__nav li:nth-child(3) { transition-delay: 0.3s; }
.header__nav li:nth-child(4) { transition-delay: 0.4s; }

.header__nav a {
  font-size: 2.5rem;
  text-decoration: none;
  color: #333;
  transition: 0.3s;
  font-weight: 500;
}

.header__nav a:hover {
  color: #666;
}

/* Burger button animation */
.header__burger.is-active span {
  background: #FA1465;
}
.header__burger:hover span {
  background: #22f898;
}

.header__burger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.header__burger.is-active span:nth-child(2) {
  opacity: 0;
}

.header__burger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

@media (min-width: 768px) {
  .header__burger {
    display: block;
  }
}
</style>
