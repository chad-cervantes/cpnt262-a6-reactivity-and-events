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

  import Carousel from '../lib/components/Carousel.svelte';

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

//Carousel for playerArr

// current index counter
let currentSlideIndex = 0;

let currentSlideContent = playerArr[0];

// the max length of the array
const maxLength = playerArr.length - 1;

// next function
function nextSlide() {
  if (currentSlideIndex === maxLength) {
    currentSlideIndex = 0;
    currentSlideContent = playerArr[currentSlideIndex];
  } else {
    currentSlideIndex++;
    currentSlideContent = playerArr[currentSlideIndex];
  }
}

// previous function
function prevSlide() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = maxLength;
    currentSlideContent = playerArr[currentSlideIndex]
  } else {
    currentSlideIndex--;
    currentSlideContent = playerArr[currentSlideIndex];
  }
}
</script>

 <h1 class="text-center text-5xl bg-pink-400 p-4">Add a list of soccer players from Europe</h1>

 <h2 class="text-center text-2xl bg-indigo-400 p-4">Dark Mode Toggle</h2>

 <!--Dark Mode prop-->
<DarkMode />

<h2 class="text-center text-2xl bg-indigo-400 p-4 mb-4">Carousel of players</h2>

<!--Carousel for players-->
<Carousel />

<h2 class="text-center text-2xl bg-indigo-400 p-4">Inputs to add new players</h2>

<!--Manipulation of CSS through dark/light mode toggle-->
<style>
  :global(body) {
    background-color: white;
    color: black;
    transition: 0.5s;
  }

  :global(body.dark-side) {
   background-color: darkslategray;
   color: white;
  }
</style>

<!--Input field-->

<!--Add Name-->
<section class="p-4 text-center">
  <label for="add-player">Add Name</label>
  <input bind:value={newName} type="text" id="add-player"  class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6 bg-white" placeholder="Name">
</section>

<!--Add Team-->
<section class="p-4 text-center">
  <label for="add-player">Add Team</label>
  <input bind:value={newTeam} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6 bg-white" placeholder="Team">
</section>

<!--Add Position-->
<section class="p-4 text-center">
  <label for="add-player">Add Position</label>
  <input bind:value={newPosition} type="text" id="add-player" class="block m-auto w-[150px] rounded-lg border-4 border-black p-2 placeholder:text-slate-400  sm:text-sm sm:leading-6 bg-white" placeholder="Position">
</section>

<!--EventDispatcher prop for button to add new players-->
<EventDispatcher on:button={update}/>

<h2 class="text-center text-2xl bg-indigo-400 p-4">List of Players</h2>

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

<!--Making of carousel slide-->
<section class="text-center">
  <h2>{currentSlideIndex}: {currentSlideContent}</h2>
  <div class="flex justify-center p-4 gap-4">
    <button on:click={prevSlide} class="rounded-md bg-sky-300 px-4 py-2" id="prev-slide">Previous</button>
    <button on:click={nextSlide} class="rounded-md bg-sky-300 px-4 py-2" id="next-slide">Next</button>
  </div>
</section>





