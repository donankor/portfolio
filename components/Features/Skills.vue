<template>
  <div class="container">
    <h6 style="margin-bottom: 10px" >Ключевые навыки</h6>

    <li class="element" v-for="skill in skills" >{{skill}}</li>

    <h6 style="margin: 15px 0" >О себе</h6>


    <p style="line-height: 25px; font-size: 16px" >
      Легко обучаюсь новому и люблю это.
      Нахожу себя довольно общительным человеком. Легко работаю в команде. Веду здоровый образ жизни. Стрессоустойчивый, пунктуальный.
    </p>

  </div>
</template>

<script setup >
  const skills = ['HTML', 'CSS (SCSS)', 'JavaScript', 'Nuxt', 'Vue', 'Composition Api', 'Pinia', 'React JS', 'Git', 'Figma' ]
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
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 15px;
  }
}
</style>