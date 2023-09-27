<template>
  <div class="container">
    <h6 style="margin-bottom: 10px">Контакты</h6>

    <div style="margin-bottom: 8px" class="element">
      <img style="margin-right: 10px" src="/icons/phone.svg" alt="phone" />
      <p>+7 995 194 05 95</p>
    </div>
    <div style="margin-bottom: 8px" class="element">
      <img style="margin-right: 10px" src="/icons/mail.svg" alt="mail" />
      <p>a.koroliov98@gmail.com</p>
    </div>
    <div class="element">
      <img
        style="margin-right: 10px"
        src="/icons/location.svg"
        alt="location"
      />
      <p>Молдова, Кишинёв</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  margin: 1%;
  padding: 1%;
  width: 45%;
  background: white;
  //background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='56' ry='56' stroke='%23000000FF' stroke-width='9' stroke-dasharray='11%2c 22' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

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
