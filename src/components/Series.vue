<template>
  <div class="seriesDiv">
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
      <div class="seriesWrapper" v-for="(serie, index) in series" :key="index">
        <div class="serieTitulo">
          <label for="serieTitulo">Serie</label>
          <input type="text" id="serieTitulo" :value="serie.titulo">
        </div>
        <div class="numeroTitulos">
          <label for="numeroTitulos">No. de títulos a depositar en Indeval</label>
          <input type="number" id="numeroTitulos" :value="serie.numeroTitulos" min="0">
        </div>
        <div class="numeroAcciones">
          <label for="numeroAcciones">No. de acciones</label>
          <input type="number" id="numeroAcciones" :value="serie.numeroAcciones" min="0">
        </div>
        <div class="importe">
          <label for="importe">Importe</label>
          <input type="number" id="importe" :value="serie.importe" min="1">
        </div>
        <div class="numeroAcciones2">
          <label for="numeroAcciones">No. de acciones</label>
          <input type="number" id="numeroAcciones" :value="serie.numeroAcciones" min="0">
        </div>
        <div class="importe2">
          <label for="importe">Importe</label>
          <input type="number" id="importe" :value="serie.importe" min="0">
        </div>
        <div class="total">
          <label for="total">Total</label>
          <input type="number" id="total" :value="serie.total" min="0">
        </div>
        <button class="eraseButton" @click="deleteSerie">
          <img src="../assets/icons/trash-can.svg" alt="Borrar" width="20px">
        </button>
        <cv-accordion class="serieSelect">
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
          titulo: Date.now(),
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

    deleteSerie(pointerEvent) {
      pointerEvent.target.parentElement.parentElement.remove();
      this.series.splice(pointerEvent.target.parentElement.parentElement, 1);
    },
  },
}
</script>

<style lang="scss" scoped>
$verde-button: #52a436;

.seriesDiv {
  display: grid;
  grid-template-areas: "a b"
                        "c c";
}

h5 {
  color: $verde-button;
  grid-area: a;
}

.bx--btn--tertiary {
  color: $verde-button;
  border-color: $verde-button;
  grid-area: b;

  &:hover, &:focus, &:active {
    background-color: $verde-button;
    color: white;
  }
}

.seriesInfo {
  grid-area: c;
}

.seriesWrapper {
  display: grid;
  grid-template-areas: "serieTitulo numeroTitulos numeroAcciones importe numeroAcciones2 importe2 total eraseButton"
                      "serieSelect serieSelect serieSelect serieSelect serieSelect serieSelect serieSelect serieSelect";

  & .serieTitulo {
    grid-area: serieTitulo;
  }

  & .numeroTitulos {
    grid-area: numeroTitulos;
  }

  & .numeroAcciones {
    grid-area: numeroAcciones;
  }

  & .importe {
    grid-area: importe;
  }

  & .numeroAcciones2 {
    grid-area: numeroAcciones2;
  }

  & .importe2 {
    grid-area: importe2;
  }

  & .total {
    grid-area: total;
  }

  & .eraseButton {
    grid-area: eraseButton;
  }

  & .serieSelect {
    grid-area: serieSelect;
  }

  & .serieFormulario {
    display: grid;
    background-color: #eeeeee;
    align-items: center;
    gap: 10px;
    grid-template-areas: "serie bmv internacional"
                          "cupon porcentajeSuscripcion porcentajeNacional"
                          "listadoMercado derechoPreferente derechosCorporativosLimitados";

    & .serie,
    & .cupon,
    & .porcentajeSuscripcion,
    & .porcentajeNacional {
      display: flex;
      flex-direction: column;
      background-color: white;

      & input[type="text"],
      & input[type="number"] {
        border: none;
        border-bottom: 1px solid gray;
      }
    }

    & .serie {
      grid-area: serie;
    }

    & .bmv {
      grid-area: bmv;
    }

    & .internacional {
      grid-area: internacional;
    }

    & .cupon {
      grid-area: cupon;
    }

    & .porcentajeSuscripcion {
      grid-area: porcentajeSuscripcion;
    }

    & .porcentajeNacional {
      grid-area: porcentajeNacional;
    }

    & .listadoMercado {
      grid-area: listadoMercado;
    }

    & .derechoPreferente {
      grid-area: derechoPreferente;
    }

    & .derechosCorporativosLimitados {
      grid-area: derechosCorporativosLimitados;
    }
  }
}

@media screen and (max-width: 1531px) {
  .seriesDiv {
    display: flex;
    flex-direction: column;

    & .seriesWrapper {
      display: grid;
      grid-template-areas: "serieTitulo numeroTitulos"
                            "numeroAcciones importe"
                            "numeroAcciones2 importe2"
                            "total eraseButton"
                            "serieSelect serieSelect";
      gap: 10px;

      & .eraseButton {
        width: fit-content;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .seriesDiv {
    align-items: center;

    & .seriesInfo {
      & .seriesWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>