<script>
 //Original Player Array
  let playerArr = [
    {name: 'Mohamed Salah', team: 'Liverpool FC', position: 'right winger'},
    {name: 'Andy Robertson', team: 'Liverpool FC', position: 'left back'},
    {name: 'Allison Becker', team: 'Liverpool FC', position: 'goalie'},
  ];
  
  //Components importation
  import EventDispatcher from '../lib/components/EventDispatcher.svelte';

  import DarkMode from '../lib/components/DarkMode.svelte';

  //Variables for adding new players
  let newName = '';
  let newTeam = '';
  let newPosition = '';
  
  //Function to add new players
  function update() {
    
    //new array for adding new players
    const addPlayer = {
    name: newName,
    team: newTeam,
    position: newPosition,
    };

    //spread operator
    playerArr = [...playerArr, addPlayer];
  }
</script>

 <h1 class="text-center text-5xl bg-pink-400 p-4">Add a list of soccer players from Europe</h1>

<!--Dark Mode prop-->
<DarkMode />

<!--Manipulation of CSS through dark/light mode toggle-->
<style>
  :global(body) {
    background-color: white;
    color: black;
    transition: 0.5s;
  }

  :global(body.dark-side) {
   background-color: darkcyan;
   color: white;
  }
</style>

<!--Input field-->
<!--Add Name-->
<section class="p-4 text-center">
  <label for="add-player">Add Name</label>
  <input bind:value={newName} type="text" id="add-player"  class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Name">
</section>

<!--Add Team-->
<section class="p-4 text-center">
  <label for="add-player">Add Team</label>
  <input bind:value={newTeam} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Team">
</section>

<!--Add Position-->
<section class="p-4 text-center">
  <label for="add-player">Add Position</label>
  <input bind:value={newPosition} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Position">
</section>

<!--EventDispatcher prop for button to add new players-->
<EventDispatcher on:button={update}/>

<!--for each loop for playerArr-->
<section class="m-auto p-4 grid grid-cols-6">
  {#each playerArr as {name, team, position}}
    <ul class="pb-4">
      <li>{name}</li>
      <li>{team}</li>
      <li>{position}</li>
    </ul>
  {/each}
</section>








