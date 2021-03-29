<script>
  import Box from '$lib/Box.svelte';
  import styled from '$lib/styled';

  let bgColor = '$primary';
</script>

<label for="choose-bg" use:styled={{ color: { '@initial': 'red', '@md': 'blue' } }}>{bgColor}</label>
<input id="choose-bg" type="color" bind:value={bgColor} />

<Box bg={bgColor} boxSize="100px" />
