<template>
  <button class="chatButton">
    <img src="../assets/icons/chat.svg" alt="Chat">
  </button>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$navy-blue: #00004f;
  .chatButton {
    width: 30px;
    height: 40px;
    background-color: $navy-blue;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 20px;

    & :hover {
      cursor: pointer;
    }

    & img {
      width: 80%;
      height: 80%;
      filter: invert(100%) sepia(0%) saturate(7467%) hue-rotate(119deg) brightness(99%) contrast(103%);
    }
  }
</style>