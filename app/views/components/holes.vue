<template lang="html">
<v-container fluid="fluid" class="mt-3">
    <v-row>
      <v-col xs3>
          <v-card class="primary">
            <v-card-text>Par</v-card-text>
          </v-card>
      </v-col>
      <v-col xs1 v-for="i in 9" :key="i">
        <v-row>
        <v-col xs6 v-for="j in 2" :key="j">
          <v-card class="primary">
            <hole :hole = "holes[((i * 2) - (2 - j) -1)]"></hole>
          </v-card>
        </v-col>
      </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs3>
          <v-card class="primary">
            <v-card-text>{{player.PlayerName[0]}}</v-card-text>
          </v-card>
      </v-col>
      <v-col xs1 v-for="i in 9" :key="i">
        <v-row>
        <v-col xs6 v-for="j in 2" :key="j">
          <v-card class="primary">
            <v-card-text>{{player.PlayerHole[(i * 2) - (2 - j) - 1]}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    props: ['title', 'holes', 'player']
}
</script>

<style lang="css">
</style>
