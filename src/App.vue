<script setup lang="ts">
import articles from "./data/articles.json";
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
  <!-- // Main header? -->
  <router-view></router-view>
  <!-- // Main footer? -->
</template>
