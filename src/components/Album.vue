<template>
  <v-row width="200">
    <v-col v-for="n in pokemons" :key="n.id" class="d-flex child-flex" cols="3">
      <v-img
        :lazy-src="n.images.large"
        :src="n.images.large"
        aspect-ratio="1"
        class="grey lighten-2"
        @click="handleClick(n)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    pokemons: [],
  },
  methods: {
    handleClick(n) {
      console.log(n);
    },
  },
};
</script>

<style lang="scss" scoped></style>
