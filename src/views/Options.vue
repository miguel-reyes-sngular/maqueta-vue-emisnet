<template>
  <div>
    <CvAccordion
      align="end"
    >
      <CvAccordionItem
        v-for="option in options"
        :key="option.index"
      >
        <template v-slot:title>{{ option.title }}</template>
        <template v-slot:content>
          <cv-side-nav-menu-item>
            <a href="#" v-for="contenido in option.content" :key="contenido" class="optionsLinks">
              {{ contenido }}
              <br />
            </a>
          </cv-side-nav-menu-item>
        </template>
      </CvAccordionItem>
    </CvAccordion>
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
  ul {
    color: black;
    border: 1px solid black;
    height: auto;
    width: 100%;
  }
</style>