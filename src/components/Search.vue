<script setup lang="ts">
import { ref } from 'vue';
import { useDefaultStore } from "../stores/defaultStore";

const store = useDefaultStore();

const tagSelected = ref('');
const placeSelected = ref('');

const onSelectTag = (tagSelected: string) => {
	store.$patch({
		selectedTag: tagSelected
	})
}

const onSelectPlace = (placeSelected: string) => {
	store.$patch({
		selectedPlace: placeSelected
	})
}

</script>
<template>
	<div class="search">
		<div class="search_tags">
			<select v-model="tagSelected" @change="onSelectTag(tagSelected)">
				<option value="ALL">Please select one</option>
				<option v-for="tag in store.tags" :value="tag">{{ tag }}</option>
			</select>
		</div>
		<div class="search_places">
			<select v-model="placeSelected" @change="onSelectPlace(placeSelected)">
				<option value="ALL">Please select one</option>
				<option v-for="place in store.places" :value="place">{{ place }}</option>
			</select>
		</div>
		<!--
		date
		type -->
	</div>
</template>

<style>
.search {
	display: flex;
	gap: 1rem;
	margin: 0.5rem 0;
	padding: 1rem 0;
	border-top: 1px solid slategray;
	border-bottom: 1px solid slategray;
}
</style>