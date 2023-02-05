<template>
  <div class="btn" >
    <nuxt-link :to="to">
      <slot/>
    </nuxt-link>
    <img class="img" src="/icons/arrow.svg" alt="arrow">
  </div>
</template>

<script setup >

const props = defineProps({
  to: {
    type: String,
    default: undefined,
  }
})

</script>

<style lang="scss" scoped>
  .btn {
    display: flex;

    font-size: 26px;
    font-weight: 300;

    cursor: pointer;
    .img {
      width: 15px;
      margin-left: 10px;
      transition: 200ms ease-in-out;
    }

    &:hover {
      img {
        transform: translateX(10px);
      }
    };
  }
</style>