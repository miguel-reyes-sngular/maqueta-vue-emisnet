<template>
  <section class="proporcion">
    <h5>Proporción</h5>
    <BotonAgregar>
      AGREGAR
    </BotonAgregar>
    <cv-select label="Serie CPO">
      <cv-select-option selected value="">
        Selecciona
      </cv-select-option>
      <cv-select-option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </cv-select-option>
    </cv-select>
  </section>
</template>

<script>
import BotonAgregar from '@/components/BotonAgregar'

export default {
  components: {
    BotonAgregar
  },

  data() {
    return {
      options: ['A', 'B', 'C'],
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>