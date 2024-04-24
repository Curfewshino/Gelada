<script>
    import "../../app.css"
    // @ts-ignore
    function checkname(e){
        console.log(e.length);
        if(e.length>=25){
            return e.substring(0, 22) + '...';
        }
        else{return e;}
    }
    const files = {
        accepted: [
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Reviews-1.pdf",
                description: "Social review by mayo",
                file: "Reviews-1.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            },
            { 
                id: 100000000000,
                subject_id: 0,
                year: 12,
                title: "Test.pdf",
                description: "Test review by mayo",
                file: "Test.pdf",
                file_size: 552133, 
                tag_ids: [100000,1000001,1000002],
                posted_at: 1710231660782,
            }
        ]
    };
    import { onMount, onDestroy } from 'svelte';
	// @ts-ignore
	import { slide, blur } from 'svelte/transition';
	import { subjectHandler} from "$lib/components/dataHandler";
	
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
        <div class="snap-x overflow-x-auto flex pb-5">
            <div class="flex mr-4"> <!-- Added mr-4 class to add margin -->
                {#each files.accepted as item, index}
                    <div class="w-[300px] h-[200px] border-2 rounded-[8px] relative mr-4 scroll-ml-2 snap-start">
                        <div class="absolute h-[30px] border-2 right-0 m-2 text-center rounded-xl whitespace-nowrap w-auto px-[10px]"  id='tag'>
                            {subjectHandler(item.subject_id)}
                        </div>
                        <div class="border-2 w-full h-[80%] rounded-t-[6px]">
    
                        </div>
                        <div class="flex justify-center items-center relative h-[20%]">
                            <p class="absolute left-0 ml-2">{checkname(item.title)}</p>
                            <button  class="absolute border-1 mr-2 border-green-500 bg-green-500 text-white text-center right-0 my-auto p-[3px] rounded-md">
                                more info
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>    
</div>