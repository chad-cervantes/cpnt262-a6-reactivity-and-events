<script>
  //Object Array
  let playerArr = [
    {player: 'Mohamed Salah', team: 'Liverpool FC', position: 'right winger'},
    {player: 'Virgil Van Dijk', team: 'Liverpool FC', position: 'centre back'},
    {player: 'Alexis Mac Allister', team: 'Liverpool FC', position: 'midfielder'},
    {player: 'Allison Becker', team: 'Liverpool FC', position: 'goalie'},
  ];
</script>

<!--for each loop-->
<section class="grid grid-cols-2 grid-rows-">
  {#each playerArr as player}
    <p class="p-4 text-center">{player.player}, {player.team}, {player.position}</p>
  {/each}
</section>

<!--Input field-->
<section class="p-8 text-center">
  <label for="add-player">Add Liverpool Player</label>
  <input type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-4 py-1.5 pl-7 placeholder:text-slate-400  sm:text-sm sm:leading-6" placeholder="Liverpool Player">
</section>