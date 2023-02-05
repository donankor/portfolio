<template>
<div class="head" >
  <div class="info-bar" >
    <img v-if="!store.mobile" class="avatar" src="/avatar.png" alt="avatar">
    <div class="info" >
      <h6 style="margin-bottom: 10px" >Андрей Королёв</h6>
      <p style="margin-bottom: 10px" class="point tt-u" >Front-End developer</p>
      <p style="margin-bottom: 10px">Мужчина, 24 года, детей нет. <br/> Не состою в браке</p>
      <p style="width: 70px" class="point" >900 $</p>
    </div>
  </div>

  <div v-if="!store.mobile" class="btn-cont" >
    <Button v-if="$route.name !== 'projects'" to="/projects" > К проектам </Button>
    <Button v-else to="/info" > Информация </Button>
  </div>
</div>
  <div style="margin-top: 10px; display: flex; align-items: flex-end" v-if="store.mobile" >
    <Button v-if="$route.name !== 'projects'" to="/projects" > К проектам </Button>
    <Button v-else to="/" > Информация </Button>
  </div>
</template>

<script setup >
import Button from "~/components/Atoms/Button.vue";
import {indexStore} from "~/store";

const store = indexStore()
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  background: #F4F4F6;

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-radius: 100px 20px 20px 100px;

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  padding: 10px 0;
  @media (min-width: 1920px) {
    max-width: 1800px;
  }

  .info-bar{
    display: flex;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .avatar {
    width: 150px;
    margin-right: 50px;
  }
  .info {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .btn-cont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>