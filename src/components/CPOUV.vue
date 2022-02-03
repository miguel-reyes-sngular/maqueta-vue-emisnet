<template>
  <div class="cpouv">
    <div class="radioButtons">
      <h5>CPO/UV</h5>
      <div class="tipoCPO">
        <label for="tipoCPO">Tipo de alta CPO</label>
        <input type="radio" name="tipoAlta" id="tipoCPO" value="cpo" checked @change="changeValue()">
      </div>
      <div class="tipoUV">
        <label for="tipoUV">Tipo de alta UV</label>
        <input type="radio" name="tipoAlta" id="tipoUV" value="uv" @change="changeValue()">
      </div>
    </div>
    <CPO v-if="tipoAlta" />
    <UV v-else />
  </div>
</template>

<script>
import CPO from './CPO.vue'
import UV from './UV.vue'

export default {
  components: {
    CPO,
    UV
},

  data() {
    return {
      tipoAlta: true,
      CPO: 'CPO',
      UV: 'UV',
    }
  },

  methods: {
    changeValue() {
      const valor = document.getElementById('tipoCPO').checked;
      valor ? this.tipoAlta = true : this.tipoAlta = false;
    }
  },
}
</script>

<style lang="scss" scoped>
$verde-button: #52a436;
  .cpouv,
  .radioButtons {
    display: flex;
  }

  .cpouv {
    justify-content: space-around;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
  }

  .radioButtons {
    width: 25%;
    justify-content: space-evenly;

    & input[type='radio'] {
      border-radius: 50%;
    }
    & label + input[type='radio']:checked {
      background-color: $verde-button;
    }
  }
</style>