<template>
  <div>
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
  </div>
</template>

<script>
import HeaderWelcome from '@/components/HeaderWelcome'
import InformationSquare from '@/components/InformationSquare'
import ChatButton from '@/components/ChatButton'

export default {
  components: {
    HeaderWelcome,
    InformationSquare,
    ChatButton
  },
}
</script>

<style lang="scss" scoped>
$blue-information: #404869;
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

</style>