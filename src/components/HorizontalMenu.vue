<template>
  <div class="horizontalMenu">
    <div class="wrapper">
      <div class="upper">
        <header class="header">
          <h2 class="header__h2">EMISNET</h2>
        </header>
        <Options />
      </div>
      <div class="lower">
        <footer class="footer">
          <img src="../assets/grupo-bmv.png" alt="Grupo BMV">
          <a href="#">Aviso de privacidad</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Options from "../views/Options"

export default {
  components: {
    Options
  }
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
$ligth-blue: #86abdc;
$green: #7fbd6b;

  .horizontalMenu {
    position: relative;

    & .header__h2 {
      margin-bottom: 50px;
      margin-left: 15px;
      color: $navy-blue;
    }

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      background-image: url('../assets/edificio.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    & .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;

      & img {
        width: 40%;
        margin-bottom: 15px;
      }

      & a {
        font-size: 12px;
        text-decoration: none;
        color: $ligth-blue;
      }
    }
  }

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .optionsLinks {
    color: gray;
    text-decoration: none;
    font-weight: normal;

    &:active {
      color: $green;
    }
  }

  @media screen and (max-width: 700px) {
    .horizontalMenu {
      display: none;
    }
  }

</style>