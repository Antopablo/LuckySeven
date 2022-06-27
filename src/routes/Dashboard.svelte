<script>
  import { currentAccountStore } from "../stores/account";
</script>

<div class="fx-column">
  <div>
    Dashboard - {$currentAccountStore.firstName}
  </div>
  <div>
    Dashboard - {$currentAccountStore.bestScore}
  </div>
</div>