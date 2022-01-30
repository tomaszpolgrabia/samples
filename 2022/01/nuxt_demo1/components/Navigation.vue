<template>
  <div id="app-top">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item" onclick="switchOffMenu()">
          <div class="logo">
            <h2 class="subtitle">
              Tomasz Półgrabia
            </h2>
          </div>
        </NuxtLink>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <NuxtLink to="/" class="navbar-item" onclick="switchOffMenu()">Home</NuxtLink>
          <NuxtLink to="/about" class="navbar-item" onclick="switchOffMenu()">About me</NuxtLink>
          <NuxtLink to="/blog" class="navbar-item" onclick="switchOffMenu()">Blog</NuxtLink>
          <a class="navbar-item"
             target="_blank"
             href="https://www.linkedin.com/in/tomasz-p%C3%B3%C5%82grabia-a0944136/">
            Contact me
          </a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item"
             target="_blank"
             href="https://www.linkedin.com/in/tomasz-p%C3%B3%C5%82grabia-a0944136/">
            <img src="~assets/linkedin.png"
                 class="image is-32x32"
                 alt="linkedin"
                 title="linkedin"/>
          </a>

          <a class="navbar-item"
             target="_blank"
             href="https://gitlab.com/tomasz.polgrabia">
            <img src="~assets/gitlab.png"
                 class="image is-32x32"
                 alt="gitlab"
                 title="gitlab"/>
          </a>

          <a class="navbar-item"
             target="_blank"
             href="https://www.instagram.com/tomasz.polgrabia/">
            <img src="~assets/instagram.png"
                 class="image is-32x32"
                 alt="instagram"
                 title="instagram"/>
          </a>
        </div>
      </div>
    </nav>
    <script>
    window.toggleMenu = function () {
      document.getElementById('navbarBasicExample').classList.toggle('is-active');
      document.querySelector('#app-top .navbar-burger').classList.toggle('is-active');
    };

    window.switchOffMenu = function () {
      document.getElementById('navbarBasicExample').classList.remove('is-active');
      document.querySelector('#app-top .navbar-burger').classList.remove('is-active');
    };

    document.addEventListener('DOMContentLoaded', function() {
      let hoverableEls =
        Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0);

      hoverableEls.forEach(function(el) {
        el.addEventListener('click', function(event) {
          event.stopPropagation();
          let dropdownEl = event.target.closest('.has-dropdown');
          dropdownEl.classList.toggle('is-active');
        });
      });

      let navbarBurger = document.querySelector('#app-top .navbar-burger');
      if (navbarBurger) {
        navbarBurger.addEventListener('click', function() {
          window.toggleMenu();
        });
      }

    });
    </script>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
}
</script>
