<template>
  <div>
    <Navigation></Navigation>
    <div class="about">
      <div class="margin-container">
          <!-- first row -->
          <div class="tile is-parent is-horizontal">
              <div class="tile is-child portrait-small is-4 is-flex"
                   style="align-items: center;flex-direction: column">
                  <figure class="image portrait">
                      <img class="is-rounded" src="~assets/portrait-small.jpg" alt="Potrait"/>
                  </figure>
              </div>
              <div class="tile is-child is-8" style="display: flex; align-items: center; flex-direction: row">
                  <div class="container">
                      <h2 class="title has-text-centered">Who am I?</h2>
                      <p class="content">
                          Profficient fullstack developer who gained experience in technology & financial
                          industry.
                      </p>
                  </div>
              </div>
          </div>
          <!-- second row -->

          <div class="tbox">
              <h2 class="title has-text-centered">Technologies</h2>
          </div>

          <div class="tile is-parent is-vertical is-12">
              <div class="tile is-child">
                  <p class="content">
                      In the beginning of my IT career, I started as a JEE developer. It was a heavy, hard-to-use
                      technology but anyways used in most companies. Because of this hard-to-use, I learnt how to
                      bypass a long process of constant redeployments, just by writing much quicker unit-tests.
                      Unintentionally, it lead me to writing better code as I started to think how to write a
                      testable code. After many years in the industry, I switched to more light-weight web and
                      integration technologies like spring and vertx but the very same techniques of writing code
                      are ironically very up-to-date even though the underlying technology went obsolete or not
                      recommended anymore.
                  </p>
              </div>
              <div class="tile is-parent">
                  <div class="tile is-child is-6">
                      <h1 class="subtitle">Backend technologies</h1>
                      <div class="content">
                          <ul>
                              <li>Java SE + EE</li>
                              <li>JSF</li>
                              <li>JPA, EJB, Message Driven Beans</li>
                              <li>Spring</li>
                              <li>Vertx</li>
                          </ul>
                      </div>
                  </div>
                  <div class="tile is-child is-6">
                      <h1 class="subtitle">Frontend technologies</h1>
                      <div class="content">
                          <ul>
                              <li>Javascript</li>
                              <li>Reasonable knowledge of flow & Typescript</li>
                              <li>Gulp & Webpack</li>
                              <li>React</li>
                              <li>Vue</li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>

          <div class="tbox">
              <h2 class="title has-text-centered">Career</h2>

              <div class="timeline is-centered">
                <header class="timeline-header">
                  <span class="tag is-medium is-primary">Start</span>
                </header>
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <p class="heading">July 2013</p>
                    <div class="position">
                          <div class="position-box">
                              <div class="image-wrapper" style="float: left;">
                                      <a target="_blank" href="https://www.comarch.com/">
                                          <p class="image is-64x64">
                                              <img src="~~/assets/comarch.svg"/>
                                          </p>
                                      </a>
                              </div>
                              <p class="content">
                                  Public government project - development of EPUAP2 project.
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-marker is-icon">
                    <i class="fa fa-flag"></i>
                  </div>
                  <div class="timeline-content">
                    <p class="heading">November 2013</p>
                                                <div class="position">
                          <div class="position-box">

                              <div class="image-wrapper" style="float: right">
                                  <a target="_blank" href="https://www.coi.gov.pl/">
                                      <p class="image is-64x64">
                                          <img src="../assets/coi.png"/>
                                      </p>
                                  </a>
                              </div>

                              <p class="content">
                                  Development of CEPIK2 (central records of vehicles and drivers) - CEK and Resper
                                  projects.
                              </p>
                          </div>
                      </div>

                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-marker is-icon">
                    <i class="fa fa-flag"></i>
                  </div>
                  <div class="timeline-content">
                    <p class="heading">October 2015</p>
                    <div class="position">
                          <div class="position-box">
                              <div class="image-wrapper" style="float: left">
                                      <a target="_blank"
                                         href="https://www.unicreditgroup.eu/en/worldwide/our-worldwide-presence/europe/poland/unicredit-services-s-c-p-a--spoka-akcyjna-o.html">
                                          <p class="image is-64x64">
                                              <img src="../assets/unicredit.png"/>
                                          </p>
                                      </a>
                              </div>
                              <p>
                                  Retail banking - support of the existing backend system, support of CVA Web
                                  Console and internal operation monitoring system.
                              </p>
                          </div>
                      </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-marker is-image is-32x32">
                    <img src="https://bulma.io/images/placeholders/32x32.png">
                  </div>
                  <div class="timeline-content">
                    <p class="heading">March 2017</p>
                    <div class="position">
                          <div class="position-box">

                              <div class="content">

                                  <div class="image-wrapper" style="float: right">
                                      <a href="https://www.goldmansachs.com/" target="_blank">
                                          <p class="image is-64x64">
                                              <img src="../assets/goldman.svg"/>
                                          </p>
                                      </a>
                                  </div>


                                  Investment banking - support of the existing backend system and development of
                                  an integration with the over-the-counter mifid compliant trading platform using
                                  a
                                  fix protocol. Coverage of equity options and convertible bonds.
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <p class="heading">February 2020</p>
                    <div class="position2">
                          <div class="position-box">
                              <div class="image-wrapper" style="float: left;">
                                  <a href="https://www.luxoft.com/" target="_blank">
                                      <p class="image is-64x64">
                                          <img src="../assets/luxoft.png"/>
                                      </p>
                                  </a>
                              </div>
                              <p class="content">
                                  Retail banking - support of the existing backend system used by regional swiss
                                  banks
                                  and development of an integration with the swiss implementation of
                                  <a target="_blank" href="https://adorsys.com/en/products/banking-gateway/">XS2A
                                      Openbanking</a>.
                              </p>
                          </div>
                      </div>
                  </div>
                </div>

                <div class="timeline-header">
                  <span class="tag is-medium is-primary">End</span>
                </div>
              </div>

          </div>

      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style lang="scss">
$tile-spacing: 0;
@import "~assets/main.scss";

html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
}

.footer {
    text-align: center;
}

.portrait {
    max-width: 256px;
    max-height: 256px;
    padding: 1em;
}

.image {
    display: table-cell;
    vertical-align: middle;
}

.about {
    background: url("~assets/about.jpg") fixed;
    background-position-x: 50%;
    background-position-y: 50%;
    height: 100%;
    text-align: justify;

    padding: 2rem 5rem;

    @media screen and (max-width: $tablet) {
        padding: 1rem 2rem;
    }
}

.description {
    padding: 2em;
    text-align: justify;
}

.position {
    padding: 0.5em;
    position: relative;
    height: 100%;
    width: 100%;
}

.position-box {
    @extend .box;
    height: 100%;
    width: 100%;
}

.tbox {
    margin: 1em 0;
}

.margin-container {
    background-color: white;
    opacity: 0.8;
    padding: 1em 3em;
    border-radius: 0.5rem;
}

@media screen and (max-width: $tablet) {
    .margin-container {
        // only on wider screens
        padding: 1em;
    }
}

.position {
    text-align: justify;
}

.image-wrapper {
    padding: 1em;
}

</style>
