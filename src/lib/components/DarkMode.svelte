<script>
  //Function to turn the page dark
  function darkModeButton () {
    window.document.body.classList.toggle('dark-side')
  }
</script>

<!--button for dark mode toggle-->
<button on:click={darkModeButton} class="bg-rose-400 text-white rounded-md px-8 py-4 mx-5 transition ease-linear duration-150">
  Click for light/dark mode <slot />
</button>

<style>
  :global(body.dark-side) button {
    background-color: darkgoldenrod;
    color: white;
  }
</style>
