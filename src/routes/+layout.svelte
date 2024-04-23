<script lang="ts">
    import "../app.css";
    import { browser } from "$app/environment";
    if(browser){
        if (window.location.pathname=='/'){
            window.location.href = '/home';
        }
    }
</script>
<body class="font-ubuntu font-semibold p-1 m-1">
    <div class="flex select-none">
        <!--The logo is a placeholder rn need our own original one-->
        <a href="home" class="flex-initial pl-4 pr-4 my-4 content-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>
        <p2 class="flex-initial my-2 border-l-[3px] h-[50px] border-indigo-500"></p2>
        <div class="flex-row left-full items-center my-auto">
            <a href="resources" class="dynav">Resources</a>
            <a href="submit" class="dynav">Submit</a>
            <a href="login" class="absolute right-0 mx-4 px-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>              
        </div>
        <div class="absolute right-0 bottom-0 p-4 m-2">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>                  
            </button>
        </div>
    </div>  
    <slot></slot>
</body>
