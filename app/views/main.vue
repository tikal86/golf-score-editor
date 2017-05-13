<template lang="html">
  <v-app id="example-2" left-fixed-sidebar>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="nav2 = !nav2"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">{{title}}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-sidebar left fixed drawer v-model="nav2">
        <v-list>
          <v-list-item v-for="i in 3" :key="i">
            <v-list-tile>
              <v-list-tile-title>Item {{ i }}</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <course :course="course" :holes="holes" :player="player"></course>
        </v-container>
      </v-content>
    </main>
  </v-app>
  <div>

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
