<script lang="ts">
    import "../../app.css";
</script>
<div class="flex justify-center items-center h-[80vh]">
    <div class="w-full max-w-md">
        <form class="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4" id="loginForm">
            <p class="text-center text-gray-600 font-semibold mb-4">Admin login</p>
            <noscript><p class="font-semibold text-gray-600">Please enable javascript</p></noscript>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
                <p id="onCorrect" class="text-green-500 hidden">Correct! Proceeding...</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="loginButton">
                    Sign In
                </button>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2024 Gelada. Created under the GNU GPL
        </p>
    </div>
</div>