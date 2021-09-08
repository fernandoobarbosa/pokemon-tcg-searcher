<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            @blur="handleBlur"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Pokemon"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    search: "",
  }),
  methods: {
    handleBlur() {
      console.log(this.search.toLowerCase());
      this.$emit("submit", this.search);
    },
  },
};
</script>

<style lang="scss" scoped></style>
