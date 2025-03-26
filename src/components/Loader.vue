<template>
  <div class="loader-container">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.9); /* Couleur de fond adaptée à votre thème */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  display: flex;
  gap: 8px;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #22c55e; /* Votre couleur maingreen */
  animation: bounce 0.5s alternate infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translateY(-20px);
  }
}
</style> 