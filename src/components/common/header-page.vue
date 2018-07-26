<template>
  <header>
    <div class="upper-header">
      <div class="brand-action">
        <div class="action container">
          <ul>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <ul>
            <li><i class="pg-icon pg-facebook"></i></li>
            <li><i class="pg-icon pg-google"></i></li>
            <li><i class="pg-icon pg-instagram"></i></li>
          </ul>
        </div>
      </div>
      <div class="brand-section">
        <div class="container">
          <img class="logo" src="../../assets/images/picolo-w.png" alt="brand-logo">
          <img class="top-ads" src="http://dahztheme.com/demo/onfleek/revival/wp-content/uploads/sites/8/2016/06/728.jpg">
        </div>
      </div>
    </div>
    <div class="header" :class="{'sticky-header': isScroll}">
      <div class="container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <ul class="main-nav d-flex justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.home')}}</a>
            </li>
            <li class="nav-item">
              <el-dropdown class="nav-link" >
                <span class="el-dropdown-link">
                  {{$t('nav.picofyou')}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.articles')}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.resources')}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{$t('nav.findphoto')}}</a>
            </li>
          </ul>
          <ul class="col-3 d-flex socials justify-content-end">
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-page',
  data () {
    return {
      scroll: 0,
      isScroll: false
    }
  },
  methods: {
    handleScroll (event) {
      if ($(window).scrollTop() >= 200) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
