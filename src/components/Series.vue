<template>
  <div>
    <h5>SERIES</h5>
    <cv-button
      @click="insertSerie"
      kind="tertiary"
    >
      AGREGAR
    </cv-button>
    <div
      class="seriesInfo"
      ref="seriesInfo"
    >
      <div v-for="(serie, index) in series" :key="index">
        <div class="serieTitulo">
          <label for="serieTitulo">Serie</label>
          <input type="text" id="serieTitulo" :value="serie.titulo">
        </div>
        <div class="numeroTitulos">
          <label for="numeroTitulos">No. de títulos a depositar en Indeval</label>
          <input type="number" id="numeroTitulos" :value="serie.numeroTitulos" min="1">
        </div>
        <div class="numeroAcciones">
          <label for="numeroAcciones">No. de acciones</label>
          <input type="number" id="numeroAcciones" :value="serie.numeroAcciones" min="1">
        </div>
        <div class="importe">
          <label for="importe">Importe</label>
          <input type="number" id="importe" :value="serie.importe" min="1">
        </div>
        <div class="numeroAcciones">
          <label for="numeroAcciones">No. de acciones</label>
          <input type="number" id="numeroAcciones" :value="serie.numeroAcciones" min="1">
        </div>
        <div class="importe">
          <label for="importe">Importe</label>
          <input type="number" id="importe" :value="serie.importe" min="1">
        </div>
        <div class="total">
          <label for="total">Total</label>
          <input type="number" id="total" :value="serie.total" min="1">
        </div>
        <cv-accordion>
          <cv-accordion-item>
            <template v-slot:content>
              <form class="serieFormulario">
                <div class="serie">
                  <label for="serie">Serie</label>
                  <input type="text" id="serie" :value="serie.titulo">
                </div>
                <div class="bmv">
                  <label for="bmv">Inscrita BMV</label>
                  <input type="checkbox" id="bmv" :checked="serie.bmv">
                </div>
                <div class="internacional">
                  <label for="internacional">Internacional</label>
                  <input type="checkbox" id="internacional" :checked="serie.internacional">
                </div>
                <div class="listadoMercado">
                  <cv-select label="Listado de Mercado">
                    <cv-select-option selected value="">Selecciona</cv-select-option>
                    <cv-select-option v-for="(option, index) in options" :key="index" :value="option.value">
                      {{ option.text }}
                    </cv-select-option>
                  </cv-select>
                </div>
                <div class="cupon">
                  <label for="cupon">Cupón vigente</label>
                  <input type="number" id="cupon" :value="serie.cupon" min="0">
                </div>
                <div class="porcentajeSuscripcion">
                  <label for="porcentajeSuscripcion">Porcentaje libre de suscripción</label>
                  <input type="number" id="porcentajeSuscripcion" :value="serie.suscripcion" min="0" max="100">
                </div>
                <div class="porcentajeNacional">
                  <label for="porcentajeNacional">Porcentaje nacional</label>
                  <input type="number" id="porcentajeNacional" :value="serie.nacional" min="0" max="100">
                </div>
                <div class="derechoPreferente">
                  <label for="derechoPreferente">Derecho preferente</label>
                  <input type="checkbox" id="derechoPreferente" :value="serie.derechoPreferente">
                </div>
                <div class="derechosCorporativosLimitados">
                  <label for="derechosCorporativosLimitados">Derechos corporativos limitados</label>
                  <input type="checkbox" id="derechosCorporativosLimitados" :value="serie.derechosCorporativosLimitados">
                </div>
              </form>
            </template>
          </cv-accordion-item>
        </cv-accordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      options: [
        {
          value: "1",
          text: "Mercado Internacional"
        },
        {
          value: "2",
          text: "Mercado Nacional"
        },
      ]
    }
  },

  methods: {
    insertSerie() {
      this.series.push(
        {
          titulo: 'A',
          numeroTitulos: 1,
          numeroAcciones: 1000,
          importe: 500,
          total: 500,
          bmv: true,
          internacional: false,
          cupon: 1000,
          suscripcion: 0,
          nacional: 0,
          derechoPreferente: false,
          derechosCorporativosLimitados: false
        }
      )
    },

    deleteSerie() {
    },
  },
}
</script>

<style lang="scss" scoped>
</style>