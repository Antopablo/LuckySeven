<script>
  // emit
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';

  // props
  export let winningNumber;
  export let id;
  export let topPlay;
  export let topCheat;
  // data
  let randomNumber = 0;

  $: {
    if (topPlay > 0) {
      getRandomNumber();
      checkVictory();
    }
  }
  
  $: {  
    if(topCheat > 0) {
      randomNumber = winningNumber;
      checkVictory();
    }
  }


  // functions
  function getRandomNumber() {
      randomNumber = parseFloat((Math.random() * (7 - 6) + 6).toFixed(0));
  }

  function checkVictory() {
    if (randomNumber === winningNumber) {
        dispatch('winningCard', {
			    value: {id}
        });
      }
  }
</script>


<div class="cardFormat fx {randomNumber === winningNumber ? 'winningCard' : ''} " in:fly="{{ y: 200, duration: 1500 }}">
  <div class="margin-auto tx-size-large-xxl">
    {randomNumber}
  </div>
</div>


<style>
  .cardFormat {
    width : 300px;
    height: 350px;
    background-color:rgb(205, 220, 255);
    border-radius: 5%;
  }

  .winningCard {
    background-color:lightgreen;
  }

  .tx-size-large-xxl {
    font-size: 5em;
  }
</style>