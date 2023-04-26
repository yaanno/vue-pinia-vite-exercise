<script setup lang="ts">
import articles from "./data/articles.json";
import Article from "./components/Article.vue";
import Search from "./components/Search.vue";
import { useDefaultStore } from "./stores/defaultStore";

const tags = articles.map(article => article.tags).flat();
const filteredTags = [... new Set(tags)];

const places = articles.map(article => article.places).filter(p => p).flat();
const filteredPlaces = [... new Set(places)];

const store = useDefaultStore();

store.$patch({
  articles: articles,
  tags: filteredTags,
  places: filteredPlaces,
})

store.$subscribe((_, state) => {
  console.log(state.selectedPlace, state.selectedTag)
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
