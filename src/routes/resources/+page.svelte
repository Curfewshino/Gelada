<script lang="ts">
    import "../../app.css";
    import { Search, Button } from 'flowbite-svelte';
    let value = '';
    function searchHandler(){
        console.log(value);
    }


</script>
<div class="m-4">
    <p1 class="text-4xl">Resources</p1>
    <form class="relative flex items-center" id="example-form" on:submit={searchHandler}>
        <div class="flex"></div>
        <Search class="w-[40%]" bind:value />
    </form>
</div>


