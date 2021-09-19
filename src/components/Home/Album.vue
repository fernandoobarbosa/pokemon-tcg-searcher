<template>
  <div>
    <v-row width="200">
      <v-col
        v-for="n in pageOfItems"
        :key="n.id"
        class="d-flex child-flex"
        cols="3"
      >
        <v-img
          zoom="n.images.large"
          :lazy-src="n.images.large"
          :src="n.images.large"
          aspect-ratio="0.8"
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
    <br />
    <div class="card-footer pb-0 pt-3 text-center" v-if="pokemons.length > 0">
      <jw-pagination
        :items="pokemons"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: "",
    pageOfItems: [],
  }),

  props: {
    pokemons: [],
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    handleClick(n) {
      this.$router.push({ path: "/details/" + n.id });
      localStorage.setItem("cardSearched", n.name);
      console.log(n);
    },
  },
};
</script>

<style lang="scss" scoped></style>
