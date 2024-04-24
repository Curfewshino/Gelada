<script>
    // @ts-nocheck
    import '../../app.css'
    import Dropzone from "svelte-file-dropzone";

    const messages = [
        "Drop your pdf here!\n or click me!\n (100Mb or 10 Files Limit)",
        "Maximum amount of Files reached",
        "Your file is too large!"
    ]
    let message = messages[0];
    
    const maxfilenamelength = 22;
    let stopacceptFiles = false;
    let files = {
        accepted: [],
        rejected: []
    };
  
    function handleFilesSelect(e) {
        console.log(e.detail);
        message = messages[0];
        const { acceptedFiles, fileRejections } = e.detail;
        files.accepted = [...files.accepted, ...acceptedFiles];
        files.rejected = [...files.rejected, ...fileRejections];
        limiter();
    }
    function namelengthcheck(name){
        if(name.length>=maxfilenamelength){
            return (name.substring(0, maxfilenamelength) + '...');
        }
        else{return name}
    }
    function handleRemoveFile(e, index) {
        files.accepted.splice(index, 1);
        files.accepted = [...files.accepted];
        limiter();
    }
    function handleRemoveAll() {
        files.accepted = [];
        limiter();
    }
    function handleSubmission(){
        console.log("Pretend that the file is sent na");
        console.dir(files, {'maxArrayLength': null})
        // location.reload();
    }
    function limiter(){
        if (files.accepted.length>=10){
            stopacceptFiles = true
            message = messages[1]
            files.accepted.length=10;
        }else{
            stopacceptFiles = false
            message = messages[0]
        }
    }
    function handleRejection(e){
        message = messages[2];
    }


</script>
<div class="flex justify-center items-center h-[80vh]">
    <div class="w-full max-w-md">
        <form class="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 m" id="loginForm">
            <p class="text-center text-gray-600 font-semibold mb-4">Submit your files</p>
            <Dropzone on:drop={handleFilesSelect} accept={'.pdf'} maxSize={100000000} disabled={stopacceptFiles} on:droprejected={handleRejection}>
                <p class="text-center whitespace-pre-line">{message}</p>
            </Dropzone>
            <ol class="overflow-clip content-center">
                {#each files.accepted as item, index}
                <li class="m-auto pt-3">{namelengthcheck(item.name)}<button class="inline-block float-right p-1 border-2 border-red-600 bg-red-600 rounded-md text-white shadow-md" on:click={(e) => handleRemoveFile(e, index)}>Remove</button></li>
                {/each}
                
            </ol>
            {#if (files.accepted.length!=0)}
                <div class="my-2 pb-4">
                    <button  class="float-left ml-auto mr-0 mt-2 mb-2 px-2 p-1 border-2 border-green-600 bg-green-600 rounded-md text-white shadow-md" on:click={handleSubmission}>Submit</button>
                    <button class="float-right ml-auto mr-0 mt-2 mb-2 p-1 border-2 border-red-600 bg-red-600 rounded-md text-white shadow-md" on:click={handleRemoveAll}>Remove all</button>
                </div>
            {/if}
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2024 Gelada. Created under the GNU GPL
        </p>
    </div>
</div>