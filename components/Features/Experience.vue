<template>
  <div class="container">
    <h6 style="margin-bottom: 10px" >Опыт работы</h6>

    <div style="margin-bottom: 15px" v-for="point in exp" :key="point.name" >
      <p class="point" style="margin-bottom: 5px" >{{point.type}}</p>
      <div style="padding: 0 10px" >
        <p style="font-size: 20px; font-weight: 300" >{{point.name}}</p>
        <p style="font-size: 14px; font-weight: 300; color: gray; margin-bottom: 5px" >{{point.time}}</p>
        <p style="font-size: 16px; font-weight: 300" >{{point.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup >
 const exp = [{
   type: 'Graphic/Web Designer',
   name: 'MiRa DS, Кишинев',
   time: '2018 - 2019',
   text: 'Разработка дизайна для печатной продукции, анимационный дизайн.'
 },
 {
   type: 'Tilda, Wix, Vue developer',
   name: 'ProZvon, Кишинев',
   time: '2019 - 2020',
   text: 'Разрабатка сайтов на кострукторе Tilda, Wix. Разработка SPA Vue'
 },
 {
   type: 'FrontEnd developer',
   name: 'FreeLance',
   time: '2021 - 2022',
   text: 'Vue, React FrontEnd разработчик'
 },
 {
   type: 'FrontEnd developer',
   name: 'AmberCore Ltd',
   time: '2022 - 2023',
   text: 'Nuxt 2, Nuxt 3 FrontEnd разработчик'
 }]
</script>

<style lang="scss" scoped>
.container{
  margin: 1%;
  padding: 1%;
  width: 45%;
  background: white;

  border-radius: 15px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 85%;
    padding: 15px;
  }

  .element {
    display: flex;
  }
}
</style>