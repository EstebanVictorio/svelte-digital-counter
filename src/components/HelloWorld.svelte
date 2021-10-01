<script lang="ts">
  export let counter = 'Idle';
</script>

<section>
  <div data-counter-wrapper>
    {counter}
  </div>
</section>


<style>
  [data-counter-wrapper] {
    display: flex;
  }
</style>