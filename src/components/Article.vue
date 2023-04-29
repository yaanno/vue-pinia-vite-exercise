<script setup lang="ts">
import { dateToLocaleString } from '../util';
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
      <div class="article_illustration">
        <img src="https://picsum.photos/400/250" alt="Illustration">
      </div>
      <h2><router-link :to="article.slug">{{ article.title }}</router-link></h2>
      <p>{{ dateToLocaleString(article.published_at) }}</p>
      
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
.article_header > h2 {
  margin: .5rem 0 1rem;
}
.article_illustration > img {
  width: 100%;
  height: 100%;
}
.article_content {
  margin-bottom: .5rem;
}

.article_content > p {
  margin: .5rem 0;
}
</style>
