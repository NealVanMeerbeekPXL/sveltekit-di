<script lang="ts">
    const {data} = $props();
    const {dmas} = $derived(data);
</script>

{#each dmas as dma}
<h1>{dma.company}</h1>
<h2>{dma.name}</h2>
<h3>{dma.id}</h3>
{/each}
