<template>
  <div class="cont" >
    <Card style="margin-bottom: 20px" v-for="card in projects" :item="card" :key="card.name" />
  </div>
</template>

<script setup >
import Card from "~/components/Features/Projects/Card.vue";

const projects = [{
    name: 'tl',
    title: 'Thunder Lands',
    text: 'Торговая площадка, PTY игры (WEB 3, NFT, Crypto)',
    link : 'https://tl.games/'
  },
  {
    name: 'al',
    title: 'Amber League',
    text: 'Новостная страница игрового комьюнити c discord авторизацией',
    link : 'https://amberleague.io/'
},
  {
    name: 'am',
    title: 'AmberSoft',
    text: 'Информационный сайт IT Компании с уклоном в WEB 3',
    link : 'https://www.ambersoft.llc/'
},
  {
    name: 'tg',
    title: 'RPG Game',
    text: 'Проект-испытание. Игра в жанре RPG. Боевая система, инвентарь',
    link : 'https://test-game-donankor.vercel.app/'
}]
</script>

<style lang="scss" scoped>
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>