<template>
  <div class="sumatoria">
    <h5>SUMATORIA</h5>
    <div class="numeros">
      <span class="long">0</span>
      <span class="short">500</span>
      <span class="short">500</span>
      <span class="short">500</span>
      <span class="short">500</span>
      <span class="short">500</span>
      <span class="short">500</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.sumatoria {
  width: 100%;
  margin-top: 20px;

  & .numeros {
    display: flex;
    justify-content: space-around;
    & .long,
    .short {
      border-bottom: 1px solid gray;
    }

    & .long {
      width: 20%;
    }

    & .short {
      width: 10%;
    }
  }
}

@media screen and (max-width: 500px) {
  .sumatoria {
    & .numeros {
      flex-direction: column;
      margin-left: 20px;

      & .long,
      .short {
        margin-bottom: 10px;
        width: 90%;
      }
    }
  }
}
</style>