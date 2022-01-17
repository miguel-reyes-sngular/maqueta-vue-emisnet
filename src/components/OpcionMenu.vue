<template>
  <div class="opcionMenu">
    <span> {{ OpcionMenu.option }} </span>
    <img class="rightArrow" src="../assets/icons/chevron--right.svg" alt=">">
  </div>
</template>

<script>
export default {
  props: {
    OpcionMenu: {
      option: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
$options-blue: #636e77;

  .opcionMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: 15px;
    margin-bottom: 15px;

    & span {
      color: $options-blue;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }

    & .rightArrow {
      width: 10px;
      height: 10px;
    }
  }
</style>