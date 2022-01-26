<template>
  <div class="capitalesWrapper">
    <section class="left">
      <HorizontalMenu />
    </section>
    <section class="right">
      <HeaderWelcome />
      <div class="interaction_capitales">
        <cv-progress>
          <cv-progress-step label="1" additional-info="Series" />
          <cv-progress-step label="2" additional-info="Detalle de Ofertas" />
        </cv-progress>
        <DatosIniciales />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderWelcome from '@/components/HeaderWelcome'
import HorizontalMenu from '@/components/HorizontalMenu'
import DatosIniciales from '@/components/DatosIniciales'

export default {
  components: {
    HorizontalMenu,
    HeaderWelcome,
    DatosIniciales
},

}
</script>

<style lang="scss" scoped>
.capitalesWrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 90vh;

  & .right {
    & .bx--progress {
      margin: 25px 0;
      /* justify-content: space-between; */
    }
  }
}
</style>