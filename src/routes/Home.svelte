<script>
import Account from "../lib/Account.svelte"
import Dashboard from "././Dashboard.svelte";
import { currentPlayerNameStore } from "../stores/account";

let currentPlayerName;

currentPlayerNameStore.subscribe(value => {
  currentPlayerName = value;
});

</script>


<main class="fx fx-1">
    <Account />
</main>