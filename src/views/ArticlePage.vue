<script setup lang="ts">
import { useRoute } from "vue-router";
import { useDefaultStore } from "../stores/defaultStore";
import { dateToLocaleString } from "../util";
import ArticleTag from "../components/ArticleTag.vue";

const route = useRoute();
const store = useDefaultStore();
const article = store.articles.find(article => article.slug === route.params.slug);
</script>

<template>
	<h1>{{ article?.title }}</h1>
	<p>{{ dateToLocaleString(article!.published_at) }}</p>
	<div class="article_content">
      <p>{{ article?.excerpt }}</p>
    </div>
	<div class="article_tags">
      <ArticleTag :tag="tagValue" type="tags" v-for="tagValue in article?.tags" />
      <ArticleTag :tag="placeValue" type="places" v-for="placeValue in article?.places" />
    </div>
</template>