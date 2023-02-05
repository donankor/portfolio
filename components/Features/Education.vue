<template>
  <div class="container">
    <h6 style="margin-bottom: 8px" >Образование</h6>

    <p style="font-size: 18px; margin-bottom: 8px" >Высшее образование</p>
    <p style="margin-bottom: 8px">
      Славянский университет
    </p>
    <p>
      Специальность актёр, режиссёр театра и кино
    </p>
  </div>
</template>

<script setup >
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