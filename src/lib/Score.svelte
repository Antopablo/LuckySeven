<script>
  export let score;
  import { currentAccountStore } from "../stores/account";

  let bestScoreAccount = $currentAccountStore.bestScore;

  function saveBestGame() {
    if (score > bestScoreAccount) {
      fetch('http://localhost:4000/api/user/' + $currentAccountStore._id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: $currentAccountStore._id,
          firstName: $currentAccountStore.firstName,
          bestScore: score
        })
      })
    } 
  }

</script>

<div class='fx tx-align-center padding-10 margin-auto'>
  <div class="tx-size-xxl margin-right-20">Score : {score}</div>
  {#if  score > bestScoreAccount} 
  <div class="cursor-pointer margin-auto" on:click={saveBestGame}>💾</div>
  {/if}
</div>

<style>
  .tx-size-xxl {
    font-size: 3em;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .margin-right-20 {
    margin-right: 20px;
  }
</style>