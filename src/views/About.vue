<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};

</script>

<template>
    <section id="about" class="flex px-10 md:flex-row flex-col mx-auto md:mb-40">
                <div class="md:w-1/2 flex flex-col justify-center pb-20">
                    <h2 class="text-maingreen text-4xl font-black pb-4">A propos</h2>
                    <p class="text-white leading-8 mr-4 border-l-4 border-maingreen pl-4 rounded-sm">Bonjour, je
                        m'appelle Alexandre et je suis un
                        développeur
                        web
                        junior
                        passionné. Actuellement étudiant, je me consacre à approfondir mes compétences dans le
                        développement
                        web. Je maîtrise les langages <b>PHP, JavaScript, HTML et CSS</b>, et j'aime explorer et
                        travailler
                        avec
                        une variété de frameworks pour enrichir mes projets. Curieux et motivé, je suis toujours à la
                        recherche de nouvelles opportunités pour apprendre et mettre en pratique mes connaissances afin
                        de
                        devenir un expert dans mon domaine.</p>
                </div>
                <div class="md:w-1/2 flex items-center justify-center">
                    <ul class="flex flex-col gap-4 animate__animated animate__fadeIn">
                        <div class="flex flex-row">
                            <li><a href="">
                                    <Icon icon="mdi:vuejs" class="text-white hover:text-vuegreen" width="72"
                                        height="72" />
                                </a></li>
                            <li><a href="">
                                    <Icon icon="mdi:laravel" class="text-white hover:text-laravelred" width="72"
                                        height="72" /></a></li>
                            <li><a href="">
                                    <Icon icon="mdi:wordpress" class="text-white hover:text-wordpressblue" width="72"
                                        height="72" /></a></li>
                            <li><a href="">
                                    <Icon icon="mdi:powershell" class="text-white hover:text-powershellblue" width="72"
                                        height="72" /></a></li>
                        </div>
                        <div class="flex flex-row">
                            <li><a href="">
                                    <Icon icon="mdi:language-html5" class="text-white hover:text-htmlblue" width="72"
                                        height="72" /></a></li>
                            <li><a href="">
                                    <Icon icon="mdi:language-php" class="text-white hover:text-phpblue" width="72"
                                        height="72" /></a></li>
                            <li><a href="">
                                    <Icon icon="mdi:language-css3" class="text-white hover:text-cssorange" width="72"
                                        height="72" /></a></li>
                            <li><a href="">
                                    <Icon icon="mdi:language-javascript" class="text-white hover:text-jsyellow"
                                        width="72" height="72" /></a></li>
                        </div>
                    </ul>
                </div>
            </section>
</template>