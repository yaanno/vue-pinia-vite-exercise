<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDefaultStore } from '../stores/defaultStore'
import { dateToLocaleString } from '../util'
import ArticleTag from '../components/ArticleTag.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import { Tag } from '../components/ArticleTag.vue'

const route = useRoute()
const store = useDefaultStore()
const article = store.articles.find(
	(article) => article.slug === route.params.slug
)
const tags: Tag[] = article!.tags.map((tag) => {
	return { type: 'tags', value: tag }
})
const places: Tag[] = article!.places.map((place) => {
	return { type: 'places', value: place }
})
const allTags: Tag[] = [...tags, ...places]
</script>

<template>
	<BreadCrumb :slug="article!.slug" />
	<div v-if="article">
		<h2>{{ article.title }}</h2>
		<p>{{ dateToLocaleString(article.published_at) }}</p>
		<div class="article_illustration">
			<img src="https://picsum.photos/600/150" alt="Illustration" />
		</div>
		<div class="article_content">
			<p>{{ article.excerpt }}</p>
		</div>
		<div class="article_tags">
			<ArticleTag :tag="tag" v-for="tag in allTags" />
		</div>
	</div>
	<div v-else>
		<h1>Article not found ;_;</h1>
	</div>
</template>
