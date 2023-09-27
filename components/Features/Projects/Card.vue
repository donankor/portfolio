<template>
  <div
    class="card no-select"
    :style="`background-image: url('/projects/${item.name}/bg.png')`"
  >
    <div class="info">
      <img
        v-if="!store.mobile"
        alt="icon"
        :src="`/projects/${item.name}/image.png`"
      />

      <div class="banner">
        <img alt="icon" :src="`/projects/${item.name}/logo.png`" />
        <p
          class="tt-u"
          style="
            color: white;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
          "
        >
          {{ item.title }}
        </p>
        <p
          style="
            color: white;
            margin-bottom: 20px;
            text-align: center;
            line-height: 20px;
          "
        >
          {{ item.text }}
        </p>

        <a
          target="_blank"
          :href="item.link"
          style="cursor: pointer"
          class="point"
          >Перейти на сайт проекта</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { indexStore } from "~/store";

const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const store = indexStore();
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 15px;

  @media (min-width: 1300px) {
    background-repeat: round;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;

    @media (max-width: 768px) {
      justify-content: center;
    }
    .banner {
      max-width: 350px;
      margin: 20px 0;
      padding: 10px;

      display: flex;
      flex-direction: column;

      align-items: center;
      background: rgba(0, 0, 0, 0.4);

      border: 2px solid rgba(255, 255, 255, 0.6);

      border-radius: 15px;
    }
  }
}
</style>
