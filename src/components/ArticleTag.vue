<script setup lang="ts">
import { useDefaultStore } from "../stores/defaultStore";
import { Filter } from "./Search.vue";

export interface Tag {
	value: string
	type: 'tags' | 'places'
}

defineProps<{tag: Tag}>();

const store = useDefaultStore();

// sad face, needs a model rly
const addFilter = (filter: Filter) => {
	store.$patch(() => {
		store.filters[filter.type].push(filter.value);
	})
}
</script>

<template>
	<span @click="() => addFilter({ type: tag.type, value: tag.value })" class="article__tag">{{ tag.value }}</span>
</template>

<style>
.article__tag {
  padding: 0 5px;
  background: ghostwhite;
  border-radius: 8px;
  border: 1px solid lightgray;
}
.article__tag:hover {
	cursor: pointer;
	background: lightgray;
}
</style>