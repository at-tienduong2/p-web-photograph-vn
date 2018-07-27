<template>
  <div class="carousel responsive">
    <div class="image" style="width: calc(100%/4)">
      <div class="image-box">
        <img src="https://static.highsnobiety.com/wp-content/uploads/2017/07/21120055/sneaker-photos-instagram-supreme-louis-vuitton-yeezy-boost-custom-01-480x320.jpg">
        <div class="slider-content">
          <el-button class="tag tag-size">Success</el-button>
          <h2 class="title-1">Champagne Jell-oshort Shots Are Full</h2>
          <p class="desc-1">DO HONG QUAN - June 06,2018 </p>
        </div>
      </div>
    </div>
    <div class="image" style="width: calc(100%/4)">
      <div class="image-box">
        <img src="https://cdn-images-1.medium.com/max/1732/1*tHfNH7iOUJHznZutbllKPg.jpeg">
        <div class="slider-content">
          <el-button class="tag tag-size">Success</el-button>
          <h2 class="title-1">Champagne Jell-oshort Shots Are Full</h2>
          <p class="desc-1">DO HONG QUAN - June 06,2018 </p>
        </div>
      </div>
    </div>
    <div class="image" style="width: calc(100%/4)">
      <div class="image-box">
        <img src="http://static3.uk.businessinsider.com/image/546baf52dd0895d4088b463a/the-best-instagram-accounts-to-follow.jpg">
        <div class="slider-content">
          <el-button class="tag tag-size">Success</el-button>
          <h2 class="title-1">Champagne Jell-oshort Shots Are Full</h2>
          <p class="desc-1">DO HONG QUAN - June 06,2018 </p>
        </div>
      </div>
    </div>
    <div class="image" style="width: calc(100%/4)">
      <div class="image-box">
        <img src="https://www.booooooom.com/wp-content/uploads/2013/10/instagram-bestof-05.jpg">
        <div class="slider-content">
          <el-button class="tag tag-size">Success</el-button>
          <h2 class="title-1">Champagne Jell-oshort Shots Are Full</h2>
          <p class="desc-1">DO HONG QUAN - June 06,2018 </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      colorArr: [
        '#677e52',
        '#374140',
        '#917a56',
        '#bd4932',
        '#1b5244',
        '#105b63'
      ]
    }
  },
  mounted () {
    // $('.variable-width').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true
    // })
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    var tagList = document.getElementsByClassName('tag')
    for (var item of tagList) {
      item.style.backgroundColor = this.colorArr[Math.floor(Math.random()*this.colorArr.length)]
    }
  }
}
// <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//     <div class="multiple-items">
//       <div class="carousel-item">
//         <div class="image-holder" style="background: url('http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/bg1.jpg')"></div>
//         <div class="slider-content">
//           <h2 class="entry-title">123</h2>
//           <a class="title-font slider btn btn-primary"></a>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <div class="image-holder" style="background: url('http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/bg3.jpg')"></div>
//         <div class="slider-content">
//           <h2 class="entry-title">123</h2>
//           <a class="title-font slider btn btn-primary"></a>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <div class="image-holder" style="background: url('http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/post71.jpg')"></div>
//         <div class="slider-content">
//           <h2 class="entry-title">123</h2>
//           <a class="title-font slider btn btn-primary"></a>
//         </div>
//       </div>
//     </div>
//     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>
</script>
