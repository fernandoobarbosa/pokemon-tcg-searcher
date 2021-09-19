<template>
  <v-container>
    <Form @submit="getPokemonInformation" />
    <Album :pokemons="pokemons" />
  </v-container>
</template>

<script>
import Album from "../components/Home/Album";
import Form from "../components/Home/Form";
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    pokemons: [],
    limit: 5,
  }),
  components: {
    Album,
    Form,
  },
  methods: {
    async getPokemonInformation(cardName) {
      try {
        const { data } = await axios.get(
          "https://api.pokemontcg.io/v2/cards?q=name:" + cardName,
          {
            headers: {
              "x-api-key": "47fa473f-b204-40c0-8dac-ccc5109a9c37",
            },
          }
        );
        console.log(data.data);
        this.pokemons = data.data;
      } catch (e) {
        alert("no records for this card");
      }
    },
  },
};
</script>
