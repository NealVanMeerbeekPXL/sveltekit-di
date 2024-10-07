<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

{#each data.d as dma}
<h1>{dma.company}</h1>
<h2>{dma.name}</h2>
{/each}