<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <p>Welcome to the {{title}} editor</p>
        <p>Baan: {{course}}</p>
        <course :course="course" :holes="holes"></course>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<style lang="css">
</style>
