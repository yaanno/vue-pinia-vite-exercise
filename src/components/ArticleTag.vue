<script setup lang="ts">
import { useDefaultStore } from "../stores/defaultStore";
import { Filter } from "./Search.vue";

defineProps<{ tag: string, type: 'tags' | 'places' }>();

const store = useDefaultStore();

// sad face, needs a model rly
const addFilter = (filter: Filter) => {
	store.$patch(() => {
		store.filters[filter.type].push(filter.value);
	})
}
</script>

<template>
	<span @click="() => addFilter({ type: type, value: tag })" class="article__tag">{{ tag }}</span>
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