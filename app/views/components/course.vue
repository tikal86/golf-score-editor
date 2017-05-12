<template lang="html">
  <v-container fluid="fluid">
    <v-row>
      <v-col xs10 offset-xs1>
        <v-card>
          <v-card-row class="green darken-1">
            <v-card-title>
              <span class="white--text">{{course}}</span>
              <v-spacer></v-spacer>
            </v-card-title>
          </v-card-row>
          <v-card-row>
            <v-col xs3>
              <v-card class="green">
                <v-card-text>Baan</v-card-text>
              </v-card>
            </v-col>
            <v-col xs9>
              <v-card class="green">
                <v-card-text>Holes</v-card-text>
              </v-card>
            </v-col>
          </v-card-row>
          <v-card-row>
            <holes :holes="holes"></holes>
          </v-card-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    props: ['course', 'holes']
}
</script>

<style lang="css">
</style>
