<script setup lang="ts">
defineProps<{slug: string}>();
</script>

<template>
	<ul class="breadcrumb">
		<li class="breadcrumb_item">
			<router-link to="/">Home</router-link>
		</li>
		<li class="breadcrumb_item">
			<router-link :to="slug">Article</router-link>
		</li>
	</ul>
</template>

<style>
.breadcrumb {
	display: flex;
	gap: 1rem;
	margin: 1rem 0;
	padding: 0;
}
.breadcrumb_item {
	display: flex;
}
.breadcrumb_item a::after {
	content: '>';
	position: relative;
	right: -.5rem;
}
</style>