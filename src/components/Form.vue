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
      <cv-button kind="tertiary" @click="actionClick">
        ENTRAR
      </cv-button>
      <span>
        <a href="forgot-password">Olvidé mi contraseña</a>
        /
        <a href="change-password">Cambiar contraseña</a>
      </span>
      <div class="newUser">
        <i></i>
        <span>Solicitar usuario nuevo</span>
      </div>
    </cv-form>
    <div class="contactUs">
      <span>Contáctanos</span>
      <i></i>
      <i></i>
    </div>
    <a href="aviso-privacidad">Aviso de privacidad</a>
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
$green: #95c084;
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

  /*cv button*/
  .bx--btn--tertiary {
    color: $green;
    border-color: $green;

    &:hover {
      background-color: $green;
      color: $white;
    }
  }
</style>
