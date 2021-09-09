<template>
  <div><CardDetails :pokemon="pokemon" /></div>
</template>

<script>
import CardDetails from "../components/CardDetails";
import axios from "axios";
export default {
  data: () => ({
    pokemon: {},
  }),
  components: {
    CardDetails,
  },
  async beforeMount() {
    try {
      const { data } = await axios.get(
        "https://api.pokemontcg.io/v2/cards/" +
          this.$route.params.pokemonCardId,
        {
          headers: {
            "x-api-key": "47fa473f-b204-40c0-8dac-ccc5109a9c37",
          },
        }
      );
      var vm = this;
      console.log(data.data);
      vm.pokemon = data.data;
    } catch (e) {
      console.log(e);
    }
  },

  created() {
    //alert(this.$route.params.pokemonCardId);
  },
};
</script>
