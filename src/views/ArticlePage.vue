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
	<div v-if="article">
		<h1>{{ article.title }}</h1>
		<p>{{ dateToLocaleString(article.published_at) }}</p>
		<div class="article_illustration">
        <img src="https://picsum.photos/600/150" alt="Illustration">
      </div>
		<div class="article_content">
			<p>{{ article.excerpt }}</p>
		</div>
		<div class="article_tags">
			<ArticleTag :tag="tagValue" type="tags" v-for="tagValue in article.tags" />
			<ArticleTag :tag="placeValue" type="places" v-for="placeValue in article.places" />
		</div>
	</div>
	<div v-else>
		<h1>Article not found ;_;</h1>
	</div>
</template>