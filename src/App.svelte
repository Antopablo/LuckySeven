<script>
  import Router from "svelte-spa-router";
  import { currentPlayerNameStore } from "./stores/account";

  import BlackJack from "./routes/BlackJack.svelte";
  import Home from "./routes/Home.svelte";
  import LuckySeven from "./routes/LuckySeven.svelte";
  import PageNotFound from "./routes/PageNotFound.svelte";

  import Header from "./lib/Header.svelte"
  import Log from './lib/Log.svelte'

  const routes = {
    "/": Home,
    "/LuckySeven": LuckySeven,
    "/BlackJack":BlackJack,

    "*": PageNotFound
  }

  let currentPlayerName;

  currentPlayerNameStore.subscribe(value => {
    currentPlayerName = value;
  });

</script>

<main class="fx-1 fx-column">
  <Header/>

  <div class='fx fx-1 overflow-auto'>
    <div class="fx fx-4">
      <Router {routes} />
    </div>
    {#if currentPlayerName}
      <div class="fx-1  overflow-auto">
        <Log />
      </div>
    {/if}
  </div>
</main>

<style>
  :global(
    html {
      font-family:'Gill Sans MT' !important
    }
    .fx {
    display:flex;
    }

    .fx-column {
      display: flex;
      flex-direction: column;
    }

    .fx-1 {
      flex:1;
    }

    .fx-2 {
      flex:2;
    }

    .fx-3 {
      flex:3;
    }

    .fx-4 {
      flex:4;
    }

    .fx-5 {
      flex:5;
    }

    .overflow-auto {
      overflow: auto;
    }

    .margin-auto {
      margin: auto;
    }

    .tx-align-center {
      text-align: center;
    }

    .jc-space-around {
      justify-content: space-around;
    }
  )
</style>