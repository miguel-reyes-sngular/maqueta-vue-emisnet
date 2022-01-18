<template>
  <div class="horizontalMenu">
    <div class="wrapper">
      <div class="upper">
        <header class="header">
          <h2 class="header__h2">EMISNET</h2>
        </header>
        <CvAccordion
          align="end"
        >
          <CvAccordionItem
            v-for="option in options"
            :key="option.id"
          >
            <template v-slot:title>{{ option.title }}</template>
            <template v-slot:content>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus voluptate nobis labore voluptatum est, rerum obcaecati ipsam consequuntur ducimus mollitia amet rem, quod blanditiis odio nisi ad? Quia, neque.
              </p>
            </template>
          </CvAccordionItem>
        </CvAccordion>
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

export default {
  data() {
    return {
      options: [
        {
          title: 'Inicio',
          index: 0,
        },
        {
          title: 'Captura y envío',
          index: 1,
        },
        {
          title: 'Documentos enviados',
          index: 2,
        },
        {
          title: 'Inscripción de Valores',
          index: 3,
        },
        {
          title: 'Contacto',
          index: 4,
        },
        {
          title: 'Cambiar contraseña',
          index: 5,
        },
        {
          title: 'Salir',
          index: 6,
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
$ligth-blue: #86abdc;
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
</style>