<template>
  <div class="loginWrapper">
    <Form />
    <BuildingImageVue />
  </div>
</template>

<script>
import BuildingImageVue from "../components/BuildingImage.vue"
import Form from "../components/Form.vue"

export default {
  name: 'Login',
  components: {
    BuildingImageVue,
    Form
  },
}

</script>
<style lang="scss" scoped>
  .loginWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    .loginWrapper {
      grid-template-columns: 1fr;
    }
  }
</style>