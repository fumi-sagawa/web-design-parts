<script>
	import Header1 from '$lib/header/Header1.svelte';
	import Header2 from '$lib/header/Header2.svelte';
	import Header3 from '$lib/header/Header3.svelte';
	import Header4 from '$lib/header/Header4.svelte';
</script>

<template lang="pug">
  .partsGrid.margintb20
    .ContainerGrid
      div
        h1 Header1
        Header1
      div
        h1 Header2
        Header2
      div
        h1 Header3
        Header3
      div
        h1 Header4
        Header4
</template>

<style>
	.margintb20 {
		margin: 100px 0;
	}
	h1 {
		font-size: 20px;
		margin-bottom: 8px;
	}
	.ContainerGrid {
		display: grid;
		row-gap: 20px;
	}
</style>
