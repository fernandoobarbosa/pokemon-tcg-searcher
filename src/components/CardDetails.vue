<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="450">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        v-if="pokemon.images !== undefined"
        :lazy-src="pokemon.images.large"
        :src="pokemon.images.large"
        aspect-ratio="1"
        class="grey lighten-2"
        height="600"
        width="450"
      />
    </v-card>
    <div class="text-center">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="goBackToHome"
        v-if="pokemon.images !== undefined"
      >
        Go back
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {},
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    goBackToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
