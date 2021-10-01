<script lang="ts">
  import 'ds/flow.svelte'
  import 'ds/palette.svelte'
  import HelloWorld from "components/HelloWorld.svelte"
  import StateWorker from "workers/state.ts?worker"
  let counter = 'Idle';
  const stateWorker = new StateWorker()
  stateWorker.onmessage = (event) => {
    console.log("Received new value: ", event.data)
    counter = event.data
  }

  const handleMessage = () => {
    stateWorker.postMessage("Message sent!")
  }

  const handleStopMessage = () => {
    stateWorker.postMessage("STOP")
  }
</script>

<main>
  <HelloWorld counter={counter} />
  <div>
    <button on:click="{handleMessage}">Toggle worker</button>
    <button on:click="{handleStopMessage}">Stop worker</button>
  </div>
</main>

