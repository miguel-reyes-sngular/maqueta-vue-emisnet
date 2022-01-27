<template>
  <div>
    <h5 class="title">TIPO DE OFERTA</h5>
    <cv-select label="Select label">
      <cv-select-option selected>Elige una opción</cv-select-option>
      <cv-select-option v-for="(oferta, index) in tiposDeOferta" :key="index">
        {{ oferta }}
      </cv-select-option>
    </cv-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiposDeOferta: ['PRIMARIA', 'SECUNDARIA', 'TERCIARIA', 'OTROS'],
    }
  }
}
</script>

<style lang="scss" scoped>
  $azul-textos: #2c3543;

  .title {
    color: $azul-textos;
  }

  .cv-select.bx--form-item {
    width: fit-content;
  }
</style>