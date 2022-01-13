<template>
  <div class="customForm">
    <h2>EMISNET</h2>
    <form action="" class="innerForm">
      <label for="username">Usuario</label>
      <input type="text" id="username" placeholder="Usuario" autocomplete="username">
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="*****" autocomplete="current-password">
      <img src="" alt="captcha">
      <input type="text" id="captcha" placeholder="ESCRIBE AQUÍ EL TEXTO DE LA IMAGEN">
      <button>ENTRAR</button>
      <span>
        <a href="forgot-password">Olvidé mi contraseña</a>
        /
        <a href="change-password">Cambiar contraseña</a>
      </span>
      <div class="newUser">
        <i></i>
        <span>Solicitar usuario nuevo</span>
      </div>
    </form>
    <div class="contactUs">
      <span>Contáctanos</span>
      <i></i>
      <i></i>
    </div>
    <a href="aviso-privacidad">Aviso de privacidad</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$white: #fff;
  .customForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $white;
    height: 100%;
  }

  .innerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
  }
</style>