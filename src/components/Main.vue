<template>
  <div class="mainWrapper">
    <section class="left">
      <horizontal-menu/>
    </section>
    <section class="right">
      <header-welcome />
      <div class="searchBar">
        <h5 class="frequentInformation">Información enviada frecuentemente</h5>
        <cv-search
          id="search-1"
          placeholder="Buscar documento"
          light="light"
          size="small"
        />
      </div>
      <section class="informationSquares">
        <information-square information="mensual"/>
        <information-square information="trimestral"/>
        <information-square information="anual"/>
      </section>
      <cv-date-picker
        kind="single"
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        placeholder="mm/dd/yyyy"
      >
      </cv-date-picker>
      <chat-button />
    </section>
  </div>
</template>

<script>
import HeaderWelcome from '@/components/HeaderWelcome'
import InformationSquare from '@/components/InformationSquare'
import ChatButton from '@/components/ChatButton'
import HorizontalMenu from '@/components/HorizontalMenu'

export default {
  components: {
    HeaderWelcome,
    InformationSquare,
    ChatButton,
    HorizontalMenu
  },
}
</script>

<style lang="scss" scoped>
$blue-information: #404869;

.mainWrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 90vh;
}

.searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: 100px;

  & .frequentInformation {
    margin-right: 50px;
    color: $blue-information;
  }
}

.informationSquares {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
}

.cv-date-picker.bx--form-item {
  margin-top: 50px;
  margin-left: 25px;
}

@media screen and (max-width: 1055px) {
  .informationSquares {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .mainWrapper {
    grid-template-columns: 100%;
  }
}

@media screen and (max-width: 670px) {
  .informationSquares {
    grid-template-columns: 1fr;
  }
}

</style>