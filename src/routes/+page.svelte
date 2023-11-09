<script>
  //Arrays from index.js
  import {playerArr} from '$lib/index.js';
  import {newPlayerArr} from '$lib/index.js';
  import {addPlayer} from '$lib/index.js';
</script>

<!--for each loop-->
<section class="grid grid-cols-2">
  {#each playerArr as player}
  <ul class="p-4">
    <li class="text-center">{player.name}</li>
    <li class="text-center">{player.team}</li>
    <li class="text-center">{player.position}</li>
  </ul>
  {/each}
</section>

<!--Input field-->
<!--Add Name-->
<section class="p-4 text-center">
  <label for="add-player">Add Name</label>
  <input bind:value={newPlayerArr.name} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Name">
</section>

<!--Add Team-->
<section class="p-4 text-center">
  <label for="add-player">Add Team</label>
  <input bind:value={newPlayerArr.team} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Team">
</section>

<!--Add Position-->
<section class="p-4 text-center">
  <label for="add-player">Add Position</label>
  <input bind:value={newPlayerArr.position} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Position">
</section>

<!--Button to add a new player-->
<button on:click={addPlayer} class="m-auto rounded-md bg-blue-500 px-4 py-2 mx-4 text-white transition ease-linear duration-150 hover:bg-blue-700 active:bg-blue-900">Click To Add Player</button>