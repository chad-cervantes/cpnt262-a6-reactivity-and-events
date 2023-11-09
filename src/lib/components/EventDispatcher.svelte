<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  function defaultFn() {
      dispatch('button', {});
  }

</script>


<!--Button to add a new player-->
<button on:click={defaultFn} class="flex m-auto rounded-md bg-blue-500 px-4 py-2 mx-4 text-white transition ease-linear duration-150 hover:bg-blue-700 active:bg-blue-900">Click To Add Values</button>
