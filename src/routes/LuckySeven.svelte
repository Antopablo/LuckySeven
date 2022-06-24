<script>
  import Card from '../lib/Card.svelte';
  import Score from '../lib/Score.svelte';
  import { messageLogStore } from "../stores/log";
  import { currentPlayerNameStore, currentAccountStore } from "../stores/account";
  import {push, pop, replace} from "svelte-spa-router";
  import { onMount } from 'svelte';


  onMount(() => {
		checkAccount();
	});

  let winningNumber = 7;
  let winningCardCount = 0;
  let score = 0;

  let cards = [
    {id:1},
    {id:2},
    {id:3},
  ];

  let currentPlayerName;
  currentPlayerNameStore.subscribe(value => {
    currentPlayerName = value;
  });

  let currentAccount;
  currentAccountStore.subscribe(value => {
    currentAccount = value;
  })

  let numberOfCard = cards.length;
  let topPlay = 0;
  let topCheat = 0;

  function checkAccount() {
    if(!currentPlayerName) {
      push('/');
    }
  }

  function checkVictory(e) {
    winningCardCount++;
    if(winningCardCount === numberOfCard) {
      score++;
      log("You Win !")
    }
  }

  function play() {
    winningCardCount = 0;
    topPlay++;
    log("new draw")
  }

  function cheat() {
    winningCardCount = 0;
    topCheat++;
    log("Cheater :(")
  }

  function log(mess) {
    messageLogStore.set({dateLog: new Date().toLocaleDateString('fr-FR', {year:"2-digit", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", second:"2-digit"}), message : mess})
  }

</script>

{#if currentPlayerName}
  <main class="fx-column fx-1">
    <Score {score} />
    <div class="fx fx-1">
      <div class="fx fx-1 padding-10 jc-space-around">
        {#each cards as card (card.id)}
          <Card winningNumber={winningNumber} 
          id={card.id}
          topPlay={topPlay}
          topCheat={topCheat}
          on:winningCard={checkVictory}
          />
        {/each}
      </div>
    </div>
    
    <div class="fx fx-1 jc-space-around">
      <div class="margin-auto"><button on:click={play}>Play !</button></div>
      <div class="margin-auto"><button on:click={cheat}>Cheat !</button></div>
    </div>
  </main>
{/if}

<style>
  .padding-10 {
    padding: 10px;
  }

  button {
    width: 100px;
    padding: 10px;
    background-color: peru;
    font-size: large;
    color : white;
  }



</style>

