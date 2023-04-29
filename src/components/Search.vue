<script setup lang="ts">
import { ref } from 'vue';
import { useDefaultStore } from "../stores/defaultStore";

const store = useDefaultStore();

const tagSelected = ref('');
const placeSelected = ref('');

export interface Filter {
	type: 'tags' | 'places';
	value: string;
}

const addFilter = (filter: Filter) => {
	store.$patch(() => {
		store.filters[filter.type].push(filter.value);
	})
}

const removeFilter = (filter: Filter) => {
	const filtered = store.filters[filter.type].filter(item => item != filter.value);
	store.$patch(() => {
		store.filters[filter.type] = filtered
	})
}

</script>
<template>
	<div class="search">
		<div class="search_tags">
			<select v-model="tagSelected" @change="addFilter({ type: 'tags', value: tagSelected })">
				<option disabled value="">Please select one</option>
				<option v-for="tag in store.tags" :value="tag">{{ tag }}</option>
			</select>
		</div>
		<div class="search_places">
			<select v-model="placeSelected" @change="addFilter({ type: 'places', value: placeSelected })">
				<option disabled value="">Please select one</option>
				<option v-for="place in store.places" :value="place">{{ place }}</option>
			</select>
		</div>
		<div class="search_filters" v-if="store.filters.tags.length || store.filters.places.length">
			<div class="filter_item" v-for="tag in store.filters.tags" @click="removeFilter({ type: 'tags', value: tag })">
				{{ tag }}
			</div>
			<div class="filter_item" v-for="place in store.filters.places"
				@click="removeFilter({ type: 'places', value: place })">
				{{ place }}
			</div>
		</div>
	</div>
</template>

<style>
.search {
	display: flex;
	gap: 1rem;
	margin: 1.5rem 0;
	padding: 1rem 0;
	border-top: 1px solid slategray;
	border-bottom: 1px solid slategray;
}

.search_filters {
	display: flex;
	gap: 1rem;
}

.filter_item {
	background: lightgray;
	padding: 0 0.5rem;
	border-radius: 5px;
	cursor: pointer;
}

.filter_item:hover {
	text-decoration: line-through;
}

</style>