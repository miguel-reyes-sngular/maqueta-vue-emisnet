<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
$navy-blue: #00004f;
$white: #fff;

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $navy-blue;
  width: 100%;
  height: 50px;

  & a {
    color: $white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
}
</style>
