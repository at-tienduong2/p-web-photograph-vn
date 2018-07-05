<template>
  <header>
    <div class="header" :class="{'sticky-header': isScroll}">
      <div class="container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <a class="col-3" href>
            <img class="logo" src="../../assets/images/logo.png" alt="">
          </a>
          <ul class="main-nav col-6 d-flex justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.home')}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.wedding')}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.yearbook')}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.events')}}</a>
            </li>
            
          </ul>
          <ul class="col-3 d-flex socials justify-content-end">
            <a class="btn btn-sm btn-outline-secondary" href="#">Sign in</a>
          </ul>
        </div>
      </div>
    </div>
    <section id="slider" class="banner">
    </section>
  </header>
</template>

<script>
  export default {
    name: "header-page",
    data () {
      return {
        scroll: 0,
        isScroll: false
      }
    },
    methods: {
      handleScroll (event) {
        if( $(window).scrollTop() >= 200) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>
