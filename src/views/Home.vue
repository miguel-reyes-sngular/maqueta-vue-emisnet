<template>
  <div class="home">
    <HorizontalMenu />
    <router-view />
  </div>
</template>

<script>
import Main from '@/components/Main'
import HorizontalMenu from '@/components/HorizontalMenu'

export default {
  name: 'Home',
  components: {
    Main,
    HorizontalMenu
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 90vh;
}

@media screen and (max-width: 1055px) {
  .home {
    grid-template-columns: 25% 75%;
  }
}

@media screen and (max-width: 700px) {
  .home {
    grid-template-columns: 100%;
  }
}
</style>