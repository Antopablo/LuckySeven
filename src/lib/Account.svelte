<script>
	import { onMount } from 'svelte';
  import SignIn from './SignInBox.svelte';
	import { currentAccountStore, currentPlayerNameStore } from '../stores/account'
  
  // emit
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  onMount(async () => {
    await getUsers()
  });


  let registeredPlayers = [];
  let playerName;
 
  // get the input value
  function connectPlayer() {
    // @ts-ignore
    playerName = document.getElementById("InputPlayerName").value;
    currentPlayerNameStore.set(playerName);
    let accountIndex = registeredPlayers.findIndex(x => x.firstName === playerName);
    currentAccountStore.set(registeredPlayers[accountIndex]);
  }

  async function getUsers() {
    await fetch(`http://localhost:4000/api/users/`)
        .then(r => r.json())
        .then(data => {
          registeredPlayers = data;
        });
  }

  async function createPlayer() {
    // @ts-ignore
    const playerName = document.getElementById("InputNewPlayer").value;
    const data = { };
    data.firstName = playerName;
    data.bestScore = 0;

    await fetch('http://localhost:4000/api/user',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(
            () => {
              currentPlayerNameStore.set(playerName);
              currentAccountStore.set(data);
            }
        )
  }

    


  // dispatch new game
  function disptachNewGame() {
    dispatch('resetGame')
  }

  //save only best game
  // function saveBestGame() {
  //   bestScore = localStorage.getItem(playerName);
  //   let messageLog = "";
  //   dispatch('scoreSaved', messageLog);
  // }

  // // get the best score of the player
  // function getBestScore() {
  //   bestScore = localStorage.getItem(playerName);
  // }

  // if playerName change
  // $: {  
  //   playerName, 
  //   getBestScore()
  // }

</script>

<main class="fx fx-1 margin-auto">
  <SignIn>
    <div class="fx-column margin-auto">
      <select id="InputPlayerName">
        <option></option>
        {#each registeredPlayers as player }
          <option data-value={player}>{player.firstName}</option>
        {/each}
      </select>
      <button on:click={connectPlayer}>Sign In</button>
    </div>

    <div class="fx-column margin-auto">
      <input type="text" id="InputNewPlayer" />
      <button on:click={createPlayer}>Register</button>
    </div>
  </SignIn>
</main>

<style>
  button {
    max-width: 100px;
    padding: 10px;
    border-radius: 0;
    box-shadow: none;
    background-color: darkslateblue;
    color: whitesmoke;
    margin: auto;
    cursor:  pointer;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .margin-bottom-5-px {
    margin-bottom: 5px;
  }

  .co-ft-error {
    color : red;
  }
</style>
