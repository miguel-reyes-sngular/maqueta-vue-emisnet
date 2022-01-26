<template>
  <div>
    <cv-accordion align="end">
      <cv-accordion-item>
        <template slot="title">Datos iniciales</template>
        <template slot="content">
          <form class="datosIniciales">
            <div class="clave_emisora">
              <label for="clavesEmisoras">Clave de emisora</label>
              <select name="" id="clavesEmisoras" v-on:change="getRazonSocial">
                <option :value="clave" v-for="({clave}, index) in clavesEmisoras" :key="index">
                  {{ clave }}
                </option>
              </select>
            </div>
            <div class="razon_social">
              <span>Razón social</span>
              <span id="razonSocial"></span>
            </div>
            <div class="tipo_de_valor">
              <label for="tipoDeValor">Tipo de valor</label>
              <input type="number" name="" id="tipoDeValor" min="1" value="1">
            </div>
            <div class="numero_de_oficio">
              <label for="numeroDeOficio">Número de oficio</label>
              <input type="text" name="" id="numeroDeOficio" value="001/002/SECU/2021">
            </div>
            <div class="fecha_de_oficio">
              <label for="">Fecha de oficio</label>
              <input type="date" name="" id="fechaDeOficio">
            </div>
          </form>
        </template>
      </cv-accordion-item>
    </cv-accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clavesEmisoras: [
        {
          clave: 'Selecciona',
          razonSocial: ''
        },
        {
          clave: 'STAR',
          razonSocial: 'STAR S.A. de C.V.'
        },
        {
          clave: 'MEX',
          razonSocial: 'MEXICANA DE MINERÍA S.A. DE C.V.'
        }
      ]
    }
  },

  methods: {
    getRazonSocial() {
      const option = document.getElementById('clavesEmisoras').value;
      const razonSocial = this.clavesEmisoras.find(({clave}) => clave === option).razonSocial;
      document.getElementById('razonSocial').innerHTML = razonSocial;
    },
  }
}
</script>

<style lang="scss" scoped>
$azul-textos: #2c3543;
$gris: #dddddd;
$gris-textos: #8b8d91;

  .datosIniciales {
    display: grid;
    gap: 10px;
    grid-template-areas: "a b b b"
                        "c d e .";

    & div {
      display: flex;
      flex-direction: column;

      & label {
        color: $azul-textos;
        font-weight: bold;
      }

      & #clavesEmisoras,
        input[type="number"],
        input[type="text"],
        input[type="date"] {
          border: none;
          border-bottom: 1px solid $gris;
        }
    }

    & .clave_emisora {
      grid-area: a;
    }

    & .razon_social {
      grid-area: b;
      background-color: $gris;

      & span {
        color: $gris-textos;
      }
    }

    & .tipo_de_valor {
      grid-area: c;
    }

    & .numero_de_oficio {
      grid-area: d;
    }

    & .fecha_de_oficio {
      grid-area: e;

      input[type="date"] {
        text-transform: uppercase;
      }
    }
  }
</style>