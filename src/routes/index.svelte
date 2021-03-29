<script>
	import Box from '$lib/Box.svelte'

	let bgColor = '$primary'
</script>

<label for="choose-bg">{bgColor}</label>
<input id="choose-bg" type="color" bind:value={bgColor} />

<Box
	bg={bgColor}
	boxSize='100px'
/>
