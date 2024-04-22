<script>
    import "../../app.css"
    import { onMount, onDestroy } from 'svelte';
	import { slide, blur } from 'svelte/transition';
	
	let words = ['to Share', 'to Learn', 'to do more'];
	let index = 0;
	let roller = 0;
	
	onMount(() => {
		roller = setInterval(() => {
			if (index === words.length - 1) index = 0;
			else index++;
		}, 2500);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<body class="font-ubuntu font-semibold mt-5 p-2 m-2">
    <h1 class="text-6xl">Welcome to <p class="pt-2 mt-2 underline">Gojila!</p></h1>

    <div class="text-3xl font-normal pt-2 mt-4">
        <h1>A place
        {#key index}
        <h1 class="inline-flex" out:slide={{ duration: 400 }} in:slide={{ delay: 400, duration: 400 }}>{words[index]}!</h1>
        {/key}
        </h1>
    </div>
    <div class="flex flex-wrap gap-4 m-4 overflow-hidden justify-center items-center">
        <!-- TODO: Container for newly submitted notes-->
    </div>
</body>