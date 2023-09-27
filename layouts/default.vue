<template>
  <div class="bg" />
  <div class="cont" >
    <Header/>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Header from "~/components/Layout/Header.vue";
  import {indexStore} from "~/store";
  const store = indexStore();

  onMounted(() => {
    store.set(['mobile', window.innerWidth < 768])

    window.onresize = () => store.set(['mobile', window.innerWidth < 768])
  })
</script>

<style lang="scss" scoped>
  .cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0;
    }
  }
    .body{
      width: 90%;

      margin: 20px 0;
      background: #F4F4F6;

      border-radius: 20px;
      @media (min-width: 1920px) {
        max-width: 1700px;
      }
    }
</style>
