<template lang="html">
  <div class="">
      <h1>{{course}}</h1>
      <holes :holes="holes"></holes>
  </div>
</template>

<script>
export default {
    props: ['course', 'holes']
}
</script>

<style lang="css">
</style>
