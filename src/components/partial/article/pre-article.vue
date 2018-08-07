<template>
  <div class="pre-article">
    <div class="biggest-preview" v-if="type==='biggest-preview'" :style="{'background-image': 'url(https://static.highsnobiety.com/wp-content/uploads/2017/07/21120055/sneaker-photos-instagram-supreme-louis-vuitton-yeezy-boost-custom-01-480x320.jpg)'}">
      <div class="meta">
        <tag :tag="['Success', 'Fail']"/>
        <h2 class="title-1">Champagne Jell-oshort</h2>
        <p class="author-1">DO HONG QUAN - June 06,2018 </p>
      </div>
    </div>
    <div class="side-preview" v-if="type==='side-preview'">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="image-box" :style="{'background-image': 'url(https://static.highsnobiety.com/wp-content/uploads/2017/07/21120055/sneaker-photos-instagram-supreme-louis-vuitton-yeezy-boost-custom-01-480x320.jpg)'}">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="meta">
            <h2 class="title-2">Champagne Jell-oshort</h2>
            <p v-if="desc" class="desc-2">this is a custom excerpt, a place where you can control the excerpt for ... </p>
            <p class="author-2">DO HONG QUAN - June 06,2018 </p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="upper-preview" v-if="type==='upper-preview'">
      <div class="upper-image" :style="{'background-image': 'url(https://static.highsnobiety.com/wp-content/uploads/2017/07/21120055/sneaker-photos-instagram-supreme-louis-vuitton-yeezy-boost-custom-01-480x320.jpg)'}"></div>
      <div class="meta">
        <tag :tag="['Success', 'Fail']"/>
        <h2 class="title-2">Champagne Jell-oshort</h2>
        <a class="author-2" href="">
          <img class="avatar" src="">
          <span>DO HONG QUAN - June 06,2018</span> 
        </a>
        <p class="desc-2">this is a custom excerpt, a place where you can control the excerpt for ... </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pre-article',
  props: ['type', 'desc', 'article'],
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
