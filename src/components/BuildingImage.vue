<template>
  <div>
    <img src="../assets/edificio.png" alt="Edificio" class="edificio">
  </div>
</template>

<script>
export default {
  name: 'BuildingImage',
}
</script>

<style lang="scss" scoped>
  .edificio {
    max-width: 700px;
  }

  @media screen and (max-width: 1000px) {
    .edificio {
      display: none;
    }
  }
</style>