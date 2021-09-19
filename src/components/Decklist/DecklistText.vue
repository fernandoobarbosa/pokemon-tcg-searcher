<template>
  <div>
    <v-container fluid>
      <v-textarea
        name="input-7-1"
        filled
        auto-grow
        v-model="ptcgoExportedDecklist"
      ></v-textarea>
    </v-container>
    <div class="text-center">
      <v-btn rounded color="primary" dark @click="handleClick">
        Search
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ptcgoExportedDecklist: "",
  }),
  methods: {
    handleClick() {
      const PTCGOParser = require("ptcgo-parser");

      const decklist = PTCGOParser.parse(this.ptcgoExportedDecklist);

      console.log(decklist);
      console.log(this.decklist);
    },
  },
};
</script>

<style lang="scss" scoped></style>
