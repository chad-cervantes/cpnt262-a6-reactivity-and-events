<script>
  //Function to turn the page dark
  function darkModeButton () {
    window.document.body.classList.toggle('dark-side')
  }
</script>

<!--button for dark mode toggle-->
<div class="flex justify-center p-4">
  <button on:click={darkModeButton} class="bg-rose-400 text-white rounded-md px-2 py-2 transition ease-linear duration-150">
    Light/Dark mode <slot />
  </button>
</div>

<style>
  :global(body.dark-side) button {
    background-color: darkgoldenrod;
    color: white;
  }
</style>
