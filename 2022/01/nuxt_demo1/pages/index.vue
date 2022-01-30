<template>
  <div>
    <Navigation></Navigation>
    <div id="home">
      <div class="wallpaper"></div>
      <div class="single-button-layout">
          <NuxtLink to="/about"
                       tag="button"
                       class="button is-light is-outlined is-rounded">About me
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
@import "~assets/main.scss";

.description {
    position: absolute;
    top: 15%;
    width: 100%;
    text-align: center;
    color: white;
}

div.single-button-layout {
    position: absolute;
    top: 70%;
    width: 100%;
    text-align: center;
}

#home .wallpaper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: url("~assets/home.jpg") no-repeat center center;
    background-size: cover;
    opacity: 1;
}

</style>
