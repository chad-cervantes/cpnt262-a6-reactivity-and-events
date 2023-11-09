<script>
  import { createEventDispatcher } from 'svelte';

  export const dispatch = createEventDispatcher();
  
  export const message = () => {
    dispatch('soccerMessage', {message: 'Added player'});
  }

</script>

<!--Event Dispatch button-->
<button on:click={message}>Add Player</button>
