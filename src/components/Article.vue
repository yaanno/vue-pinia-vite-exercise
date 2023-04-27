<script setup lang="ts">
import ArticleTag from './ArticleTag.vue';
defineProps<{ article: Article }>();

export interface Article {
  title: string;
  excerpt: string;
  published_at: string;
  tags: string[];
  slug: string;
  places: string[];
}
</script>

<template>
  <div class="article">
    <div class="article_header">
      <h2>{{ article.title }}</h2>
      <p>{{ new Date(article.published_at).toLocaleDateString() }}</p>
    </div>
    <div class="article_content">
      <p>{{ article.excerpt }}</p>
    </div>
    <div class="article_tags">
      <ArticleTag :tag="tagValue" type="tags" v-for="tagValue in article.tags" />
      <ArticleTag :tag="placeValue" type="places" v-for="placeValue in article.places" />
    </div>
  </div>
</template>

<style>
.article {
  width: 32%;
}
.article_tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
}

</style>
