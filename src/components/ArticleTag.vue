<script setup lang="ts">
const props = defineProps<{tag: string}>();
</script>

<template>
	<span class="article__tag">{{props.tag}}</span>
</template>
