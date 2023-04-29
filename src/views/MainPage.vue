<script setup lang="ts">
import Article from "../components/Article.vue";
import Search from "../components/Search.vue";
import { useDefaultStore } from "../stores/defaultStore";

const store = useDefaultStore();

</script>

<template>
  <h1>Latest Articles
    <span class="article_count" v-if="store.filteredArticles.length">
      ({{ store.filteredArticles.length }})
    </span>
  </h1>
  <Search />
  <div class="articles" v-if="store.filteredArticles.length">
    <Article v-for="article in store.filteredArticles" :article="article" :key="article.slug" />
  </div>
</template>

<style>
.article_count {
  font-size: 50%;
}

.articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 1.5rem;
}
</style>
