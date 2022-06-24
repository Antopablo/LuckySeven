<script>
import { currentPlayerNameStore } from "../stores/account";
import {push, pop, replace} from "svelte-spa-router"

let currentPlayerName;

currentPlayerNameStore.subscribe(value => {
  currentPlayerName = value;
});


function disconnectAccount() {
  currentPlayerNameStore.set(undefined);
  push('/');
}

</script>

<main class="fx height-60-px co-bg-blue co-ft-white">
  <div class="fx-1 margin-auto tx-align-center">
    <a href="/">Home</a>
  </div>

  {#if currentPlayerName}
    <div class="fx jc-space-around fx-2 margin-auto">
      <a href="#/LuckySeven">LuckySeven</a>
      <a href="#/BlackJack">BlackJack</a>
    </div>
    
    <div class="fx-1 margin-auto tx-align-center">
      <button type="text" on:click={disconnectAccount} title={currentPlayerName}>Sign Out</button>
    </div>
    {/if}
</main>

<style>
.height-60-px {
  height: 60px;
}

.co-ft-white {
  color: whitesmoke
}

a:link, a:visited {
  color: whitesmoke;
  text-decoration: none;
}

a:hover {
  color : rgb(231, 194, 194);
}



.co-bg-blue {
  background-color:cornflowerblue;
}
</style>