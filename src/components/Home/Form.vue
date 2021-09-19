<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Card"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn rounded color="primary" dark @click="handleClick">
          Search
        </v-btn>
      </div>

      <br />
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    search: "",
  }),
  methods: {
    handleClick() {
      console.log(this.search.toLowerCase());
      this.$emit("submit", this.search);
    },
  },
};
</script>

<style lang="scss" scoped></style>
