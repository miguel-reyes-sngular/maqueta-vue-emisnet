<template>
  <section class="proporcion">
    <h5>Proporción</h5>
    <cv-button kind="tertiary">
      AGREGAR
    </cv-button>
    <cv-select label="Serie CPO">
      <cv-select-option selected value="">
        Selecciona
      </cv-select-option>
      <cv-select-option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </cv-select-option>
    </cv-select>
    <div class="acciones"></div>
    <button>
      <img src="../assets/icons/trash-can.svg" alt="Borrar" width="20px">
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: ['A', 'B', 'C'],
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>