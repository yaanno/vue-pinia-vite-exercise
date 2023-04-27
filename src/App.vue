<script setup lang="ts">
import articles from "./data/articles.json";
import Article from "./components/Article.vue";
import Search from "./components/Search.vue";
import { useDefaultStore } from "./stores/defaultStore";

const sortedArticles = articles.sort(
  (a, b) =>
    new Date(a.published_at).getTime() -
    new Date(b.published_at).getTime()
)
const tags = sortedArticles.flatMap(article => article.tags);
const filteredTags = [... new Set(tags)];

const places = sortedArticles.flatMap(article => article.places).filter(p => p);
const filteredPlaces = [... new Set(places)];

const store = useDefaultStore();

store.$patch({
  articles: sortedArticles,
  tags: filteredTags,
  places: filteredPlaces,
})

store.$subscribe(() => {
  store.filterArticles()
})

</script>

<template>
  <h1>Latest Articles</h1>
  <Search />
  <div class="articles" v-if="store.filteredArticles.length">
    <Article v-for="article in store.filteredArticles" :article="article" :key="article.slug" />
  </div>
</template>

<style>
.articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
