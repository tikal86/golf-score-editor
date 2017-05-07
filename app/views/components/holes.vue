<template lang="html">
  <div class="">
      <ul>
          <li v-for="hole in holes">
              <a v-bind:href="'/holes/' + hole.HoleNumber">{{ hole.HoleNumber }}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['title', 'holes']
}
</script>

<style lang="css">
</style>
