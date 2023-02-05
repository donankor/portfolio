<template>
  <div class="container">
    <h6 style="margin-bottom: 10px" >Контакты</h6>

    <div style="margin-bottom: 8px" class="element" >
      <img style="margin-right: 10px" src="/icons/phone.svg" alt="phone">
      <p>+79595481608</p>
    </div>
    <div style="margin-bottom: 8px" class="element" >
      <img style="margin-right: 10px" src="/icons/mail.svg" alt="mail">
      <p>a.koroliov98@gmail.com</p>
    </div>
    <div class="element" >
      <img style="margin-right: 10px" src="/icons/location.svg" alt="location">
      <p>Молдова, Кишинёв</p>
    </div>
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