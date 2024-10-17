<script lang="ts">
	let { data } = $props();
</script>

{#each data.dmas as dma}
<h1>{dma.company}</h1>
<h2>{dma.name}</h2>
{/each}