<template>
  <a class="backGroundImage" href="#">
    Información {{ information }}
  </a>
</template>

<script>
export default {
  props: {
    information: String,
  }
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
$sky-blue: #2f9ae2;
  .backGroundImage {
    margin-top: 30px;
    position: relative;
    width: 200px;
    height: 200px;
    text-decoration: none;
    color: $navy-blue;
    font-size: 1.5em;
    font-weight: bold;
    background-image: url('../assets/draw.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 20px;
    padding-left: 20px;

    &:active {
      border: 5px solid $sky-blue;
    }
  }
</style>