<template>
  <section class="proporcion">
    <div class="top">
      <h5 class="title">Proporción</h5>
      <cv-button
        @click="insertProporcion"
        kind="tertiary"
        class="addButton"
      >
        AGREGAR
      </cv-button>
    </div>
    <div class="proporcionWrapper" v-for="(proportion, index) in proportions" :key="index">
      <cv-select label="Serie CPO">
        <cv-select-option selected value="">
          Selecciona
        </cv-select-option>
        <cv-select-option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </cv-select-option>
      </cv-select>
      <div class="acciones">
        <label for="acciones">No. de acciones</label>
        <input type="number" name="" id="acciones" min="0" :value="proportion.acciones">
      </div>
      <button @click="deleteProporcion">
        <img src="../assets/icons/trash-can.svg" alt="Borrar" width="20px">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: ['A', 'B', 'C'],
      proportions: []
    }
  },

  methods: {
    insertProporcion() {
      this.proportions.push(
        {
          acciones: 100,
        }
      )
    },

    deleteProporcion(pointerEvent) {
      pointerEvent.target.parentElement.parentElement.remove();
      this.proportions.splice(pointerEvent.target.parentElement.parentElement, 1);
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "scss/BotonAgregar.scss";

  .proporcion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100%;

    & .top {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    & .title {
      grid-area: title;
    }

    & .addButton {
      grid-area: addButton;
    }

    & .proporcionWrapper {
      grid-area: proportion;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>