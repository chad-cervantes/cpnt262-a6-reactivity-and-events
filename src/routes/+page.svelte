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
{#each playerArr as player}
<p class="p-4 text-center">{player.player}, {player.team}, {player.position}</p>
{/each}