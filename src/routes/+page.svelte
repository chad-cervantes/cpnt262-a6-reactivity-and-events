<script>
 //Object Array
  let playerArr = [
    {name: 'Mohamed Salah', team: 'Liverpool FC', position: 'right winger'},
    {name: 'Andy Robertson', team: 'Liverpool FC', position: 'left back'},
    {name: 'Allison', team: 'Liverpool FC', position: 'goalie'},
  ];

  console.log(playerArr);
  
  import Event from '../lib/components/Event.svelte';
  
  let newName = {name: ''};
  let newTeam = {team: ''};
  let newPosition = {position: ''};
  
  function update() {
    // playerArr.name = '';
    // playerArr.team = '',
    // playerArr.position = '';
    newName.name = '';
    newTeam.team = '';
    newPosition.position = '';

  }


</script>

<!--for each loop for playerArr-->
<!-- <section class="grid grid-cols-2"> -->
  {#each playerArr as {name, team, position}}
    <p>{name} is a soccer player from {team}, and his position is {position}</p>
  {/each}
<!-- </section> -->


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

<section class="p-4 text-center">
  <label for="add-player">Add Position</label>
  <input bind:value={newPosition} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Position">
</section>

<!--if/else state from <Event />-->



<Event on:button={update}/>



