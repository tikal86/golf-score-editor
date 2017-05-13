<template lang="html">
    <div>
        <p>Hole {{hole.HoleNumber[0]}}</p>
        <p>Par {{hole.HolePar[0]}}</p>
    </div>
</template>

<script>
export default {
  props: ['hole']
}
</script>

<style lang="css">
</style>
