<template>
  <div class="container">
    <h1>unko</h1>
    <h1>{{ hoge.fields.txt[0] }}</h1>
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    async asyncData({ env }) {
      const {hoge} = client.getEntries({ content_type: "hoge" })
      .then(entries => { return {hoge} })
      .catch(console.error)
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
