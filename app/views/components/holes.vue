<template lang="html">
<v-container fluid="fluid">
    <v-row>
      <v-col xs1 v-for="i in 12" :key="i">
        <v-row>
        <v-col xs6 v-for="j in 2" :key="j">
          <v-card class="primary">
            <v-card-text>{{i* j}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-col>
    </v-row>
</v-container>
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
