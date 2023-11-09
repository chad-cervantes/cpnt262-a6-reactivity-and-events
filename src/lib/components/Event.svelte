<script>
  import { createEventDispatcher } from 'svelte';

  export const dispatch = createEventDispatcher();
  
  function message() {
    alert('Added player');
  }

</script>

<!--Event Dispatch button-->
<button on:click={message}>Add Player</button>
