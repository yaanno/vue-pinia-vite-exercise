<script setup lang="ts">
import ArticleTag from './ArticleTag.vue';
const props = defineProps<{ article: Article }>();

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
      <h2>{{ props.article.title }}</h2>
      <p>{{ new Date(props.article.published_at).toLocaleDateString() }}</p>
    </div>
    <div class="article_content">
      <p>{{ props.article.excerpt }}</p>
    </div>
    <div class="article_tags">
      <ArticleTag :tag="tag" v-for="tag in props.article.tags" />
      <ArticleTag :tag="tag" v-for="tag in props.article.places" />
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
}
.article__tag {
  padding: 5px;
}
</style>
