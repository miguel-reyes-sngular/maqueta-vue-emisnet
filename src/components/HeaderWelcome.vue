<template>
  <header class="header">
    <div class="A">
      <span>A</span>
    </div>
    <div class="welcome">
      <h4>¡Bienvenida {{ userName }}!</h4>
      <p><small>ACTIN - ACTIVER CASA DE BOLSA S.A. DE C.V. GRUPO FINANCIERO ACTINVER</small></p>
    </div>
    <div class="options">
      <span>
        <a href="#">CAMBIAR CONTRASEÑA</a>
        |
        <a href="#">SALIR</a>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Karla Alejandra Briseño García'
    }
  }
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
$white: #ffffff;
$violet-blue: #565895;
  .header {
    background-color: $navy-blue;
    color: $white;
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 5% 75% 20%;

    & .A {
      display: flex;
      justify-content: center;
      align-items: center;

      & span {
        border: 1px solid $white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    & .welcome {
      & p small {
        font-size: 11px;
      }
    }

    & .options {
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;
    }

    & .options span a {
      color: $white;
      text-decoration: none;
      font-size: 11px;
    }

    & .options span a:hover {
      color: $violet-blue;
    }
  }
</style>
