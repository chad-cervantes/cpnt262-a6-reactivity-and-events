<script>
 //Object Array
  let playerArr = [
    {name: 'Mohamed Salah', team: 'Liverpool FC', position: 'right winger'},
    {name: 'Andy Robertson', team: 'Liverpool FC', position: 'left back'},
    {name: 'Allison Becker', team: 'Liverpool FC', position: 'goalie'},
  ];
  
  import EventDispatcher from '../lib/components/EventDispatcher.svelte';
  
  //Variables for adding new variables
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

<EventDispatcher on:button={update}/>

<!--for each loop for playerArr-->
<section class="grid grid-cols-5">
  {#each playerArr as {name, team, position}}
  <ul>
    <li>{name}</li>
    <li>{team}</li>
    <li>{position}</li>
  </ul>
    <!-- <p> {name} is a soccer player from {team}, and his position is {position}</p> -->
  {/each}
</section>








