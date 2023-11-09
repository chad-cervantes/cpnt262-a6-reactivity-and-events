//Object Array
  export let playerArr = [
    {name: 'Mohamed Salah', team: 'Liverpool FC', position: 'right winger'},
    {name: 'Virgil Van Dijk', team: 'Liverpool FC', position: 'centre back'},
    {name: 'Alexis Mac Allister', team: 'Liverpool FC', position: 'midfielder'},
    {name: 'Allison Becker', team: 'Liverpool FC', position: 'goalie'},
  ];

  export let newPlayerArr = {name:'', team:'', position:''};

  //Add player function
  export function addPlayer() {
    newPlayerArr = playerArr;
  }
  console.log(addPlayer);

