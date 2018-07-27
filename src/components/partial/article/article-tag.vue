<template>
  <div class="article-tag">
    <span v-bind:key="item" v-for="item in tag">
      <el-button class="tag tag-size" :style="{'background-color': colorArr[Math.floor(Math.random() * colorArr.length)]}">{{item}}</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'article-tag',
  props: ['tag'],
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
  }
}
</script>
