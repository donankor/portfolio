<template>
  <div class="cont">
    <Skills />
  </div>
</template>

<script setup>
import Skills from "~/components/Features/Skills.vue";
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding: 10px 0;
  }
}
</style>
