<template>
  <div class="grid-article">
    <pre-article :type="'biggest-preview'"/>
    <pre-article :type="'side-preview'" :desc="1"/>
    <pre-article :type="'side-preview'" :desc="1"/>
    <pre-article :type="'side-preview'" :desc="1"/>
  </div>
</template>

<script>
export default {
  name: 'grid-article',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
