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
        <TipoDeOferta />
        <Series />
        <Sumatoria />
        <Totales />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderWelcome from '@/components/HeaderWelcome'
import HorizontalMenu from '@/components/HorizontalMenu'
import DatosIniciales from '@/components/DatosIniciales'
import TipoDeOferta from '@/components/TipoDeOferta'
import Series from '@/components/Series'
import Sumatoria from '@/components/Sumatoria'
import Totales from '@/components/Totales'

export default {
  components: {
    HorizontalMenu,
    HeaderWelcome,
    DatosIniciales,
    TipoDeOferta,
    Series,
    Sumatoria,
    Totales
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

@media screen and (max-width: 700px) {
  .capitalesWrapper {
    grid-template-columns: 1fr;

    & .left {
      display: none;
    }
  }
}
</style>