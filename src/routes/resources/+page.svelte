<script lang="ts">
    import "../../app.css";
    import { page } from '$app/stores';
    import { Search, Button } from 'flowbite-svelte';
    function searchHandler(){
        console.log($page.url.searchParams.get('tag'));
    }


</script>
<div class="m-4">
    <h1 class="text-4xl">
        <p1>Resources</p1>
        <Search on:input={searchHandler}>
            <Button>Search</Button>
        </Search>
    </h1>
   
</div>