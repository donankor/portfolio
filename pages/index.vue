<template>
  <div class="cont">
    <Contacts/>
    <Education/>
    <Skills/>
    <Experience/>
  </div>
</template>

<script setup>
import Contacts from "~/components/Features/Сontacts.vue";
import Education from "~/components/Features/Education.vue";
import Skills from "~/components/Features/Skills.vue";
import Experience from "~/components/Features/Experience.vue";
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
