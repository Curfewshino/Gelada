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
		}, 1250);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});
</script>
<div class="mt-6 p-2">
    <h1 class="text-6xl">Welcome to <p class="pt-2 mt-2 underline">Gelada!</p></h1>
    <div class="text-3xl font-normal pt-2 mt-4">
        <h1>A place
        {#key index}
        <h1 class="inline-flex" out:slide={{ duration: 400 }} in:slide={{ delay: 400, duration: 400 }}>{words[index]}!</h1>
        {/key}
        </h1>
    </div>
    <div class="mt-5 pt-2">
        <h1 class="text-2xl font-normal pb-2">Recently added note</h1>
        <div class="flex flex-wrap gap-4 overflow-hidden justify-center items-center md:justify-start md:items-end">
            <div class="homebox" id="box1">
                <div class="float-right border-red-500 rounded-l-lg rounded-[2px] border-2 w-[30%] h-full ">
                    <!--Preview Image Zone-->
                </div>
                <div class="float-left border-blue-500 rounded-r-rg rounded-[2px] border-2 w-[70%] h-full ">
                    <div class="text-left">
                        <p class="text-lg">Placeholder Text</p>
                        <p class="text-md">Topic : Placeholder</p>
                        <p class="text-[10px]">Date Submitted : PL/HL/ER</p>
                        <p class="font-normal text-xs">Placeholder Extended Descriptive Text Now even longer than before and its even longer now holy shit it is very long</p>
                    </div>
                </div>
            </div>
            <div class="homebox"id="box2">
            
            </div>
            <div class="homebox"id="box3">
            
            </div>
        </div>
    </div>
</div>