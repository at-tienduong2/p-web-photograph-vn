<template>
  <div class="carousel variable-width">
    <div class="image" style="width: 1000px">
      <img src="http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/bg1.jpg')">
      <div class="slider-content">
        <a class="title-font slider btn btn-primary">BEAUTY </a>
        <h2 class="entry-title">Champagne Jell-oshort Shots Are Full</h2>
        <a class="title-font slider btn btn-primary">SEE MORE </a>
      </div>
    </div>
    <div class="image" style="width: 1000px">
      <img src="http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/bg3.jpg')">
    </div>
    <div class="image" style="width: 1000px">
      <img src="http://themewinter.com/WP/blogline/wp-content/uploads/2016/02/post71.jpg')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  mounted () {
    $('.variable-width').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
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
