<script>
import Account from "../lib/Account.svelte"
import Dashboard from "../lib/Dashboard.svelte";
import { currentPlayerNameStore } from "../stores/account";

let currentPlayerName;

currentPlayerNameStore.subscribe(value => {
  currentPlayerName = value;
});

</script>


<main class="fx fx-1">
  {#if !currentPlayerName}
    <Account />
   {:else}
    <Dashboard />
  {/if}
</main>