<template>
  <div class="totales">
    <h5>TOTALES</h5>
    <section class="wrapperTotales">
      <div class="accionesCapitalFijo">
        <label for="accionesCapitalFijo">No. de acciones de capital fijo</label>
        <input type="number" name="" id="accionesCapitalFijo" value="0" min="0">
      </div>
      <div class="importeCapitalFijo">
        <label for="importeCapitalFijo">Importe Capital Fijo</label>
        <input type="number" name="" id="importeCapitalFijo" value="1000" min="0">
      </div>
      <div class="accionesCapitalVariable">
        <label for="accionesCapitalVariable">No. de acciones de capital variable</label>
        <input type="number" name="" id="accionesCapitalVariable" value="1000" min="0">
      </div>
      <div class="importeCapitalVariable">
        <label for="importeCapitalVariable">Importe Capital Variable</label>
        <input type="number" name="" id="importeCapitalVariable" value="1000" min="0">
      </div>
      <div class="capitalSocialPagado">
        <label for="capitalSocialPagado">Capital Social Pagado después de la oferta</label>
        <input type="number" name="" id="capitalSocialPagado" value="500" min="0">
      </div>
      <div class="accionesCapitalPagado">
        <label for="accionesCapitalPagado">No. de acciones de capital pagado</label>
        <input type="number" name="" id="accionesCapitalPagado" value="500" min="0">
      </div>
      <div class="porcentaje">
        <label for="porcentaje">Porcentaje libre de suscripción</label>
        <input type="number" name="" id="porcentaje" value="0" min="0" max="100">
      </div>
      <div class="porcentajeNacional">
        <label for="porcentajeNacional">Porcentaje Nacional</label>
        <input type="number" name="" id="porcentajeNacional" value="0" min="0" max="100">
      </div>
      <div class="indicadorValor">
        <label for="indicadorValor">Indicador de valor</label>
        <select name="" id="indicadorValor">
          <option v-for="(indicador, index) in indicadoresValor" :value="index" :key="index">
            {{ indicador }}
          </option>
        </select>
      </div>
      <div class="fijo">
        <label for="fijo">Fijo</label>
        <input type="number" name="" id="fijo" min="0" value="0">
      </div>
      <div class="variable">
        <label for="">Variable</label>
        <input type="number" name="" id="variable" min="0" value="0">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicadoresValor: ['Valor teórico', 'Valor nominal']
    }
  }
}
</script>

<style lang="scss" scoped>
.totales {
  margin-top: 20px;

  & .wrapperTotales {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    & div {
      display: flex;
      flex-direction: column;

      & input[type="number"],
      select {
        border: none;
        border-bottom: 1px solid gray;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .totales {
    & .wrapperTotales {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 600px) {
  .totales {
    & .wrapperTotales {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 450px) {
  .totales {
    & .wrapperTotales {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>