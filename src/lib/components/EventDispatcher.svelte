<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  //function for EventDispatcher
  function defaultFn() {
      dispatch('button', {});
  }

</script>


<!--Button to add a new player-->
<div class="flex justify-center p-4">
  <button on:click|preventDefault={defaultFn} class="flex justify-center rounded-md bg-orange-500 px-4 py-2 mx-4 text-white transition ease-linear duration-150 hover:bg-orange-700 active:bg-orange-900">Add Player</button>
</div>