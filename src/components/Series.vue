<template>
  <div>
    <h5>SERIES</h5>
    <button @click="insertSerie">AGREGAR</button>
    <div
      class="seriesInfo"
      ref="seriesInfo"
    >
      <p v-for="(serie, index) in series" :key="index">
        {{ serie }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: []
    }
  },

  methods: {
    insertSerie() {
      this.series.push(`<p>test</p>`)
    },

    deleteSerie() {
    },
  },
}
</script>

<style lang="scss" scoped>
</style>