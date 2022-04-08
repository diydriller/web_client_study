<template>
  <div class="preview-container">
    <div class="preview">
      <div class="article-preview" v-for="articlePreview of articlePreviews" :key="articlePreview">
        <nuxt-link :to="'vue/'+articlePreview.slug">
          <h3>{{articlePreview.title}}</h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  async asyncData({$content,params}) {
    const articlePreviews = await $content('frontend/vue',params.slug)
      .only(['title','description','slug'])
      .sortBy('createdAt','asc')
      .fetch();
    return {articlePreviews}
  }
})
</script>

<style scoped>

.preview {
  margin: 0 auto;
  max-width: 800px;
}

.article-preview {
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 10px auto 10px;
}

</style>
