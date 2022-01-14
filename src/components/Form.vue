<template>
  <section class="customForm">
    <h2 class="h2_title">EMISNET</h2>
    <cv-form action="">
      <cv-text-input
        id="username"
        placeholder="Usuario"
        autocomplete="username"
        :label="usernameLabel"
      />
      <cv-text-input
        id="password"
        type="password"
        placeholder="*****"
        autocomplete="current-password"
        :label="passwordLabel"
      />
      <img src="../assets/captcha.png" alt="captcha">
      <cv-text-input
        type="text"
        id="captcha"
        placeholder="ESCRIBE AQUÍ EL TEXTO DE LA IMAGEN"
      />
      <div class="buttonAccess">
        <cv-button
          kind="tertiary"
          @click="actionClick"
        >
          ENTRAR
        </cv-button>
      </div>
      <div class="passwordActions">
        <span>
          <a href="#">Olvidé mi contraseña</a>
          <span> / </span>
          <a href="#">Cambiar contraseña</a>
        </span>
      </div>
      <div class="newUser">
        <img
          src="../assets/icons/user.svg"
          alt="User Icon"
          class="userSVG"
        />
        <a href="#">Solicitar usuario nuevo</a>
      </div>
    </cv-form>
    <div class="contactUs">
      <span>Contáctanos</span>
      <i></i>
      <i></i>
    </div>
    <a href="#">Aviso de privacidad</a>
  </section>
</template>

<script>

export default {
  methods: {
    actionClick() {
      console.log('click');
    }
  },

  data() {
    return {
      usernameLabel: 'Usuario',
      passwordLabel: 'Contraseña',
    }
  }
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
$white: #fff;
$green: #7fbd6b;

  .customForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $white;
    height: 100%;
  }

  .h2_title {
    color: $navy-blue;
  }

  .buttonAccess {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;
  }

  /*cv button*/
  .bx--btn--tertiary {
    color: $green;
    border-color: $green;
    border-width: 3px;
    border-radius: 5px;
    padding-inline: 0;
    width: 100%;
    justify-content: center;
    font-weight: 600;

    &:hover {
      background-color: $green;
      color: $white;
    }
  }

  .newUser {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;

    & a {
      color: $green;
      text-decoration: none;
    }
  }

  .passwordActions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .userSVG {
    width: 30px;
    height: 30px;
    filter: invert(63%) sepia(65%) saturate(285%) hue-rotate(60deg) brightness(97%) contrast(86%);
  }
</style>
