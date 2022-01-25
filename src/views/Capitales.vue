<template>
  <div class="capitalesWrapper">
    <section class="left">
      <HorizontalMenu />
    </section>
    <section class="right">
      <HeaderWelcome />
      <cv-progress>
        <cv-progress-step label="1" additional-info="Series" />
        <cv-progress-step label="2" additional-info="Detalle de Ofertas" />
      </cv-progress>
    </section>
  </div>
</template>

<script>
import HeaderWelcome from '@/components/HeaderWelcome'
import HorizontalMenu from '@/components/HorizontalMenu'

export default {
  components: {
    HorizontalMenu,
    HeaderWelcome
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
      margin-top: 20px;
      justify-content: space-between;
    }
  }
}
</style>