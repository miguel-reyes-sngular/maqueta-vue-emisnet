<template>
  <cv-button kind="tertiary">AGREGAR</cv-button>
</template>

<style lang="scss" scoped>
$verde-button: #52a436;

.bx--btn--tertiary {
  color: $verde-button;
  border-color: $verde-button;
  grid-area: b;

  &:hover, &:focus, &:active {
    background-color: $verde-button;
    color: white;
  }
}
</style>