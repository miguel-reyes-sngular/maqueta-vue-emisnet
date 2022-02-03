<template>
  <section class="uvDiv">
    <cv-button
      @click="insertSerie"
      kind="tertiary"
    >
      AGREGAR
    </cv-button>
    <div class="seriesCPOUVWrapper" v-for="(serie, index) in series" :key="index">
      <div class="serie">
        <label for="">Serie</label>
        <input type="text" name="" id="" :value="serie.titulo">
      </div>
      <div class="titulosIndeval">
        <label for="">No. de títulos a depositar en Indeval</label>
        <input type="number" name="" id="" min="0" :value="serie.numeroTitulos">
      </div>
      <div class="uvsListar">
        <label for="">No. de UVs a listar</label>
        <input type="number" name="" id="" min="0" :value="serie.uvsListar">
      </div>
      <div class="uvsOfertar">
        <label for="">No. de UVs a ofertar</label>
        <input type="number" name="" id="" min="0" :value="serie.uvsOfertar">
      </div>
      <div class="inscritaBMV">
        <label for="">Inscrita BMV</label>
        <input type="checkbox" name="" id="" :value="serie.bmv">
      </div>
      <div class="internacional">
        <label for="">Internacional</label>
        <input type="checkbox" name="" id="" :value="serie.internacional">
      </div>
      <div class="listadoMercado">
        <select name="" id="">
          <option
            v-for="(mercado, index) in listadoMercado"
            :value="index"
            :key="index"
          >
            {{ mercado }}
          </option>
        </select>
      </div>
      <div class="cupon">
        <label for="">Cupón vigente</label>
        <input type="number" name="" id="" min="0" :value="serie.cupon">
      </div>
      <button class="eraseButton" @click="deleteSerie">
        <img src="../assets/icons/trash-can.svg" alt="Borrar serie" width="20px">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listadoMercado: ['BMV', 'Mercado Internacional', 'Mercado Nacional'],
      series: []
    }
  },

  methods: {
    insertSerie() {
      this.series.push(
        {
          titulo: Date.now(),
          numeroTitulos: 1,
          uvsListar: 1000,
          uvsOfertar: 1000,
          bmv: true,
          internacional: false,
          cupon: 0,
          suscripcion: 0,
          nacional: 0,
        }
      )
    },

    deleteSerie(pointerEvent) {
      pointerEvent.target.parentElement.parentElement.remove();
      this.series.splice(pointerEvent.target.parentElement.parentElement, 1);
    },
  },
}
</script>

<style lang="scss" scoped>
  @import './scss/CPOUV.scss';
</style>