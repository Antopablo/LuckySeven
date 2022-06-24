<script>
    import { messageLogStore } from "../stores/log";
    import { currentPlayerNameStore } from "../stores/account";

    let newLog;
    messageLogStore.subscribe(value => {
      newLog = value;
    });

    let Logs = [];

    $: {newLog, addLog()}

    function addLog() {
      Logs.unshift(newLog);
      Logs = Logs
    }

    function resetLog() {
      Logs = [];
    }

  

    $: {
      $currentPlayerNameStore, resetLog();
    }
</script>


  <div class="overflow-auto">
    {#each Logs as log}
    <div class="fx">
      <div class="dateLog">{log.dateLog}</div>
      <div class="fx-1 margin-left-10">{log.message}</div>
    </div>
    {/each}
  </div>


<style>
  .dateLog {
    color: rgba(39, 38, 38, 0.447);
  }

  .margin-left-10 {
    margin-left: 10px;
  }
</style>