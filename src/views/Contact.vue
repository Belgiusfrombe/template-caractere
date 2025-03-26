<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

</script>

<template>
    <!-- Fifth section -->
    <section id="form" class="md:bg-mainpurple bg-white text-mainpurple px-20 py-10 mb-44 pt-64 ">
                <div class="flex flex-col items-center just bg-white rounded-3xl py-12">
                    <form action="https://formspree.io/f/mvgkglkb" method="POST"
                        class="flex flex-col gap-4 md:w-1/2 mt-10 items-center">
                        <!-- Nom et prénom -->
                        <div class="flex md:flex-row flex-col md:justify-between">
                            <!-- Lastname -->
                            <div class="flex flex-col">
                                <p>Nom *</p>
                                <div class="flex flex-row">
                                    <Icon icon="mdi:account" class="text-black mt-3" width="18" height="18" />
                                    <input type="text" name="lastname" id="lastname" placeholder="Doe"
                                        class="p-2 border-b-2 border-slate-800" required>
                                </div>
                            </div>
                            <!-- Firstname -->
                            <div class="flex flex-col">
                                <p>Prénom *</p>
                                <div class="flex flex-row">
                                    <Icon icon="mdi:account" class="text-black mt-3" width="18" height="18" />
                                    <input type="text" name="firstname" id="firstname" placeholder="John"
                                        class="p-2 border-b-2 border-slate-800" required>
                                </div>
                            </div>
                        </div>
                        <!-- Email and Phone -->
                        <div class="flex md:flex-row flex-col justify-between">
                            <!-- Email -->
                            <div class="flex flex-col">
                                <p>Email *</p>
                                <div class="flex flex-row">
                                    <Icon icon="mdi:email" class="text-black mt-3" width="18" height="18" />
                                    <input type="text" name="email" id="email" placeholder="exemple@gmail.com"
                                        class="p-2 border-b-2 border-slate-800" required>
                                </div>
                            </div>
                            <!-- Phone -->
                            <div class="flex flex-col">
                                <p>Phone *</p>
                                <div class="flex flex-row">
                                    <Icon icon="mdi:phone" class="text-black mt-3" width="18" height="18" />
                                    <input type="text" name="phone" id="phone" placeholder="+32 ..."
                                        class="p-2 border-b-2 border-slate-800" required>
                                </div>
                            </div>
                        </div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message.."
                            class="p-2 rounded-xl border border-slate-800 mt-10 md:w-full w-64" required></textarea>
                        <button type="submit"
                            class="bg-maingreen text-white p-2 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">Envoyer</button>
                    </form>
                </div>
            </section>
</template>