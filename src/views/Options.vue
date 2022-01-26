<template>
  <div>
    <cv-accordion
      align="end"
    >
      <cv-accordion-item
        v-for="option in options"
        :key="option.index"
      >
        <template v-slot:title>{{ option.title }}</template>
        <template v-slot:content>
          <cv-side-nav-menu-item>
            <router-link v-for="(contenido, index) in option.content" :key="index" class="optionsLinks" :to="option.links[index]">
              {{ contenido }}
              <br />
            </router-link>
          </cv-side-nav-menu-item>
        </template>
      </cv-accordion-item>
    </cv-accordion>
  </div>
</template>

<script>
import { options } from "../helpers/options"

export default {
  data() {
    return {
      options
    }
  },
}
</script>

<style lang="scss" scoped>
$green: #7fbd6b;
.optionsLinks {
  text-decoration: none;
  color: gray;
  &:active {
    color: $green;
  }
}
</style>